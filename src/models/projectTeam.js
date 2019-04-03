import { getProjectTeam } from '@/services/api';

export default {
  namespace: 'projectTeam',

  state: {  //变量池
    list: [],
  }, 

  effects: {   //异步
    *getProjectTeamInfo({ payload }, { call, put }) {     //请求队伍项目信息    // redux-saga !
        const response = yield call(getProjectTeam, payload);
        
        // console.log(response)
        yield put({
          type: 'queryList',
          payload: response,
        });
      }
    },
    reducers: {
    queryList(state, action) {
      // console.log(state)
      // console.log(action)
      return {
        ...state,
        list: action.payload,
      }
    },
  },

};
