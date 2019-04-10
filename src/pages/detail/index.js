import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import { getTopicInfo } from '../../actions/topicList';

@connect(
  ({topicList}) => ({...topicList}),
  (dispatch) => ({
    onGetTopicInfo(params) {
      console.log(22222)
      dispatch(getTopicInfo(params))
    }
  })
)
class Detail extends Component {

  componentWillMount() {

    let params = {id: this.$router.params.topicid, mdrender:true}
    this.props.onGetTopicInfo && this.props.onGetTopicInfo(params)

  }

  render() {
    return(
      <View>
        {this.props.topicinfo.title}
      </View>
    )
  }
}

export default Detail
