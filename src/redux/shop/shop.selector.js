import { createSelector } from 'reselect';

export const selectShop = createSelector(
  state => state.shop,
  shop => shop
)

export const selectCollectionForPreview = createSelector(
  [selectShop],
  collections => Object.entries(collections)
)