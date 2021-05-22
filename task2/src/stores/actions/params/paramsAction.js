import { filterChangeAction } from './filterChangeAction';
import { sortChangeAction } from './sortChangeAction';
import { searchAction } from './searchAction';

const paramsAction = {
    filterChange: filterChangeAction,
    sortChange: sortChangeAction,
    search: searchAction,
};

export { paramsAction };