import React, { Component } from 'react'
import { connect } from "react-redux";

import MailActions from '../Redux/MailRedux'
import moment from 'moment'
import { Layout, Menu, Icon, Spin, List, Collapse, Comment, Tooltip, Form, Input, Button, Skeleton } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Panel = Collapse.Panel;

const { Header, Sider, Content, Footer } = Layout;

const TextArea = Input.TextArea;


class ThreadDetail extends Component {
    constructor(props) {
        super(props)
        this.id = this.props.data
        this.data = []
        // console.log("ID props =",this.id)
        console.log("calling from componemt constructor to redux ..")
        this.props.loadThread(this.id)
    }
    state = {
        fetching2: true,
        threadOBJ: {},
        messages: [],
         value:""
    };
    componentWillReceiveProps(nextProps) {

        //after getting data from redux as props, we save it on current state
        this.data=[]
        nextProps.threadOBJ.messages.map(msg => {
            var item = {}
            item.author = msg.creator.username
            item.content = msg.body
            item.avatar = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            item.datetime = 
                <span>
                    {moment(msg.time).calendar()}
                </span>
            
            this.data.push(item)
        })
        console.log(this.data)
        this.setState({ messages: this.data })
    }

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };
    handledelete=()=>{
        alert('you are going to delete ?')
    }
onSubmit=()=>{
this.props.sendReply(this.id, {
    "message": this.state.value,
    "creator": "admin@dzconseil.com" //for testiing now
})
this.setState({value:""})
// var item = {}
//             item.author = "Admin"
//             item.content = this.state.value
//             item.avatar = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
//             item.datetime = 
//                 <span>
//                     {moment()}
//                 </span>
            
//             this.data.push(item)
//             console.log("DATA submit ",this.data)
//             this.setState({ messages: this.data })
};

    render() {
        var obj = this.props.threadOBJ //
        if (this.props.fetching2) return <Skeleton avatar paragraph={{ rows: 4 }} />// <Spin size="large" />

        else {
            var list = obj.messages.map(msg => {
                return <Panel header="This is panel header 1" key="1">
                    <p>{msg}</p>
                </Panel>
            })
            list = <List
                className="comment-list"
                header={`${this.state.messages.length} Messages`}
                itemLayout="horizontal"
                dataSource={this.state.messages}
                renderItem={item => (
                    <li>
                        <Comment
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                        />
                    </li>
                )}
            />
            return (
                <Collapse defaultActiveKey={['1']} >

                    <Panel showArrow={false} header={<span><span className="bold"><Icon type="tag" /> {obj.subject}</span><Icon onClick={this.handledelete} style={{    float: 'right',color: '#E91E63'}} type="delete" /></span>} key="1">
                        <p>{list}</p>
                        <Form.Item>
                            <TextArea rows={4} onChange={this.handleChange} value={this.state.value} />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit" onClick={this.onSubmit} type="primary">
                                Reply
                             </Button>
                        </Form.Item>
                    </Panel>

                </Collapse>
            )
        }
    }
}

const mapStateToProps = state => {

    state = state.mail
    console.log("MAP STATE ADELLLL1 =", state)

    return {
        fetching2: state.feathing2,
        threadOBJ: state.threadOBJ,
        messages: state.threadOBJ.messages
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadThread: (id) => dispatch(MailActions.RequestMessages(id)),
        sendReply:(thread_id, data) => dispatch(MailActions.sendMessage(thread_id,data)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ThreadDetail)