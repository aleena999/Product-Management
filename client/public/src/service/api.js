import { message } from 'antd';
import axios from 'axios';


const productsUrl = 'http://localhost:5000';

export const getProducts = async (code) => {
    code = code || '';
    return await axios.get(`${productsUrl}/products`);
}

export const addProduct = async (product) => {
    return await axios.post(`${productsUrl}/add`, product,message);
}

