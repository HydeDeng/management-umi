// import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

// const UserModel = {
//   namespace: 'users',

//   state: {
//     name: '',
//   },

//   effects: {
//     *query({ payload }, { call, put }) {},
//   },
//   reducers: {
//     save(state, action) {

//         const data = [
//             {
//               key: '1',
//               name: 'John Brown',
//               age: 32,
//               address: 'New York No. 1 Lake Park',
//               tags: ['nice', 'developer'],
//             },
//             {
//               key: '2',
//               name: 'Jim Green',
//               age: 42,
//               address: 'London No. 1 Lake Park',
//               tags: ['loser'],
//             },
//             {
//               key: '3',
//               name: 'Joe Black',
//               age: 32,
//               address: 'Sidney No. 1 Lake Park',
//               tags: ['cool', 'teacher'],
//             },
//           ];

//       return data;
//     },
//     // 启用 immer 之后
//     // save(state, action) {
//     //   state.name = action.payload;
//     // },
//   },
//   subscriptions: {
//     setup({ dispatch, history }) {
//       return history.listen(({ pathname }) => {
//         if (pathname === '/users') {
//           dispatch({
//             type: 'save',
//           });
//         }
//       });
//     },
//   },
// };
//export default UserModel;

// 上面是JS的i写法，下面是TS的写法
import { Reducer, Effect, Subscription } from 'umi'
import { getRemoteList,updateRemoteData } from './service'

interface UserModelType {
  namespace: 'users';
  state: {};
  reducers: {};
  effects: {
    getRemote: Effect,
    edit: Effect;
  };
  subscriptions: {
    setup: Subscription;
  }
}

//state, reducers, effects这些里面是一个一个的函数
const UserModel: UserModelType = {
  namespace: 'users',
  state: {},
  //{action} == {type, payload}
  reducers: {
    // （state, action） -> (state, {type, payload}) -> (state, {payload}) 一般我们不写type
    getlist(state, { payload }) {
      // console.log(`payload`, payload)
      return payload;
    }
  },
  // 格式为 *(action, effects) => void 或 [*(action, effects) => void, { type }]， effect返回的是空值，因为他不会直接给页面传递值
  effects: {
    *getRemote(action, { put, call }) {
      const data = yield call(getRemoteList);
      // console.log(`data`, data)
      yield put({
        type: 'getlist',
        payload: data
      })
    },
    *edit({paylaod:{id, values}}, {put, call}){
      console.log(`id here`,id);
      console.log(`edit values here`,values);     
      const data = yield call(updateRemoteData,({values, id}));
      console.log(`data`, data);
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'getRemote',
          });
        };
      });
      //body
    }
  }

};

export default UserModel;