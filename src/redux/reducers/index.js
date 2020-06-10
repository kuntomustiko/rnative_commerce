// tempat ngumpun untuk seluruh reducers
// karena biasanya ada beberapa reducers di dalam sebuah redux

import {combineReducers} from 'redux';

// karena kita hanya baru punya 1 reducer maka kita import hanya 1 reducer saja
import auth from './auth';

export default combineReducers({auth});
