import {applyMiddleware, combineReducers, createStore} from 'redux';
import {AddNewMessagesActionType, messagesReducer} from "./messagesReducer";
import {UsersPageActionType, usersPageReducer} from "./usersPageReducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
   messages: messagesReducer,
   usersPage: usersPageReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>;

export type CommonActionTypeForApp = UsersPageActionType | AddNewMessagesActionType;

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
