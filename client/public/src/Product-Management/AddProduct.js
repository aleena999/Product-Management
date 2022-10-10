import {Form,Input,Button,Switch,Modal,Row,Col, message} from 'antd';
import React from 'react';
import {addProduct} from '../service/api';
import {
    useNavigate
} from 'react-router-dom';
import dayjs from "dayjs";
     let product = {
         code: '',
         name: '',
         quantity: '',
         price: '',
         status: '',
         dateAdded: ''

     }
const AddProduct = () => {
   
    const [form] = Form.useForm()
    let navigate = useNavigate();
    const onFinish = (e) => {
        let stat
        if (e.status)
            stat = "Active";
        else
            stat = "Inactive";


        product = {
            code: e.code,
            name: e.name,
            quantity: e.quantity,
            price: e.price,
            status: stat,
            dateAdded: dayjs().format('MMM, DD YYYY')

        }
        //console.log(product);
        addProductDetails(product);
    }
        const addProductDetails = async (product) => {
            if (await addProduct(product)) {
                alert(`Product Added Succesfully`);
                navigate('/products');
            }
            else {
                Modal.warning({
                    title: 'This is a warning message',
                    content: message,
                });
            }
        }
        return (
        

            < Form form={
                form
            }
                title='ADD PRODUCT'
                labelCol={
                    {
                        span: 100
                    }
                }
                wrapperCol={
                    {
                        span: 100
                    }
                }
                colon="false"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={
                    (errorInfo) => {
                        console.log(
                            'Failed:', errorInfo
                        );
                    }
                }
                style={
                    {
                        marginTop: 100,
                        marginLeft: 100,
                        paddingBottom: 10,
                        paddingLeft: 30,
                        paddingRight: 30,
                    }
                }
            >
                <Row span={2}>
                    < Col> < Form.Item
                        name='code'
                        
                        label="Product code"
                        rules={
                            [{
                                required: true,
                                message: "Enter product code"
                            },
                            {
                                pattern: /^#[0-9]{4}$/,
                                message: "Code should start with '#' followed by 4 digit code.",
                            },
                            {
                                whitespace: true
                            },
                            ]
                        }
                        hasFeedback
                    
                    >
                        < Input />
                    </Form.Item>
                    </Col>
                    < Col  >
                        < Form.Item label="Status"
                            name="status"
                            valuePropName="checked"
                            initialValue={
                                true
                            }
                            style={
                                {
                                    marginLeft: 500
                                }
                    
                            }
                           >
                            <Switch checkedChildren="Active"
                                unCheckedChildren="Inactive"
                                defaultChecked
                                name = "status"
                            />
                        </Form.Item>
                    </Col>
                </Row>
           
             
             
                < Form.Item name="name" label="Name"
                    rules={
                        [{
                            required: true,
                            message: "Enter product name"
                
                        },
                        {
                            pattern: /^[a-zA-Z0-9-/() ]+$/,
                            message: 'Name can only include alphabets amd digits.',
                        },
                        {
                            whitespace: true
                        },
                        {
                            min: 4
                        },
                        ]
                    }
                    hasFeedback >
                    < Input />
                </Form.Item>

                < Form.Item name="quantity"
                    label="Quantity"
                    rules={
                        [{
                            required: true,
                            message: "Enter product quantity"
                        },
                        {
                            pattern: /^[0-9]+$/,
                            message: 'Please input a valid quantity.',
                        },
                        {
                            whitespace: true
                        }
                        ]
                    }
                    hasFeedback >
                    < Input />
                </Form.Item>
                < Form.Item name="price"
                    label="Price"
                    rules={
                        [{
                            required: true,
                            message: "Enter product price"
                        },
                        {
                            pattern: /^[0-9]+$/,
                            message: 'Please input a valid price.',
                        },
                        {
                            whitespace: true
                        },
                        ]
                    }
                    hasFeedback >
                    < Input />
                </Form.Item>
                < Form.Item name="Cancel">
                    < Button shape='round' > Cancel </Button>
                </Form.Item>
                < Form.Item name="Submit" >
                    < Button shape='round'
                        type="primary"
                        htmlType="submit"
                        > Submit </Button>  </Form.Item >
            
            </Form>
        )
    }
export default AddProduct;
