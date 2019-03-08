import React from 'react';
import { Card, Table } from 'antd';
import axios from '../../axios';

export default class BasicTable extends React.Component {

    state = {
        dataSource: [],
        dataSource2: []
    }

    componentDidMount() {
        const dataSource = [
            {
                id: '0',
                userName: '张三',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '1999-01-11',
                address: '赛亚星球',
                time: '9:00'
            }
        ]
        this.setState({
            dataSource
        })

        this.getList();
    }

    getList = () => {
        axios.ajax({ url: '/table/list' }).then((res) => {
            this.setState({
                dataSource2: res.result
            })
        })
    }

    onRowClick = (record, index) => {
        
        let selectKey = [index];
        this.setState({
            selectionRowKeys: selectKey,
            selectedItem: record
        })
    }


    render() {
        const columns = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
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
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ];
        let selectedRowKeys = this.state.selectionRowKeys;
        let rowSelection = {
            type: 'radio',
            selectedRowKeys
        }

        return (
            <div>
                <Card title='基础表格'>
                    <Table
                        rowKey='id'
                        bordered
                        dataSource={this.state.dataSource}
                        columns={columns}
                        pagination={false}
                    />
                </Card>
                <Card title='动态数据渲染表格' style={{ marginTop: 10 }}>
                    <Table
                        rowKey='id'
                        bordered
                        dataSource={this.state.dataSource2}
                        columns={columns}
                        pagination={false}
                    />
                </Card>
                <Card title='Mock-单选' style={{ marginTop: 10 }}>
                    <Table
                        rowKey='id'
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            }
                        }}
                        dataSource={this.state.dataSource2}
                        columns={columns}
                        pagination={false}
                    />
                </Card>

            </div>
        )
    }
}