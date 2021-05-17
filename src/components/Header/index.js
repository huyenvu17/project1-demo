import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { Link, NavLink } from "react-router-dom";
import {Redirect} from "react-router-dom";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    SmileOutlined
} from '@ant-design/icons';
import logo from '../../assets/images/logo.svg';
import ClientMenu from '../../assets/images/menu/clients-menu.svg';
import PatientsMenu from '../../assets/images/menu/patients-menu.svg';
import MembersMenu from '../../assets/images/menu/members-menu.svg';
import ScheduleMenu from '../../assets/images/menu/schedule-menu.svg';
import FlowMenu from '../../assets/images/menu/flow-menu.svg';
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
        //console.log(pathname, this.props.to)
        let isActive = false
        return (
            <Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sideheader">
                <div className="logo">
                <NavLink  to="/">
                  <img src={logo}/>
                </NavLink>
                </div>
                <ul className="sideheader__menu">
                  <li>
                  <NavLink className="menu__item" exact activeClassName={"is-active"} to={"patients"}>
                    <span className="item__img"><img src={PatientsMenu}/></span>
                    <span className="item__title">Patients</span>
                  </NavLink>
                  </li>
                  <li>
                  <NavLink className="menu__item" activeClassName={"is-active"} to="flow">
                  <span className="item__img"><img src={FlowMenu}/></span>
                  <span className="item__title">Flow</span>
                  </NavLink>
                  </li>
                  <li>
                  <NavLink className="menu__item" activeClassName={"is-active"} to="schedule">
                    <span className="item__img"><img src={ScheduleMenu}/></span>
                    <span className="item__title">Schedule</span>
                  </NavLink>
                  </li>
                  <li>
                  <NavLink className="menu__item" activeClassName={"is-active"} to="clients">
                    <span className="item__img"><img src={ClientMenu}/></span>
                    <span className="item__title">Clients</span>
                  </NavLink>
                  </li>
                  <li>
                  <NavLink className="menu__item" activeClassName={"is-active"} to="members">
                    <span className="item__img"><img src={MembersMenu}/></span>
                    <span className="item__title">Members</span>
                  </NavLink>
                  </li>
                </ul>
            </Layout.Sider>
        )
    }
}
