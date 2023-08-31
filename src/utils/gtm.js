export const dataPush = (eventName, params) => {
  window.dataLayer = window.dataLayer || [];
  let eventObj = { event: eventName, ...params };
  // console.log(eventObj)
  dataLayer.push(eventObj);
};
