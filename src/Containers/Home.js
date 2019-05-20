import React, { Component } from 'react'
import { Layout, Menu, Icon} from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Threads from './ListThreads'

const { Header, Sider, Content } = Layout;

const Compose = () => {
    return (<div>Compose</div>)
}
class Home extends Component {
    state = {
        collapsed: false,
    };

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
                                <Link to="/compose"><Icon type="user" /><span>Compose</span></Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/">
                                    <Icon type="video-camera" />
                                    <span>Inbox</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/">
                                    <Icon type="video-camera" />
                                    <span>Inbox</span>
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
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
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