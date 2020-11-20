import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import Root from './components/root';
import { fetchAllNotes } from './util/notebooks_api';
import { fetchNote } from './util/notes_api';

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
    window.fetchAllNotes = fetchAllNotes;
    window.fetchNote = fetchNote;
})
