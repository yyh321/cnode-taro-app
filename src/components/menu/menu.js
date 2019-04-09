import Taro, { Component } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import {showDrawer} from '../../actions/menu'

import './menu.less'

@connect(({menu}) =>({...menu}), (dispatch) => ({
  // 名字必须以on或者dispatch开头
  onShowMenu() {
    dispatch(showDrawer())
  }
}))
class Menu extends Component {
  config = {
    navigationBarTitleText: 'Menu'
  }

  // 显示抽屉
  onShowDrawer() {
    this.props.onShowMenu && this.props.onShowMenu()
  }

  render() {
    return(
      <View className='topiclist-menu'>
        <Image onClick={this.onShowDrawer.bind(this)} className='image' src={require('../../assets/img/cata.png')} />
        <Text>{this.props.currentCata.value}</Text>
        <Image className='image' src={require('../../assets/img/login.png')} />
      </View>
    )
  }
}

export default Menu
