const selectSort = state => state.params.sort;
const selectFilter = state => state.params.filter;
const selectSearch = state => state.params.search;

const paramsSelector = {
    selectSort,
    selectFilter,
    selectSearch
}

export { paramsSelector };