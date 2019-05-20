import React, { Component } from 'react'
import { connect } from "react-redux";

import MailActions from '../Redux/MailRedux'
import moment from 'moment'
import { Layout, Menu, Icon, Spin, List, Avatar } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const { Header, Sider, Content } = Layout;




class Threads extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        fetching: false,
        threads: [],
        selectedThread:1
    };
    componentDidMount() {
        this.props.loadThreads()
    }


    render() {
        if (this.props.fetching) return <Spin size="large" />
        return (
            <div>
            <Layout>
            <Content>
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.threads}
                    renderItem={item => {
                        let user = item.messages[0].creator.username
                        let userLetter = item.messages[0].creator.username[0].toUpperCase()
                        let date = item.messages[0].time
                        var m ="2019-05-19T15:49:04-07:00"
                        let dateMoment = moment(m).calendar();
                        var min = 0;
                        var max = 9;
                        var random = Math.round(Math.random() * (+max - +min) + +min);
                        var backs=['#87d068', '#673AB7', '#26C6DA','#FF9800', 'crimson', '#e8d52e', 'aquamarine', 'black', '#00BCD4' , 'chartreuse' ]
                        var myBack = backs[random]
                        return (
                        
                            <List.Item>
                           
                                <List.Item.Meta
                                    avatar={<Avatar size="large" style={{ backgroundColor: myBack }}>{userLetter}</Avatar>}
                                    
                    
                                    title={<a href="https://ant.design">{item.subject}</a>}
                                    description={<span><span style={{fontWeight: 'bold'}}>{user}</span><span style={{fontSize: '8pt', float: 'right'}}>{dateMoment}</span></span>}
                                />
                            </List.Item>
                        )
                    }}
                />
                </Content>
                
                
                {()=>{
                    console.log("selected ==",this.state.selectedThread)
                    if(this.state.selectedThread==0){
                        return <div>nothing</div>
                    }else{
                        return <Sider>{JSON.stringify(this.state.selectedThread)}</Sider>
                    }
                }

                }
                
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {

    state = state.mail
    console.log("STATE =", state)

    return {
        fetching: state.fetching,
        threads: state.threads
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadThreads: () => dispatch(MailActions.RequestThreads()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Threads)