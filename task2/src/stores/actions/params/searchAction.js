import { ActionType } from '@utils/constants';

const searchAction = (payload) => ({
    type: ActionType.SEARCH,
    payload
});

export { searchAction };