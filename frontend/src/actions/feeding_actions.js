import * as APIUtil from '../util/feedings_api_util';

export const RECEIVE_FEEDINGS = "RECEIVE_FEEDINGS";
export const RECEIVE_FEEDING = "RECEIVE_FEEDING";

// sync action creators

export const receiveFeedings = feedings => ({
  type: RECEIVE_FEEDINGS,
  feedings
});

export const receiveFeeding = feeding => ({
  type: RECEIVE_FEEDING,
  feeding
});

// async action creators

export const fetchFeedings = () => dispatch => {
  return APIUtil.getFeedings().then(
    feedings => dispatch(receiveFeedings(feedings))
  );
};

export const fetchFeeding = feedingId => dispatch => {
  return APIUtil.getFeeding(feedingId).then(
    feeding => dispatch(receiveFeeding(feeding))
  );
};

export const createFeeding = feeding => dispatch => {
  return APIUtil.postFeeding(feeding).then(
    feeding => dispatch(receiveFeeding(feeding))
  );
};