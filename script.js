


const productImages = document.querySelectorAll('.product-image');
productImages.forEach((image) => {
    image.addEventListener('click', (event) => {
        const currentImage = event.target;
        const mainImage = currentImage.closest('.product-card').querySelector('.product-image');
        mainImage.src = currentImage.src;
    });
});


const buyButtons = document.querySelectorAll('.buy-now');
const cart = [];

buyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('h2').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        
        cart.push({ name: productName, price: productPrice });

        
        alert(`Added ${productName} to cart for ${productPrice}`);

        
        console.log(cart);
    });
});
