import React from 'react';
import { Card, Button, Icon, Radio } from 'antd';
import './ui.less';

export default class Buttons extends React.Component {
    state = {
        size: 'default'
    }

    handleChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Card title='基础按钮'>
                    <Button type='primary'>button</Button>
                    <Button>button</Button>
                    <Button type='dashed'>button</Button>
                    <Button type='danger'>button</Button>
                    <Button disabled>button</Button>
                </Card>
                <Card title='图形按钮'>
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type='primary' icon='search'>搜索</Button>
                    <Button type='primary' icon='download'>下载</Button>
                </Card>
                <Card title='加载按钮'>
                    <Button type='primary' loading={true}>确定</Button>
                    <Button type='primary' shape='circle' loading={true}></Button>
                    <Button loading={true}>点击加载</Button>
                    <Button shape='circle' loading={true}></Button>
                    <Button type='primary'>关闭</Button>
                </Card>
                <Card title='按钮组'>
                    <Button.Group>
                        <Button type="primary">
                            <Icon type="left" />Go back
                        </Button>
                        <Button type="primary">
                            Go forward<Icon type="right" />
                        </Button>
                    </Button.Group>
                </Card>
                <Card title='按钮尺寸'>
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    <Button type='primary' size={this.state.size}>测试</Button>

                </Card>
            </div>
        )
    }
}