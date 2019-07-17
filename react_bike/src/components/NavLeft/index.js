import React from 'react';
import menuList from '../../config/menuConfig';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {switchMenu } from './../../redux/action';
import './index.less';

const SubMenu = Menu.SubMenu;

 class NavLeft extends React.Component {

    state = {
        currentKey: ''
    }

    handleClick(item) {
        const {dispatch} = this.props;
        dispatch(switchMenu(item.item.props.title))
        this.setState({
            currentKey: item.key
        })
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList);
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
        this.setState({
            menuTreeNode,
            currentKey
        })
    }

    //菜单渲染
    renderMenu(data) {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.key} >
                    <NavLink to={item.key}> {item.title}</NavLink>
                </Menu.Item>
            )
        })
    }

    render() {
        return (
            <div>
                <div className='logo'>
                    <img src='/assets/logo-ant.svg' />
                    <span>BIKE</span>
                </div>
                <Menu onClick={this.handleClick.bind(this)}
                    mode="vertical"
                    theme='dark'
                    selectedKeys={[this.state.currentKey]}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default connect()(NavLeft)