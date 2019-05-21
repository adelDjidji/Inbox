import React, { Component } from 'react'
import { connect } from "react-redux";

import MailActions from '../Redux/MailRedux'
import moment from 'moment'
import { Layout, Menu, Icon, Spin, List, Avatar, Skeleton } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ThreadDetails from './ThreadDetail'
const { Header, Sider, Content, Footer } = Layout;




class Threads extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        fetching: false,
        threads: [],
        selectedThread:0
    };
    componentDidMount() {
        this.props.loadThreads()
    }

    selectThread= (val)=>{
        console.log("valeur =",val)
        //save the ID of curent thread
        this.setState({selectedThread:val})
    }

    render() {
        var da=null
                    if(this.state.selectedThread==0){
                        da=  <div></div>
                    }else{
                        da=  <Sider width={600} style={{background:'transparent',     minWidth: '50%!important', width:600}}><ThreadDetails data={this.state.selectedThread} /></Sider>
                    }
                    
        return (
            <div>
            <Layout style={{ background: '#fff' }}>
            <Content>
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.threads}
                    
                    renderItem={item => {
                        let user = item.messages[0].creator.username
                        let userLetter = item.messages[0].creator.username[0].toUpperCase()
                        let date = item.messages[0].time
                        let dateMoment = moment(date).calendar();
                        var min = 0;
                        var max = 9;
                        var random = Math.round(Math.random() * (+max - +min) + +min);
                        var backs=['#87d068', '#673AB7', '#26C6DA','#FF9800', 'crimson', '#e8d52e', 'aquamarine', 'black', '#00BCD4' , 'chartreuse' ]
                        var myBack = backs[random]
                        
                        return (
                            <Skeleton loading={this.props.fetching} active avatar paragraph={{ rows: 2 }} >
                            <List.Item>
                           
                                <List.Item.Meta
                                    avatar={<Avatar size="large" style={{ backgroundColor: myBack }}>{userLetter}</Avatar>}
                                    
                                    onClick={this.selectThread.bind(this, item.id)}
                                    title={<a href="https://ant.design">{item.subject}</a>}
                                    description={<span><span style={{fontWeight: 'bold'}}>{user}</span><span style={{fontSize: '8pt', float: 'right'}}>{dateMoment}</span></span>}
                                />
                            </List.Item>
                            </Skeleton>
                        )
                    }}
                />
                </Content>
                {da}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {

    state = state.mail

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