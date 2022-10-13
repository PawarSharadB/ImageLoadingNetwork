import {put} from 'redux-saga/effects';
import {sagaActions} from './sagaActions';
import {setPosts} from '../slices/getPostsSlice';
import {images} from '../../images/index';

export function* getPostsSaga(): any {
  try {
    yield put(setPosts({photos: images}));
  } catch (e) {
    yield put({type: sagaActions.FETCH_TOKEN_SAGA_FAILED});
  }
}
