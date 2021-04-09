import React, {useEffect} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import {createQueryString} from 'utils/queryString';
import {paginate, pageObjectIds} from 'utils/pagination';

const Search = () => {
  const router = useRouter();

  // const searchObjects = async () => {
  //   // 436576, 196461, 325688
  //   try {
  //     const res = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?${queryString}`);
  //     console.log(res)
  //     console.log(router)
  //     const {pathname} = router;
      
  //   } catch(err) {
  //     console.log('err', err)
  //   }
  // }
  const searchDatabase = async (queryString) => {
    if (!queryString) return;
    try {
      const {data: {total, objectIDs}} = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?${queryString}`);
      const paginationData = {
        totalObjects: total, currentPage: 2
      }
      console.log(objectIDs)
      const totalCount = paginate(paginationData);
      const objects = pageObjectIds({currentPage: 1, pageSize: 10, objectIds: objectIDs})
      console.log(objects)
   
      
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

