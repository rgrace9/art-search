import {atom, selector} from 'recoil';

const searchTextState = atom({
  key: 'searchTextState',
  default: ''
})

const departmentState = atom({
  key: 'departmentState',
  default: 'default'
})


export {searchTextState, departmentState}