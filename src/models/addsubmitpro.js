import { getAddProjectInfo } from '@/services/api';

export default {
  namespace: 'addsubpro',

  state: { 
    list: [],
  },

  effects: {
    *addSubmitPro({ payload }, { call, put }) {
      const response = yield call(getAddProjectInfo, payload);  //异步
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
