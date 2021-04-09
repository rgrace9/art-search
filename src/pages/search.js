import React, {useEffect} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import {createQueryString} from 'utils/queryString';
import {paginate} from 'utils/pagination';

const Search = () => {
  const router = useRouter();

  const getObject = async (objectId) => {
    try {
      const {data} = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`);
      return data;
    } catch(err) {
      console.log('err', err)
    }
  }

  const pageObjectsData = async (objectIds) => {
    let objectsData = await Promise.all(
      objectIds.map(async (id) => {
        let res = await getObject(id);
        return res;
      })
    )
    return objectsData;
  } 
    
  
  const searchDatabase = async (queryString) => {
    if (!queryString) return;
    try {
      const {data: {total, objectIDs}} = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?${queryString}`);


      const objects = paginate({currentPage: 1, pageSize: 10, objectIds: objectIDs})
      console.log(await pageObjectsData(objects))
      
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
    <div>
      <p>Lorem Ipsum Search</p>
    </div>
  );
};

export default Search;

