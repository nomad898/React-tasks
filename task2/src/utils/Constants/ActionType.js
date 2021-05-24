const ActionType = {
    ADD_MOVIE: 'movies/added',
    DELETE_MOVIE: 'movies/deleted',
    EDIT_MOVIE: 'movies/edited',
    GET_MOVIE: 'movies/getMovie',
    GET_MOVIES: 'movies/getMovies',
    CHANGE_FILTER: 'filters/changedFilter',
    CHANGE_SORT: 'filters/changedSort',
    SHOW_ADD_MOVIE_MODAL: 'modals/showAddMovie',
    SHOW_EDIT_MOVIE_MODAL: 'modals/showEditMovie',
    SHOW_DELETE_MOVIE_MODAL: 'modals/showDeleteMovie',
    FILTER_CHANGE: 'params/filterChanged',
    SORT_CHANGE: 'params/sortChanged',
    SEARCH: 'params/search'
};

export { ActionType }