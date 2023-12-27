export const sortProducts = (products, sortType) => {
    const sortedProducts = [...products];
    if (sortType === 'asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
};

export const applyFilters = (products, filters) => {
    let filteredProducts = [...products];

    if (filters.priceRange.min !== '' && filters.priceRange.max !== '') {
        filteredProducts = filteredProducts.filter(
            (product) =>
                product.price >= parseInt(filters.priceRange.min) &&
                product.price <= parseInt(filters.priceRange.max)
        );
    }

    if (filters.clothingType !== '') {
        filteredProducts = filteredProducts.filter(
            (product) => product.clothingType === filters.clothingType
        );
    }

    if (filters.category !== '') {
        filteredProducts = filteredProducts.filter(
            (product) => product.category === filters.category
        );
    }

    return filteredProducts;
};

