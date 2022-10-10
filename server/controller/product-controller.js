import Product from '../model/product.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find();
        response.status(200).send(products);
    } catch (error) {
        response.status(404).send({
            message: error.message
        })
    }
}

export const addProduct = async (request, response) => {
    const product = request.body;
    const newProduct = new Product(product);
    try {
        //console.log(newProduct);
        await newProduct.save();
        response.status(201).send(newProduct);
    } catch (error) {
        response.status(404).send({
            message: error.message
        });
    }
}
