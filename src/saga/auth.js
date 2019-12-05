import { put, call } from 'redux-saga/effects'
import { 
    SHOW_LOGIN,
    FAILED_LOGIN,
    SUCCESS_LOGIN
} from '../redux/type/UserType'
import { apiAuth } from './api/apiAuth'

export function* requestLogin(action) {
    try {
        const { username, password } = action
        const users = yield call(apiAuth(username, password))
        console.log(users)
        yield put({ type: SHOW_LOGIN, payload: users })
        yield put({ type: SUCCESS_LOGIN, payload: 'Successfully Authenticated' })
    } catch (error) {
        yield put({ type: FAILED_LOGIN, payload: 'Fatal ERROR, login failed'})
        console.log(error)
    }
}