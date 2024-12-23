
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const productItems = document.querySelectorAll('.product-item');

    // Add event listener for search input
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toUpperCase();

        productItems.forEach(product => {
            const productName = product.querySelector('.product-name').textContent.toUpperCase();

            // Show or hide product based on the search term
            if (productName.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

