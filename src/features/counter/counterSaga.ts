import { PayloadAction } from '@reduxjs/toolkit'
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  increment,
  incrementSaga,
  incrementSagaSuccess,
} from 'features/counter/counterSlice'

export function* handleIncreamentSaga(action: PayloadAction<number>) {
  console.log('Log dispatch', action)

  yield delay(1000)
  console.log('Excute action')
  yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
  console.log('counter saga')
  yield takeLatest(incrementSaga.toString(), handleIncreamentSaga)
}
