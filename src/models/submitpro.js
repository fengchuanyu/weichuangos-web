import { submitProject } from '@/services/api';

export default {
  namespace: 'subpro',

  state: { 
    list: [],
  },

  effects: {
    *submitPro({ payload }, { call, put }) {
      const response = yield call(submitProject, payload);  //异步
      yield put({      //同步   为什么会执行？   ajax 是否是关键字
        type: 'queryList',
        payload: response ,
      });
    }, 
  },
  reducers: {
    queryList(state, action) {  // action 是谁
      return {
        ...state,
        list: action.payload,
      };
    },
  },
}; 
