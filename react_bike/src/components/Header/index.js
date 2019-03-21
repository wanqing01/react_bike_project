import React from 'react';
import { Row, Col } from 'antd';
import Util from '../../utils/utils';
import './index.less';
import axios from '../../axios/index';

export default class Header extends React.Component {

    state = {
        username: '',
        sysTime: ''
    }

    componentDidMount() {
        this.setState({
            username: '玄离'
        })

        setInterval(() => {
            let sysTime = Util.formatDate(new Date().getTime());
            this.setState({
                sysTime
            })

        }, 1000)
        //this.getWeatherAPIData();
    }

    // getWeatherAPIData() {
    //     axios.jsonp({
    //         url: 'http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=8BB7F0E5C9C77BD6B9B655DB928B74B6E2D838FD'
    //     }).then((res) => {
    //         if (res.status === 'success') {
    //             let data = res.results[0].weather_data[0];
    //             this.setState({
    //                 dayPictureUrl: data.dayPictureUrl,
    //                 weather: data.weather
    //             })
    //         }
    //     })
    // }

    render() {
        let menuType = this.props.menutype;
        return (
            <div className='header'>
                <Row className='header-top'>
                    {
                        menuType
                            ?
                            <Col span={6} className='logo'>
                                <img src='/assets/logo-ant.svg' />
                                <span>bike通用管理系统</span>
                            </Col>
                            :
                            null
                    }
                    <Col span={menuType?18:24}>
                        <span>hello,{this.state.username}</span>
                        <a>退出</a>
                    </Col>
                </Row>
                {
                    menuType ?
                        null
                        :
                        <Row className='breadcrumb'>
                            <Col span={4} className='breadcrumb-title'>
                                首页
                            </Col>
                            <Col span={20} className='weather'>
                                {/* <span className='date'>{this.state.sysTime}</span>
                                <span className='weather-img'>
                                    <img src={this.state.dayPictureUrl} />
                                </span> */}
                                <span className='weather-detail'>
                                    {this.state.weather}
                                </span>
                            </Col>
                        </Row>
                }

            </div>
        )
    }
}