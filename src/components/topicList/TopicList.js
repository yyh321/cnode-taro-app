import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components'
import { getTopicList } from '../../actions/topicList'

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
    return(
      <View>
        {this.props.currentCata.value}
      </View>
    )
  }
}

export default TopicList