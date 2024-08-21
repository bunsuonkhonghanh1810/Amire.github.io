const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const products = [
    { id: '1', name: 'EDWIN', price: '250.000 vnđ', condition: '9/10', length: '109 cm', waist: '84 cm', leg: '23 cm'},
];

const product = products.find(p => p.id === productId);

if (product) {
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = product.price;
}else {
    document.getElementById('product-details').innerText = 'Product not found.';
}