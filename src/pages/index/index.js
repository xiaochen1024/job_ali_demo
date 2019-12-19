import React, { Component } from 'react'
import './index.css'
import JobList from '../../components/jobList'

export default class TodoList extends Component {

    state = {
        menuList: [
            {
                id: 1,
                url: '',
                text: '首 页'
            },
            {
                id: 2,
                url: '',
                text: '社会招聘'
            },
            {
                id: 3,
                url: '',
                text: '校园招聘'
            },
            {
                id: 4,
                url: '',
                text: '了解阿里'
            },
            {
                id: 5,
                url: '',
                text: '个人中心'
            }
        ],
        menuValue: 1,
        hotSearch: [
            {
                id: 1,
                keyword: 'JAVA'
            },
            {
                id: 2,
                keyword: 'IOS'
            },
            {
                id: 3,
                keyword: '数据'
            },
            {
                id: 4,
                keyword: '安全'
            },
            {
                id: 5,
                keyword: '搜索'
            },
            {
                id: 6,
                keyword: '算法'
            },
            {
                id: 7,
                keyword: '运营'
            },
            {
                id: 8,
                keyword: '视觉'
            },
            {
                id: 9,
                keyword: '交互'
            },
            {
                id: 10,
                keyword: '前端'
            }
        ]
    }

    render() {
        return (
            <div className="page">
                <div className="head">
                    <div className="menu">
                        <img className="logo" src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="logo" />
                        <div className="lin-y-2"></div>
                        <div className="menu-text">社招官网</div>
                        {this.state.menuList.map((item)=>{
                            return <div className={["menu-text-value", this.state.menuValue === item.id ? 'active' : ''].join(' ')} key={item.id}>{item.text}</div>
                        })}
                        <div className="menu-right">欢迎来到阿里巴巴集团招聘！<span>登录</span> | <span> 注册</span></div>
                    </div>
                </div>
                <div className="search-box">
                    <img className="search-box-bg" src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt="" />
                    <div className="content">
                        <div className="content-item">
                            <p className="text-english">If not now, when?</p>
                            <p className="text-english">If not me, who?</p>
                            <p className="text-chinese">此时此刻，非我莫属！</p>
                            <div className="search-ipt-box">
                                <input placeholder="请输入职位关键词" className="search-itp" />
                                <div className="search-btn">搜索</div>
                            </div>
                            <div className="hot-search">
                                热门搜索：
                                {this.state.hotSearch.map((item)=>{
                                return <span className="hot-search-value" key={item.id}>{item.keyword}</span>
                            })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="job-content">
                    <div className="left-job">
                        <JobList/>
                    </div>
                    <div className="right-ad">
                        <div className="right-ad-item">
                            <img className="pic-aliyun" src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png" alt="" />
                        </div>
                        <div className="right-ad-item mt20">
                            <img className="pic-intelligent" src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    阿里巴巴集团 Copyright ©1999-2019 版权所有 (面试题)
                </div>
            </div>
        )
    }

}
