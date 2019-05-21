import React, { Component } from 'react'
import { Layout, Menu, Icon, Badge, Dropdown, Avatar} from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Threads from './ListThreads'
import Compose from "./Compose"
const { Header, Sider, Content } = Layout;

class Home extends Component {
    state = {
        collapsed: false,
    };

      menu_dropdown = (
        <Menu>
          <Menu.Item>
            <Link to="/"><Icon type="user" /><span>Mon compte</span></Link>
          </Menu.Item>
          <Menu.Item>
            <a rel="noopener noreferrer" href="">Deconnexion</a>
          </Menu.Item>
        </Menu>
      );

    styles = {
        compose:
        {
            marginBottom: 57,
            paddingLeft: 24,
            height: 132,
            padding: '33pt',
            fontSize: '14pt',
            backgroundColor: '#2196F3',
            marginTop: 0
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    
    render() {
        return (
            <Router >
                <Layout style={{ height: '100%' }}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" >

                        </div>

                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1" style={this.styles.compose}>
                                <Link to="/compose"><Icon type="plus-circle" /><span>Compose</span></Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/">
                                <Icon type="mail" />
                                    <span>Inbox</span>
                                    <Badge style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset', right: '-54pt' }} count={25} />
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/">
                                <Icon type="form" />
                                    <span>Drafts</span>
                                    <Badge style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset', right: '-54pt' }} count={25} />
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/">
                                <Icon type="safety" />
                                    <span>Sent</span>
                                    <Badge style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset', right: '-54pt' }} count={25} />
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/">
                                <Icon type="rest" />
                                    <span>Trash</span>
                                    <Badge style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset', right: '-54pt' }} count={25} />
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                style={{ padding: '12pt', fontSize: '18pt' }}
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <div className="" style={{    float: 'right',marginRight: 28}} > 
            <Dropdown overlay={this.menu_dropdown}>
                <a className="ant-dropdown-link" href="#" >
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  Admin
                  <Icon type="down" />
                </a>
            </Dropdown>
            </div>
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 2,
                                background: '#fff',
                                minHeight: 280,
                            }}
                        >
                            <div >
                                <Route exact path="/" component={Threads} />
                                <Route exact path="/compose" component={Compose} />

                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}
export default Home