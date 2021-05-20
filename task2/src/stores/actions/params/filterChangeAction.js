import { ActionType } from '@utils/constants';

const filterChangeAction = (payload) => ({
    type: ActionType.FILTER_CHANGE,
    payload
});

export { filterChangeAction };