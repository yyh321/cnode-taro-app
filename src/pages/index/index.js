import Taro, { Component } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import './index.less'

class Index extends Component {
    config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <View><Text>Hello,cnode!</Text></View>
      </View>
    )
  }
}

export default Index
