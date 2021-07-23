import { RECEIVE_FEEDINGS, RECEIVE_FEEDING } from '../actions/feeding_actions';

const feedingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FEEDINGS:
      return action.feedings;

    case RECEIVE_FEEDING:
      return Object.assign({}, state, action.feeding);
      
    default:
      return state;
  }
};

export default feedingsReducer;