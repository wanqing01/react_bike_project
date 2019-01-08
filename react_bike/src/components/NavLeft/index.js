import React from 'react';
import menuList from '../../config/menuConfig';
import { Menu, Icon } from 'antd';
import './index.less';

const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {

    handleClick(e) {
        console.log('click', e);
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList);
        this.setState({
            menuTreeNode
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
            return (<Menu.Item title={item.title} key={item.key} >{item.title}</Menu.Item>)
        })
    }

    render() {
        return (
            <div>
                <div className='logo'>
                    <img src='/assets/logo-ant.svg' />
                    <span>BIKE</span>
                </div>
                <Menu onClick={this.handleClick.bind(this)} mode="vertical" theme='dark'>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}