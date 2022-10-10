import { Route, Routes } from 'react-router-dom';
import Products from '../../Product-Management/product-management';
import AddProduct from '../../Product-Management/AddProduct';
function Content() {
  return (
    <div>
      <Routes>
         <Route path="/" element={< div > Welcome </div>}></Route>
        < Route path="/home" element={< div > Home </div>}></Route >
        < Route path = "/products"
        element = {
            < div style = {
              {
                margin: "40px"
              }
            } > < Products /> </div>}></Route >
        < Route path="/settings" element={< div > Settings </div>}></Route >
        < Route path = "/new" element = {< div>  <AddProduct/> </div>}></Route >
    </Routes>
    </div>
);
}
export default Content;
