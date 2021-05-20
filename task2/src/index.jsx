import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from '@app';
import { store } from '@stores';
import { moviesThunk } from '@stores/thunks';

const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)


// store.dispatch(x.editMovie(
//   new Movie(
//     'La La Land',
//     'Heres to the fools who dream.',
//     7,
//     5,
//     "2016-12-29",
//     'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
//     'Mia, an aspiring actress, serves lattes',
//     5,
//     4,
//     ['Comedy', 'dad'],
//     1,
//     45054)))
// unsubscribe()

// store.dispatch(moviesThunk.getMovies());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);