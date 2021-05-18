const selectSort = state => state.sort;
const selectFilter = state => state.filter;

const filtersSelector = {
    selectSort,
    selectFilter
}

export { filtersSelector };