import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { diaryReducer } from './diary/diary.reducer';
import { authReducer } from "./auth/auth.reducer";
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth:authReducer,
    diary: diaryReducer,
})

export const store = createStore(rootReducer, createComposer(applyMiddleware(thunk)))