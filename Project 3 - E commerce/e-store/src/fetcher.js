const BASE_URL = "http://localhost:3001/"

export const fetcher = async (url) => {
    const response = { error: null, data: [] };
    try {
        const res = await fetch(BASE_URL + url);
        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        response.data = data;
    } catch (error) {
        response.error = error.message;
    }
    return response;
};

export const getProducts = (id) => {
    return fetcher('products?catId=' + id);
}

export const getProductsById = (id) => {
    return fetcher('products/' + id);
}

export const getCategories = () => {
    return fetcher("categories");
}

export const getProductsByQuery = (query) => {
    return fetcher("products/?q=" + query);
}