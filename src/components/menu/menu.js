import Taro, { Component } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'

import './menu.less'

class Menu extends Component {
  config = {
    navigationBarTitleText: 'Menu'
  }

  render() {
    return(
      <View className='topiclist-menu'>
        <Image className='image' src={require('../../assets/img/cata.png')} />
        <Text>全部</Text>
        <Image className='image' src={require('../../assets/img/login.png')} />
      </View>
    )
  }
}

export default Menu
