import {
  getJSON,
  postJSON
} from '../utils/request';

import api from '../constants/api';

export function getTopicList(params) {
  return async (dispatch) => {
    let result = await getJSON(api.getTopics, params)
    if (result && result.data) {
      if (result.data.success) {
        dispatch({
          type: 'getTopicList',
          list: result.data.data
        })
      }
    }
  }
}
