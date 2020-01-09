import { createSelector } from 'reselect';

export const selectShop = createSelector(
  state => state.shop,
  shop => shop
)

export const selectCollectionForPreview = createSelector(
  [selectShop],
  shop => Object.entries(shop.collections)
)

export const selectCollection = collectionId => createSelector(
  [selectShop],
  collections => collections[collectionId]
)
