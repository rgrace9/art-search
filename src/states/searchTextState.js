import {atom, selector} from 'recoil';

const searchTextState = atom({
  key: 'searchTextState',
  default: ''
})

const charState = selector({
  key: 'charState',
  get: ({get}) => {
    const name = get(searchTextState);
    return name.length
  }
})

export {searchTextState, charState}