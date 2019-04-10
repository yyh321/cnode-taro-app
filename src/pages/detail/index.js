import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Detail extends Component {

  componentWillMount() {
    console.log(this.$router.params.topicid);

  }

  render() {
    return(
      <View>
        detail
      </View>
    )
  }
}

export default Detail
