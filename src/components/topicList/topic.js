
import Taro, { Component } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'
import { myTimeToLocal } from '../../utils/data';
import './topic.less'

class Topic extends Component {
  render() {
    let {item} = this.props
    return(
      <View className='topiclist-topic'>
        <Image className='head-img' src={item.author.avatar_url} />
        <View className='right'>
          <View className='topic-title'>
            {
              item.top?<Text className='topic-up'>置顶</Text>:(item.tab=='share'?<Text className='topic-up blue'>分享</Text>:<Text className='topic-up green'>问答</Text>)
            }
            <Text> {item.title} </Text>
          </View>
          <View className='topic-info'>
            <Text> {item.author.loginname} </Text>
            <Text> {item.reply_count+'/'+item.visit_count} </Text>
            <Text> {myTimeToLocal(item.create_at)} </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Topic
