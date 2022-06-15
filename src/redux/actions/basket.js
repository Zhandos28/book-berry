export const setBasket = (item) => ({
    type: "SET_BASKETS",
    payload: item
}); 

export const plusCartItem = (id) => ({
type: 'PLUS_CART_ITEM',
payload: id,
});

export const minusCartItem = (id) => ({
type: 'MINUS_CART_ITEM',
payload: id,
});
  