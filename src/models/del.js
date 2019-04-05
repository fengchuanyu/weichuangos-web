import { postDelProjectList,postDelProjectStorage } from '@/services/api';

export default {
    namespace: 'projectDel',
  
    state: {  //变量池
      listId: 0,
      storageId:0
    },
  
    effects: {   //异步
        *postDelProjectList({ payload }, { call, put }) {     //删除进行中项目    
            const response = yield call(postDelProjectList, payload);
            yield put({
            type: 'getListItem',
            payload: response,
            });
        },
        *postDelProjectStorage({ payload }, { call, put }) {   //删除仓库中项目     
        const response = yield call(postDelProjectStorage, payload);
        yield put({
          type: 'getStorageItem',
          payload: response,
        });
      }
    },
    reducers: {
      getListItem(state, action) {
        return {
          ...state,
          list: action.payload,
        }
      },
      getStorageItem(state, action) {
        return {
          ...state,
          list: action.payload,
        }
      },
    },
  };
  