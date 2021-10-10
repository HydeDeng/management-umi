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

// export default UserModel;
import {Reducer, Effect, Subscription} from 'umi'

interface UserModelType {
  namespace: 'users';
  state: {};
  reducers:{};
  effects:{};
  subscriptions:{
    setup: Subscription;
  }
}

//state, reducers, effects这些里面是一个一个的函数
const UserModel: UserModelType = {
  namespace: 'users',
  state: {},
  //{action} == {type, payload}
  reducers: {
    // getlist(state, { type, payload }) {
    //   // return newState;
    // }
  },
  // 格式为 *(action, effects) => void 或 [*(action, effects) => void, { type }]， effect返回的是空值，因为他不会直接给页面传递值
  effects: {
    // *function_name({ type, payload }, effects) {
    //   // yield put()
    // }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      //body
    }
  }
};

export default UserModel;