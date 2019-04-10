import Taro, { Component } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtDrawer } from 'taro-ui'

import {showDrawerAction, hideDrawerAction, changeCataAction} from '../../actions/menu'

import './menu.less'

@connect(({menu}) =>({...menu}), (dispatch) => ({
  // 名字必须以on或者dispatch开头
  onShowMenu() {
    dispatch(showDrawerAction())
  },
  onHideMenu() {
    dispatch(hideDrawerAction())
  },
  onChangeCata(cata) {
    dispatch(changeCataAction(cata))
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

  getItems(cataData) {
    return cataData.map(item => item.value)
  }
  // 点击分类
  clickCata(index) {
    let {cataData} = this.props
    let clickCata = cataData[index] // 获取点击的数据
    if(clickCata.key !== this.props.currentCata.key) {
      this.props.onChangeCata && this.props.onChangeCata(clickCata)
    }

  }

  //关闭抽屉
  closeDrawer() {
    this.props.onHideMenu&&this.props.onHideMenu()
  }
  render() {
    let  {showDrawer,cataData} = this.props
    // 获取分类列表
    let items = this.getItems(cataData)
    return(
      <View className='topiclist-menu'>
        <AtDrawer mask onClose={this.closeDrawer.bind(this)} onItemClick={this.clickCata.bind(this)} style='position: absolute;' show={showDrawer} items={items} />
        <Image onClick={this.onShowDrawer.bind(this)} className='image' src={require('../../assets/img/cata.png')} />
        <Text>{this.props.currentCata.value}</Text>
        <Image className='image' src={require('../../assets/img/login.png')} />
      </View>
    )
  }
}

export default Menu
