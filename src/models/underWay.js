import { queryUnderway } from '@/services/api';

export default {
  namespace: 'Underway',

  state: {
    list: [],
  },

  effects: {
    *getUnderWay({ payload }, { call, put }) {   //获取进行中仓库的项目信息
      const response = yield call(queryUnderway, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
