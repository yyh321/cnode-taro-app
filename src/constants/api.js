const BASE_API = 'https://cnodejs.org/api/v1'

const apiObject = {
  getTopics: BASE_API + '/topics', // 获取话题列表
  getTopicInfo: BASE_API + '/topic', // 获取话题详情
  checkUserToken: BASE_API + '/accesstoken', // 验证用户token
  getUserInfo: BASE_API + '/user/', // 获取用户信息
  createTopic: BASE_API + '/topics', // 新建话题
  replyTopic: BASE_API + '/topic', // 回复话题消息
  upreply: BASE_API + '/reply/', // 点赞
}

export default apiObject
