import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import dayjs from 'dayjs';

const productSchema = mongoose.Schema({
    code: {
        type: String,
        unique: true,
        validate: {
                validator: function (v) {
                    return /^#[0-9]{4}$/.test(v);
                },
                message: props => `${props.value} is not a valid code!`
            },
            required: [true, 'Product code required']
    },
    name: {
        type: String,
        validate: {
                validator: function (v) {
                    return /^[a-zA-Z0-9-/() ]+$/.test(v);
                },
                message: props => `${props.value} is not a valid string!`
            },
            required: [true, 'Product name required']
    },
    price: {
        type: Number,
        validate: {
            validator: function (v) {
                return /^[0-9]+$/.test(v);
            },
            message: props => `${props.value} is not a valid quantity!`
        },
        min: [1, 'Minimum Rs.1 '],
        required: [true, 'Price required']
    },
    quantity: {
        type:Number,
         validate: {
                 validator: function (v) {
                     return /^[0-9]+$/.test(v);
                 },
                 message: props => `${props.value} is not a valid quantity!`
        },
         min: [1, 'Minimum one unit'],
             required: [true, 'Quantity required']
    },
    
    status: {
        type: String,
        enum: {
            values: ['Active', 'Inactive'],
            message: '{VALUE} is not supported'
        },
    },
      dateAdded: {
          type: String,
          default: dayjs().format('MMM, DD YYYY')
      }
});

autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, 'product');


const postProduct = mongoose.model('products', productSchema);

export default postProduct;
