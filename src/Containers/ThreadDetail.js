import React, { Component } from 'react'
import { connect } from "react-redux";

import MailActions from '../Redux/MailRedux'
import moment from 'moment'
import { Layout, Menu, Icon, Spin, List, Collapse } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Panel = Collapse.Panel;

const { Header, Sider, Content, Footer } = Layout;




class ThreadDetail extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        fetching: false,
        messages: [],
    };
    componentDidMount() {
        this.props.loadMessages()
    }



    render() {
        if (this.props.fetching) return <Spin size="large" />
        return (
            <Collapse defaultActiveKey={['1']}>
                {this.props.messages.map(msg =>
                    <Panel header="This is panel header with arrow icon" key="1">
                        <p>{JSON.stringify(msg)}</p>
                    </Panel>
                )}
            </Collapse>
        )



    }
}

const mapStateToProps = state => {

    state = state.mail
    console.log("STATE ADELLLL =", state)

    return {
        fetching: state.fetching,
        messages: state.messages
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadMessages: () => dispatch(MailActions.RequestMessages()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ThreadDetail)