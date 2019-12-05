import { FETCH_TOKEN } from '../type/AuthType';

const initialState = {
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKEN:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
