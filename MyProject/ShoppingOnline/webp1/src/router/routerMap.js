import products from '../components/products/products.vue';
import cart from '../components/cart/cart.vue';
import productDetail from '../components/productDetail/productDetail.vue'
export default [{
        name: 'products',
        path: '/products',
        component: products
    },
    {
        name:'cart',
        path: '/cart',
        component: cart
    },
    {
        name:'productDetail',
        path: '/productDetail',
        component: productDetail
    }
]