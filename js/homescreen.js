document.querySelectorAll('.pants').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        const productId = item.getAttribute('data-id');
        
        window.location.href = `../html/products.html?id=${productId}`;
    });
});