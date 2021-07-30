import { GET_ALL_EVENTS, EVENT_ERROR } from './types';
import { GET_EVENTS } from '../graphql/query';
import { useClient } from '../graphql/client';

// Get All Evnts
export const getAllEvents = () => async (dispatch) => {
  try {
    const res = await useClient().request(GET_EVENTS);
    console.log(res);
    dispatch({
      type: GET_ALL_EVENTS,
      payload: res.events,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.error, status: err.response.status },
    });
  }
};
