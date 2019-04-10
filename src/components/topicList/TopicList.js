import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux';
import { View, Text,ScrollView } from '@tarojs/components'
import { getTopicList,getNextList } from '../../actions/topicList'
import Topic from './topic'

@connect(
  ({topicList,menu}) => ({...topicList,currentCata:menu.currentCata}),
  (dispatch) => ({
    onGetTopicList(params) {
      dispatch(getTopicList(params))
    },
    onGetNextList(params) {
      dispatch(getNextList(params))
    }
  })
  )
class TopicList extends Component {

  componentWillMount() {
    let {page, limit, currentCata} = this.props
    this.props.onGetTopicList && this.props.onGetTopicList({page,limit,tab:currentCata.key})
  }
  // 滚动到底加载更多
  onScrollToLower() {
    let {page, limit, currentCata} = this.props
    this.props.onGetNextList && this.props.onGetNextList({page:(page+1),limit,tab:currentCata.key})
  }
  render() {
    let  {list} = this.props
    return(
      <ScrollView
      style={{height:'650PX'}}
      scrollY
      onScrollToLower={this.onScrollToLower.bind(this)}
      >
        { list.map((item) => <Topic key={item} item={item} /> ) }
      </ScrollView>
    )
  }
}

export default TopicList
