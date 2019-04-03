import { getProjectList } from '@/services/api';

export default {
    namespace: 'projectList',
  
    state: {  //变量池
      list: [],
    },
  
    effects: {   //异步
      *getProjectListInfo({ payload }, { call, put }) {     //请求队伍项目信息    // redux-saga !
        const response = yield call(getProjectList, payload);
        yield put({
          type: 'queryList',
          payload: response,
        });
      }
    },
      reducers: {
      queryList(state, action) {
        return {
          ...state,
          list: action.payload,
        }
      },
    },
  };
  