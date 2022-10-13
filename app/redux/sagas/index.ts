import {takeLatest} from 'redux-saga/effects';
import {getPosts} from '../slices/getPostsSlice';
import {getPostsSaga} from './getPostsSaga';

export default function* rootSaga() {
  yield takeLatest(getPosts.type, getPostsSaga);
}
