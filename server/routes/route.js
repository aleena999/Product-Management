import express from 'express';
import {
    getProducts,
    addProduct,
   
} from '../controller/product-controller.js';

const router = express.Router();

router.get('/products', getProducts);
router.post('/add', addProduct);

export default router;
