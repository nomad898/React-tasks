const selectSort = state => state.params.sort;
const selectFilter = state => state.params.filter;

const paramsSelector = {
    selectSort,
    selectFilter
}

export { paramsSelector };