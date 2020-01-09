import { createSelector } from 'reselect';

export const selectShop = createSelector(
  state => state.shop,
  shop => shop
)

export const selectCollectionForPreview = createSelector(
  [selectShop],
  shop => shop.collections ? Object.entries(shop.collections) : []
)

export const selectCollection = collectionId => createSelector(
  [selectShop],
  shop => shop.collections ? shop.collections[collectionId] : null
)
