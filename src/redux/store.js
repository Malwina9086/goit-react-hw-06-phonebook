import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducer';
import { setFilter } from './actions';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: (state = '', action) => {
      if (action.type === setFilter.type) {
        return action.payload;
      }
      return state;
    },
  },
  devTools: true,
});

export { store };
