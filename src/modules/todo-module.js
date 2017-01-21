import { createReducer, createAction } from 'redux-action';
import _ from 'lodash';
import db from '../config';

export const GET_ITEMS = 'TodoList/GET_ITEMS';
export const ADD_ITEM = 'TodoList/ADD_ITEM';
export const EDIT_ITEM = 'TodoList/EDIT_ITEM';
export const CHANGE_ITEM_STATUS = 'TodoList/CHANGE_ITEM_STATUS';
export const REMOVE_ITEM = 'TodoList/REMOVE_ITEM';

export const getItems = createAction(GET_ITEMS, () =>
    db.ref().once('value')
    .then((res) => {
      const items = _.map(res.val(), (v, k) => ({ id: k, ...v }));
      return {
        items,
        loading: false,
        error: false,
      };
    })
    .catch(error => ({
      items: [],
      error,
      loading: false,
    }))
);

export const addItem = createAction(ADD_ITEM, (item, items) => {
  const newItem = Object.assign({}, { item, status: 'NOT_COMPLETED' });
  return db.ref().push(newItem)
  .then(res => ({
    items: [...items, Object.assign({}, newItem, { id: res.key })],
    error: false,
  }))
  .catch(error => ({
    items: [...items],
    error,
  }));
});

export const editItem = createAction(EDIT_ITEM, (item, items) => {
  return db.ref(item.id).update(item)
    .then(() => {
      const newItems = items.slice();
      const itemIndex = _.findIndex(items, { id: item.id });
      newItems[itemIndex] = item;
      return {
        items: newItems,
        error: false,
      };
    })
    .catch(error => ({
      items: [...items],
      error,
    }));
});

export const changeStatus = createAction(CHANGE_ITEM_STATUS, (id, items) => {
  const newItem = _.find(items.slice(), { id });
  newItem.status = newItem.status === 'NOT_COMPLETED' ? 'COMPLETED' : 'NOT_COMPLETED';
  return db.ref(id).update(newItem)
    .then(() => {
      const newItems = items.slice();
      const itemIndex = _.findIndex(items, { id });
      newItems[itemIndex] = newItem;
      return {
        items: newItems,
        error: false,
      };
    })
    .catch(error => ({
      items: [...items],
      error,
    }));
});

export const removeItem = createAction(REMOVE_ITEM, (id, items) =>
  db.ref().child(id).remove()
    .then(() => ({ items: _.filter(items, item => id !== item.id) }))
    .catch(error => ({ items, error }))
);

const defaultState = {
  items: [],
  loading: true,
};

export default createReducer(defaultState, {
  [GET_ITEMS]: state => state,
  [ADD_ITEM]: state => state,
  [EDIT_ITEM]: state => state,
  [CHANGE_ITEM_STATUS]: state => state,
  [REMOVE_ITEM]: state => state,
});

export const actions = {
  getItems,
  addItem,
  editItem,
  changeStatus,
  removeItem,
};
