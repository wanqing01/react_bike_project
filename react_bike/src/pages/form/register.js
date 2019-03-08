import React from 'react';
import moment from 'moment';
import { Card, Input, Form, Button, message, Icon, Checkbox, Radio, InputNumber, Select, Switch, DatePicker, Upload } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const SelectOption = Select.Option;
const TextArea = Input.TextArea;
class RegisterForm extends React.Component {

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
    }

  

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }

        }

        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        return (
            <div>
                <Card title='注册表单'>
                    <Form layout='horizontal'>
                        <FormItem label='用户名' {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user" />} placeholder='请输入用户名' />
                                )
                            }

                        </FormItem>
                        <FormItem label='密码' {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: ''

                                })(
                                    <Input prefix={<Icon type="user" />} placeholder='请输入密码' />
                                )
                            }

                        </FormItem>
                        <FormItem label='性别' {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: ''

                                })(
                                    <RadioGroup>
                                        <Radio value='1' />男
                                        <Radio value='2' />女
                                    </RadioGroup>

                                )
                            }

                        </FormItem>
                        <FormItem label='年龄' {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18,

                                })(
                                    <InputNumber />
                                )
                            }

                        </FormItem>
                        <FormItem label='当前状态' {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '1',

                                })(
                                    <Select>
                                        <SelectOption value='1'>青龙</SelectOption>
                                        <SelectOption value='2'>白虎</SelectOption>
                                        <SelectOption value='3'>朱雀</SelectOption>
                                        <SelectOption value='4' >玄武</SelectOption>
                                    </Select>
                                )
                            }

                        </FormItem>
                        <FormItem label='爱好' {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '1',

                                })(
                                    <Select mode='multiple' >
                                        <SelectOption value='1'>睡觉</SelectOption>
                                        <SelectOption value='2'>上班</SelectOption>
                                        <SelectOption value='3'>旅行</SelectOption>
                                        <SelectOption value='4' >赚钱</SelectOption>
                                    </Select>
                                )
                            }

                        </FormItem>
                        <FormItem label='是否已婚' {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true,

                                })(
                                    <Switch />


                                )
                            }

                        </FormItem>
                        <FormItem label='生日' {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2018-08-08'),

                                })(
                                    <DatePicker
                                        showTime
                                        format='YYYY-MM-DD HH:mm:ss'
                                    />
                                )
                            }

                        </FormItem>
                        <FormItem label='联系地址' {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '',

                                })(
                                    <TextArea />
                                )
                            }

                        </FormItem>
                        <FormItem label='头像' {...formItemLayout}>
                            {
                                getFieldDecorator('suerImg')(
                                    <Upload
                                        listType='picture-card'
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                    >
                                        <Icon type="plus" />
                                    </Upload>
                                )
                            }

                        </FormItem>
                        <FormItem  {...offsetLayout}>
                            {
                                getFieldDecorator('read')(
                                    <Checkbox>已阅读协议</Checkbox>
                                )
                            }

                        </FormItem>
                        <FormItem  {...offsetLayout}>
                            <Button type='primary' onClick={this.handleSubmit}>登录</Button>


                        </FormItem>
                    </Form>
                </Card>

            </div>
        );
    }
}

export default Form.create()(RegisterForm)