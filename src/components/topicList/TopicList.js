import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux';
import { View, Text,ScrollView } from '@tarojs/components'
import { getTopicList } from '../../actions/topicList'
import Topic from './topic'

@connect(
  ({topicList,menu}) => ({...topicList,currentCata:menu.currentCata}),
  (dispatch) => ({
    onGetTopicList(params) {
      dispatch(getTopicList(params))
    }
  })
  )
class TopicList extends Component {

  componentWillMount() {
    let {page, limit, currentCata} = this.props
    this.props.onGetTopicList && this.props.onGetTopicList({page,limit,tab:currentCata.key})
  }

  render() {
    let  {list} = this.props
    return(
      <ScrollView>
        { list.map((item) => <Topic key={item} item={item} /> ) }
      </ScrollView>
    )
  }
}

export default TopicList
