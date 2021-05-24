import { moviesSlice } from './moviesSlice';
import { moviesThunk } from '@stores/thunks';
import { moviesAction } from '@stores/actions';
import { ActionType } from '@utils/constants';
import { Movie } from '@models';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('movies slice', () => {
    it('should return the initial state', () => {
      expect(moviesSlice(undefined, {})).toEqual({
            data: [],
            total: 0,
            offset: 0,
            movie: null
        })
    })
  });

describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    const movie = new Movie(
      "La La Land",
      "Here's to the fools who dream.",
      7.9,
      6782,
      new Date("2016-12-29T00:00:00.000Z"),
      "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
      "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
      30000000,
      445435700,
      128,
      [
        "Comedy",
        "Drama",
        "Romance"
      ],
      313369);

    const response = {
      data: [movie],
      total: 1,
      offset: 0,
      movie: null
    };

    it('fetching movie', () => {
      fetchMock.getOnce('http://localhost:4000/movies?sortOrder=asc&searchBy=title', {
        body: response,
        headers: { 'content-type': 'application/json' }
      }).catch(unmatchedUrl => {
        return realFetch(unmatchedUrl)
      })
  
      const expectedAction = moviesAction.getMovies(response);
      
      const store = mockStore({ 
        movies: {
          data: [],
          offset: 0,
          total: undefined,
          movie: null
        },
        params: {
          search: '',
          sort: '',
          filter: 'ALL'
        }
      })
  
      return store.dispatch(moviesThunk.getMovies()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedAction)
      })
    })
  })