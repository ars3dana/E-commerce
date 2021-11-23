import { applyMiddleware, createStore } from 'redux';
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { reducer, RootState } from './reducers';
import thunk, { ThunkDispatch } from 'redux-thunk';

const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk))


export const wrapper = createWrapper<RootState>(makeStore, { debug: false })

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>