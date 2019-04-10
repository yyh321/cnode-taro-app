
import Taro, { Component } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'
// import { connect } from '@tarojs/redux';
import './topic.less'

class Topic extends Component {
  render() {
    let {item} = this.props
    return(
      <View className='topiclist-topic'>
        <Image className='head-img' src={item.author.avatar_url} />
        <View className='right'>
          <View className='topic-title'>
            <Text className='topic-up'>置顶</Text>
            <Text> {item.title} </Text>
          </View>
          <View className='topic-info'>
            <Text> {item.author.loginname} </Text>
            <Text> {item.reply_count+'/'+item.visit_count} </Text>
            <Text> {item.create_at} </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Topic
