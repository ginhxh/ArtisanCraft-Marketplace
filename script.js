

function showsidebar(){
    const sidebar = document.querySelector('.sidebar');

sidebar.style.display='flex';
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');

    sidebar.style.display='none';
}
//hover img change
document.querySelectorAll('.best-selling-product').forEach(product => {
    const img = product.querySelector('.product-image');
    const originalSrc = img.src; 
    const hoverSrc = '../assets/cat4.jpg'; 

    product.addEventListener('mouseenter', () => {
        img.src = hoverSrc; 
    });

    product.addEventListener('mouseleave', () => {
        img.src = originalSrc; 
    });
});

document.getElementById('category-filter').addEventListener('change', filterProducts);

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter').value;
    const products = document.querySelectorAll('.best-selling-product');

    let productsArray = Array.from(products);

    productsArray.forEach(product => {
        const category = product.getAttribute('category');
        if (categoryFilter === 'all' || category === categoryFilter) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });

   
}