import Header from './Layouts/header';
import SideMenu from './Layouts/sideMenu';
import Content from './Layouts/content';
import Footer from './Layouts/footer';

function Layout() {
    return ( 
        <div>
             <Header/>
                 <div style = {
                     {
                         display: "flex",
                         flexDirection: "row"
                     }
                 } >
                    <div style={{width:"10%", fontSize:"35px"}}>
                 < SideMenu /> </div>
                 <Content />
            </div>
            <Footer />
        </div>
    );
}
export default Layout;