import { GET_ALL_EVENTS, EVENT_ERROR } from '../actions/types';

const initialState = {
  events: [],
  loading: true,
  error: {},
};

function eventReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_EVENTS:
      return {
        ...state,
        events: payload,
        loading: false,
      };

    case EVENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default eventReducer;
