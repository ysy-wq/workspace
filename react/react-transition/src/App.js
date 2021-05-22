import './App.css';

import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { PureComponent } from 'react';

const { Meta } = Card;

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isShowCard: true
    }
  }

  render() {
    return (
      // onEnter,onEntered,onExit等是CSSTransition组件的钩子函数
      <div>
        <Button type='primary' onClick = {() => this.setState({isShowCard: !this.state.isShowCard})}>显示/隐藏</Button>
        <SwitchTransition mode='out-in'>
          <CSSTransition key={this.state.isShowCard ? 'on' : 'off'}
                         classNames='card'
                         timeout={1000}
                         unmountOnExit={true}
                         onEnter={() => console.log("onEnter")}
                         onEntered={() => console.log("onEntered")}
                         onExit={() => console.log('onExit')}>
            <Card style={{width: 300}}
                  cover={
                    <img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'/>
                  }
                  actions={[
                    <SettingOutlined key='setting' />,
                    <EditOutlined key='edit' />,
                    <EllipsisOutlined key='ellipsis' />
                  ]}>
                    <Meta avatar={<Avatar src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'/>}
                                          title='Card title'
                                          description='This is the description'/>
            </Card>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}