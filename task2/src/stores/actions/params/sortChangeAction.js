import { ActionType } from '@utils/constants';

const sortChangeAction = (payload) => ({
    type: ActionType.SORT_CHANGE,
    payload
});

export { sortChangeAction };