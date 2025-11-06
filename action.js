document.addEventListener('DOMContentLoasded",() =>{
lett cart = JSON.parse(localStorage.getltem('cart'))|| [];
updateCartCount();

//Add to Cart Button (assume on product page)
const addToCartButton = document.querySelectorAlol('.add-to-cart');
addToCartButton.forEach(button => {
button.addEventListener('click',(e) =>{
const productld, quantity: n1});
locatStorage.setltem('cart',JSON.stringify(cart));
updateCartCount();
});
})