import React, {useEffect, useState} from 'react';
import Layout from 'components/Layout';
import Container from 'components/Container';

import axios from 'axios';
import { useRouter } from 'next/router'
import {createQueryString} from 'utils/queryString';
import {paginate} from 'utils/pagination';
import SearchResults from 'features/SearchResults';

const DEFAULT_RESULTS_DATA = {
  count: 0,
  objectIds: [],
  pageObjectsData: [],
  error: false
}
const Search = () => {
  const router = useRouter();
  const [results, setResults] = useState(DEFAULT_RESULTS_DATA)
  const [isLoadingObjectIds, setIsLoadingObjectIds] = useState(false);
  const [isLoadingPageObjects, setIsLoadingPageObjects] = useState(false);

  const getObject = async (objectId) => {
    try {
      const {data} = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`);
      return data;
    } catch(err) {
      console.log('err', err)
    }
  }

  const pageObjectsData = async (objectIds) => {
    setIsLoadingPageObjects(true)
    let objectsData = await Promise.all(
      objectIds.map(async (id) => {
        let res = await getObject(id);
        return res;
      })
    )
    setIsLoadingPageObjects(false)
    return objectsData;
  } 
    
  
  const searchDatabase = async (queryString) => {
    if (!queryString) return;
    setIsLoadingObjectIds(true)
    try {
      const {data: {total, objectIDs}} = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?${queryString}`);

      setIsLoadingObjectIds(false)
      const objects = paginate({currentPage: 1, pageSize: 10, objectIds: objectIDs})
      const res = await pageObjectsData(objects);
      setResults((prevState) => ({
        ...prevState,
        objectIds: objectIDs,
        pageObjectsData: res,
        count: total
      }))
      
    } catch(err) {
      console.log('err', err)
    }

  }

  useEffect(() => {
    if (router.query) {
      const val = createQueryString(router.query);
      searchDatabase(val)
    }
  }, [router.query])

  return (
    <Layout pageTitle='Search'>
      <main>
        <Container>
          <h1>Search</h1>
          <SearchResults count={results.count} loading={isLoadingPageObjects || isLoadingObjectIds} data={results.pageObjectsData} />
        </Container>
      </main>
    </Layout>
  );
};

export default Search;

