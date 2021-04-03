import { combineReducers } from 'redux';
import auth from './reducers/auth';
import common from './reducers/common';
import sidebar from './reducers/sidebar';



export default combineReducers({
    auth,
    common,
    sidebar
});