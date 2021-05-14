import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    SmileOutlined
} from '@ant-design/icons';

const pathname = window.location.pathname;
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            current: '/',
        }
        this.handleClick = this.menuHandleClick.bind(this)
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    menuHandleClick = e => {
        //console.log('click ', e);
        this.setState({ current: e.key });
    };
    render() {
        const { current } = this.state;
        return (
            <Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" onClick={this.handleClick} selectedKeys={[current]} 
                >
                    <Menu.Item key={"/" || "/pets"} icon={<SmileOutlined />}>
                        <Link to={"/pets"} id="click-me">
                            Pets
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"/users"} icon={<UserOutlined />}>
                        <Link to={"/users"} id="click-me">
                            Users
                        </Link>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        )
    }
}
