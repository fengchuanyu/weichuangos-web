import { postCommit } from '@/services/api';

export default {
    namespace: 'commit',
  
    state: {  //变量池
      list: [],
    },
  
    effects: {   //异步
      *postCommit({ payload }, { call, put }) {     //项目发布    // redux-saga !
        const response = yield call(postCommit, payload);
        yield put({
          type: 'commit',
          payload: response,
        });
      }
    },
    reducers: {
      commit(state, action) {
        return {
          ...state,
          list: action.payload,
        }
      },
    },
  };
  