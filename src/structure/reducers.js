import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import i18n from '../containers/i18n/reducer';
import users from '../containers/Users/reducer';


// Is nested combineReducers a bad or good idea? #738
// https://github.com/reactjs/redux/issues/738
// https://stackoverflow.com/questions/36786244/nested-redux-reducers
export default combineReducers({
    form, 
    i18n,
    users
})