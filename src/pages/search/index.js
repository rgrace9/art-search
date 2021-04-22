import React, {useEffect, useState} from 'react';
import Layout from 'components/Layout';
import Container from 'components/Container';
import {GlobalStyle} from 'pages/_app';
import axios from 'axios';
import { useRouter } from 'next/router'
import {createQueryString} from 'utils/queryString';
import {paginate, totalNumberOfPages} from 'utils/pagination';
import SearchResults from 'features/SearchResults';
import SearchFilters from 'features/SearchFilters';
import {searchTextState, departmentState} from 'states/queryState';
import {useRecoilState} from 'recoil';

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
  const [query, setQuery] = useRecoilState(searchTextState);
  const [departmentId, setDepartmentId] = useRecoilState(departmentState)


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
      const objects = paginate({currentPage: 1, pageSize: 10, objectIds: objectIDs || []})
      const totalPages = totalNumberOfPages(total, 10);
      console.log(totalPages)
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
      const searchObj = {...router.query};
      if (searchObj['q'] && query !== searchObj['q']) {
        setQuery(searchObj['q'])
      } else if (!searchObj['q']) {
        setQuery('')
      }
      if (searchObj['departmentId'] && departmentId !== searchObj['departmentId']) {
        
        setDepartmentId(searchObj['departmentId'])
      } else if (!searchObj['departmentId']) {
        setDepartmentId('default')
      }
      const val = createQueryString(router.query);
      if (val) {
        searchDatabase(val)
      }
    }
  }, [router.query])

  return (
    <Layout pageTitle='Search'>
      <GlobalStyle lightBackgroundColor />
      <main>
        <Container>
         
          <div>
          <SearchFilters />
          <SearchResults count={results.count} loading={isLoadingPageObjects || isLoadingObjectIds} data={results.pageObjectsData} />
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default Search;

