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
        this.getWeatherAPIData();
    }

    getWeatherAPIData() {
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            if (res.status === 'success') {
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }

    render() {
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span={24}>
                        <span>hello,{this.state.username}</span>
                        <a>退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span={4} className='breadcrumb-title'>
                        首页
                    </Col>
                    <Col span={20} className='weather'>
                        <span className='date'>{this.state.sysTime}</span>
                        <span className='weather-img'>
                            <img src={this.state.dayPictureUrl} />
                        </span>
                        <span className='weather-detail'>
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}