import {ACTION_TYPES} from '../../constant/actionTypes';
const INITIAL_STATE = {
  incidentLoading: false,
  incidentData: null,
  locationLoading: false,
  locationData: null,
};
function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_DATA_REQUEST:
      return Object.assign({}, state, {
        incidentLoading: true,
      });
    case ACTION_TYPES.GET_DATA_SUCCESS:
      return Object.assign({}, state, {
        incidentLoading: false,
        incidentData: action.payload,
      });
    case ACTION_TYPES.GET_DATA_ERROR:
      return Object.assign({}, state, {
        incidentLoading: false,
      });

    default:
      return state;
  }
}

export default appReducer;
