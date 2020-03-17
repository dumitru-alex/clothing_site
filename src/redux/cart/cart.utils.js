export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    // This will run the first time around, since the "if" block is skipped for a new item
    // In doing so, it adds a base quantity of 1 by default
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
