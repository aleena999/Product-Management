import React from 'react';
import { Menu } from 'antd'
import {useNavigate} from 'react-router-dom';
function SideMenu() {
    const navigate = useNavigate();
    return (
        <Menu style={{marginTop:"50%",fontSize:"20px"}} onClick = {
            ({
                key
            }) => {
                navigate(key);
            }
        }
        items = {
            [{
                    label: "Home",
                    key: "/home"
                },
                {
                    label: "Products",
                    key: "/products",
                },
                {
                    label: "Settings",
                    key: "/settings"
                }
            ]
        } >
        </Menu>)
    }

    export default SideMenu;