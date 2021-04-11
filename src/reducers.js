import { combineReducers } from 'redux';
import auth from './reducers/auth';
import common from './reducers/common';
import sidebar from './reducers/sidebar';
import dyeplant from './reducers/dye_plant'
import order from './reducers/order'
import importSlip from './reducers/import' 

export default combineReducers({
    auth,
    common,
    dyeplant,
    order,
    sidebar,
    importSlip,
});