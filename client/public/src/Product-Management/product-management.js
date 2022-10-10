import {  Table} from 'antd';
import {useState, useEffect} from 'react';
import {getProducts,} from '../service/api';
import { PlusCircleOutlined } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';


const Products= () => {
    const navigate = useNavigate(); 
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [products, setProducts] = useState([]);

    useEffect(() => {   getAllProducts();}, []);

 const getAllProducts = async () => {
     let response = await getProducts();
     setProducts(response.data);
 }
    const columns = [
        {
            title: 'Code',
            dataIndex: 'code'
        }, {
            title: 'Name',
            dataIndex: 'name'
        }, {
            title: 'Qty',
            dataIndex: 'quantity'
        }, {
            title: 'Price',
            dataIndex: 'price'
        }, {
            title: 'Status',
            dataIndex: 'status',
            render: (_, payload) => {
                let col = "Empty";
                const l = payload.status;

                if (payload.status === 'Active') {
                    col = "green";
                }
                if (payload.status === 'Inactive') {
                    col = "red";
                }


                return <p style = {
                    {
                        marginTop: "11px",
                        color: col
                    }
                } > {
                    l
                } </p>
            }


            },
        {
            title: 'Date added',
            dataIndex: 'dateAdded'
        }
    ];
    const onAddProduct = () => {
      navigate("/new")
    }                    
    return (
        <div>
            < div style={{ display: "flex", height: 60 }}>
                < h1 > Products </h1>
                < div style={
                    {
                        padding: "13px"
                    }
                } > < PlusCircleOutlined style={
                    {
                        fontSize: "22px"
                    }
                }
                    onClick={
                        onAddProduct
                    }
                    /></div >
            </div>
            <Table columns={columns} dataSource={products} pagination={{
                current: page,
                pageSize: pageSize,
                onChange: (page, pageSize) => {
                    setPage(page);
                    setPageSize(setPageSize)
                }
            }} ></Table>
        </div>
    );
}
export default Products;