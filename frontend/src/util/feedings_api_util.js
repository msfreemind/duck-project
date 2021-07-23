const $ = window.$;

export const getFeedings = () => (
  $.ajax({
    method: 'GET',
    url: '/api/feedings'
  })
);

export const getFeeding = feedingId => (
  $.ajax({
    method: 'GET',
    url: `/api/feedings/${feedingId}`
  })
);

export const postFeeding = feeding => (
  $.ajax({
    method: 'POST',
    url: '/api/feedings',
    data: feeding
  })
);