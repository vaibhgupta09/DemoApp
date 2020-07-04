import {ACTION_TYPES} from '../../constant/actionTypes';
import axios from 'axios';
axios.defaults.baseURL = 'http://dummy.restapiexample.com';

export const getIncident = (page) => {
  return async dispatch => {
    dispatch({type: ACTION_TYPES.GET_DATA_REQUEST});
    try {
      axios
        .get('/api/v1/employees')
        .then(function(response) {
          dispatch({
            type: ACTION_TYPES.GET_DATA_SUCCESS,
            payload: response.data.data,
          });
        })
        .catch(function(error) {
          dispatch({
            type: ACTION_TYPES.GET_DATA_ERROR,
            payload: response.data.data,
          });
        })
        .finally(function() {});
    } catch (error) {
      dispatch({type: ACTION_TYPES.GET_DATA_ERROR});
    }
  };
};


