import { getProjectName } from '@/services/api';

export default {
  namespace: 'projectName',

  state: { 
    list: [],
  },

  effects: {
    *getInputName({ payload }, { call, put }) { //genarator 迭代器
        //请求输入的项目名称 payload传的数据参数，，call调用引进来的方法，put调用reducer
      const response = yield call(getProjectName, payload);
      yield put({
        type: 'inputName',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },

  reducers: {
    inputName(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
