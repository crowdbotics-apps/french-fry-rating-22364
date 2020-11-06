import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard18168590Reducer from '../features/Dashboard18168590/redux/reducers'
import SignUp28168589Reducer from '../features/SignUp28168589/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard18168590: Dashboard18168590Reducer,
SignUp28168589: SignUp28168589Reducer,

});