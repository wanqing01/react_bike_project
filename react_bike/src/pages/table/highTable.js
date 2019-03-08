import React from 'react';
import { Card, Table } from 'antd';
import axios from '../../axios';


export default class HighTable extends React.Component {

    state = {
        dataSource: []
    }

    componentDidMount(){
        this.getList();
    }

    getList = () => {
        axios.ajax({ url: '/table/high/list' }).then((res) => {
            this.setState({
                dataSource: res.result
            })
        })
    }

    handleChange=(pagination, filters, sorter)=>{
        this.setState({
            sortOrder: sorter.order
        })
    }

    render() {
        const columns = [
            {
                title: 'id',
                key: 'id',
                width: 80,
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                width: 80,
                render(state) {
                    let config = {
                        '1': '青龙',
                        '2': '白虎',
                        '3': '朱雀',
                        '4': '玄武'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                width: 80,
                render(state) {
                    let config = {
                        '1': '睡觉',
                        '2': '上班',
                        '3': '旅行',
                        '4': '赚钱'
                    }
                    return config[state]
                }
            }, {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width: 120
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time',
                width: 80
            }
        ];

        const columns2 = [
            {
                title: 'id',
                key: 'id',
                width: 80,
                dataIndex: 'id',
                fixed: 'left'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
                width: 80,
                fixed: 'left'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                width: 80,
                render(state) {
                    let config = {
                        '1': '青龙',
                        '2': '白虎',
                        '3': '朱雀',
                        '4': '玄武'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                width: 80,
                render(state) {
                    let config = {
                        '1': '睡觉',
                        '2': '上班',
                        '3': '旅行',
                        '4': '赚钱'
                    }
                    return config[state]
                }
            }
            , {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            , {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            , {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            , {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            , {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },

            , {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            ,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },,{
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 120
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width: 120
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time',
                width: 80
            }
        ];

        const columns3 = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                key: 'age',
                dataIndex: 'age',
                sorter: (a,b)=>{
                    return a.age-b.age
                },
                sortOrder: this.state.sortOrder
                
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '青龙',
                        '2': '白虎',
                        '3': '朱雀',
                        '4': '玄武'
                    }
                    return config[state]
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(state) {
                    let config = {
                        '1': '睡觉',
                        '2': '上班',
                        '3': '旅行',
                        '4': '赚钱'
                    }
                    return config[state]
                }
            }, {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ];

       

        return (
            <div>
                <Card title='头部固定'>
                    <Table
                        rowKey='id'
                        bordered
                        dataSource={this.state.dataSource}
                        columns={columns}
                        pagination={false}
                        scroll={{y:240}}
                    />
                </Card>

                <Card title='左侧固定'>
                    <Table
                        rowKey='id'
                        bordered
                        dataSource={this.state.dataSource}
                        columns={columns2}
                        pagination={false}
                        scroll={{x:3000}}
                    />
                </Card>

                <Card title='排序'>
                    <Table
                        rowKey='id'
                        bordered
                        dataSource={this.state.dataSource}
                        columns={columns3}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
               

            </div>
        )
    }
}