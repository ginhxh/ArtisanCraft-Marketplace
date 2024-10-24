

function showsidebar(){
    const sidebar = document.querySelector('.sidebar');

sidebar.style.display='flex';
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');

    sidebar.style.display='none';
}




const products = [
    { id: 1, category: 'Tajjin', price: 100,name:'product name', description: 'berber Tajjin Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' },
    { id: 2, category: 'Pottrey', price: 50,name:'product name', description: 'pottry glass Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' },
    { id: 3, category: 'Tajjin', price: 300,name:'product name', description: 'modern tajjin Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' },
    { id: 4, category: 'ZArbiya', price: 150,name:'product name', description: 'zarbua atlass Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' },
    { id: 5, category: 'Pottrey', price: 80,name:'product name', description: 'modern vase Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' },
    { id: 6, category: 'Pottrey', price: 50,name:'product name', description: 'pottry glass Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' },
    { id: 7, category: 'Tajjin', price: 300,name:'product name', description: 'modern tajjin Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' },
    { id: 8, category: 'ZArbiya', price: 150,name:'product name', description: 'zarbua atlass Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' },
    { id: 9, category: 'Pottrey', price: 80,name:'product name', description: 'modern vase Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' },
    { id: 10, category: 'Pottrey', price: 50,name:'product name', description: 'pottry glass Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' },
    { id: 11, category: 'Tajjin', price: 300,name:'product name', description: 'modern tajjin Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' },
    { id: 0, category: 'ZArbiya', price: 150,name:'product name', description: 'zarbua atlass Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' },
    { id: 12, category: 'Pottrey', price: 80,name:'product name', description: 'modern vase Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', imgUrl: '../assets/img/il_794xN.1004355588_dali.webp' }
];

const categoryFilter = document.getElementById('category-filter');
const uniqueCategories = [...new Set(products.map(p => p.category))];
uniqueCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
});


const productList = document.querySelector('.all-best-product'); 
function renderProducts(filteredProducts) {
    productList.innerHTML = ''; 
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'best-selling-product'; 

        const img = document.createElement('img');
        img.className='product-image';
        img.src = product.imgUrl;
        img.alt = product.description;

        const productName = document.createElement('p');
        productName.className = 'product-name';
        productName.textContent = product.name; 

        const hr = document.createElement('hr'); 

        const priceDiv = document.createElement('div');
        priceDiv.className = 'product-pris'; 

        const productPrice = document.createElement('p');
        productPrice.className = 'product-prix'; 
        productPrice.textContent = `$${product.price.toFixed(2)}`; 

        const checkOutButton = document.createElement('button');
        checkOutButton.className = 'btn-add-cart'; 
        checkOutButton.value=products.id;
        checkOutButton.textContent = 'Check out';
        checkOutButton.onclick = function() {
    const productId = products.id; 
    const productTitle = encodeURIComponent(products.title); 
    const productPrice = products.price; 
    const productCategory = encodeURIComponent(products.category); 
    const productDescription = encodeURIComponent(products.description); 

    window.location.href = `product_details.html?id=${productId}&title=${productTitle}&price=${productPrice}&category=${productCategory}&description=${productDescription}`;
        };

        priceDiv.appendChild(productPrice);
        card.appendChild(img);
        card.appendChild(productName);
        card.appendChild(hr);
        card.appendChild(priceDiv);
        card.appendChild(checkOutButton);
        productList.appendChild(card);

    });
}


renderProducts(products);

// filtrage by cat
categoryFilter.addEventListener('change', function() {
    const selectedCategory = this.value;
    let filteredProducts = products;

    if (selectedCategory !== 'all') {
        filteredProducts = products.filter(product => product.category === selectedCategory);
    }

    renderProducts(filteredProducts);
});

// filtrage by price
const priceFilter = document.getElementById('price-filter');
priceFilter.addEventListener('change', function() {
    const selectedPriceOrder = this.value;
    let sortedProducts = [...products];

    if (selectedPriceOrder === 'asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedPriceOrder === 'desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    renderProducts(sortedProducts);
});
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


