const GA_MEASUREMENT_ID = '';

function track(...args) {
  if (!window.gtag) {
    return;
  }

  window.gtag(...args);
}

function pageview(props) {
  track('config', GA_MEASUREMENT_ID, props);
}

function event(type, props) {
  track('event', type, props);
}

export default {
  pageview,
  event
};
