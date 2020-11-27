import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import Root from './components/root';
import { fetchNotebook, fetchAllNotebooks } from './util/notebooks_api';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    const root = document.getElementById('root')

    if (window.currentUser) {
        const preloadedState = {
          entities: {
            users: { [window.currentUser.id]: window.currentUser }
          },
          session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
      } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store} />, root);

    //WINDOW TEST (DELETE BEFORE DEPLOY)
    window.fetchAllNotebooks = fetchAllNotebooks;
    window.fetchNotebook = fetchNotebook;
})
