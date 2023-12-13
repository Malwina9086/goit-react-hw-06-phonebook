import { createAction } from '@reduxjs/toolkit';

export const addNewContact = createAction('contacts/addNewContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filter/setFilter');
