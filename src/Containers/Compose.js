import React, { Component } from 'react'
import { connect } from "react-redux";

import MailActions from '../Redux/MailRedux'
import moment from 'moment'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';
  
  import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import ThreadDetails from './ThreadDetail'
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const { TextArea } = Input;


class Compose extends Component {
    // constructor(props) {
    //     super(props)
    // }
    state = {
       
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
              console.log('Received values of form: ', values);
              this.props.sendThread(values)
          }
        });
      };

      
    componentDidMount() {
    }

  
    render() {
       
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Subject">
          {getFieldDecorator('subject', {
            rules: [
              
              {
                required: true,
                message: 'Please indicate a subject',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Recipient">
          {getFieldDecorator('recipient', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please indicate an E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Message" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              
            ],
          })(<TextArea placeholder="your message here" />)}
        </Form.Item>
    
        
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>
        );
    }
}

const mapStateToProps = state => {

    state = state.mail

    return state
};

const mapDispatchToProps = dispatch => {
    return {
        sendThread: (body) => dispatch(MailActions.sendThread(body)),
    };
};

const ComposeForm = Form.create({ name: 'register' })(Compose);

export default connect(mapStateToProps, mapDispatchToProps)(ComposeForm)