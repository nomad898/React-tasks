const selectAddMovie = state => state.modals.showAddMovie;
const selectEditMovie = state => state.modals.showEditMovie;
const selectDeleteMovie = state => state.modals.showDeleteMovie;

const modalsSelector = {
    selectAddMovie,
    selectEditMovie,
    selectDeleteMovie
}

export { modalsSelector };