import { submitProject } from '@/services/api';

export default {
  namespace: 'subpro',

  state: { 
    list: [],
  },

  effects: {
    *submitPro({ payload }, { call, put }) {
      const response = yield call(submitProject, payload);
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
