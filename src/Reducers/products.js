var initialState = [
    { 
        id: 1,
        name: 'iphone 6 plus',
        image: 'https://cdn.nguyenkimmall.com/images/detailed/61/6-6PLUS-SILVER_wb0r-gp.jpg',
        description: 'Sản phẩm do apple sản phẩm',
        price: 500,
        inventory: 10,
        rating: 4
    },
    { 
        id: 2,
        name: 'iphone 7 plus',
        image: ' https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/650532688.jpeg',
        description: 'Sản phẩm do apple sản phẩm',
        price: 650,
        inventory: 25,
        rating: 3
    },
    { 
        id: 3,
        name: 'iphone 8 plus',
        image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-8-plus-mau-do-red-didongviet_1_1_1.jpg',
        description: 'Sản phẩm do apple sản phẩm',
        price: 700,
        inventory: 30,
        rating:5
    },
]
const products = (state = initialState, action) => {
    switch(action.type) {
        default : return [...state]
    }
}
export default products