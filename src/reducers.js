import { combineReducers } from 'redux';
import auth from './reducers/auth';
import common from './reducers/common';
import sidebar from './reducers/sidebar';
import dyeplant from './reducers/dyePlant'
import order from './reducers/order'


export default combineReducers({
    auth,
    common,
    dyeplant,
    order,
    sidebar
});