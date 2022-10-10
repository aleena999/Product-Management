import React from 'react';
import {
    UserOutlined
} from '@ant-design/icons';
function Welcome() {
    return ( < div style = {
            {
                display: "flex",
                height: 60,
                backgroundColor: "#2E65FE",
                color: "white",
        }}>
        <div style={
            {

                fontSize: "30px",
                padding: "5px",
                fontWeight: "bold"
            }
        }> Rubick.ai
        </div>
        <div style = {
            {
                marginLeft: "83%",
                padding: "10px",
                fontSize: "24px"
            }
        } >
        <UserOutlined />Admin
        
        </div>
        </div>

    );
}
export default Welcome;