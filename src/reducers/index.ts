import { combineReducers } from 'redux';
import { Contacts, contactsReducer } from './contacts';
import { Session, sessionReducer } from './session';

export interface IAppState {
  contacts?: Contacts;
  session?: Session;
};

export default combineReducers<IAppState>({
  contacts: contactsReducer,
  session: sessionReducer
});
