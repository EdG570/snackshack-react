import axios from 'axios';

export default store => next => action => {
  if (action.meta && action.meta.remote) {

    axios.get(action.meta.remote.url)
    .then((response) => {
      store.dispatch({ type: `${action.type}_SUCCESS`, payload: response.data });
    })
    .catch((err) => {
      store.dispatch({ type: `${action.type}_ERROR`, payload: err});
    });
  }

  return next(action);
};