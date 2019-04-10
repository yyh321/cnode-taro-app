import {
  getTopicList
} from './topicList'
// 显示抽屉

export function showDrawerAction() {
  return (dispatch) => {
    dispatch({
      type: 'showDrawer'
    })
  }
}

export function hideDrawerAction() {
  return (dispatch) => {
    dispatch({
      type: 'hideDrawer'
    })
  }
}
// 切换当前的分类
export function changeCataAction(cata) {
  return (dispatch) => {
    dispatch({
      type: 'changeCata',
      currentCata: cata
    })
    dispatch(getTopicList({
      tab: cata.key,
      page: 1,
      limit: 20
    }))
  }
}
