
export default {

  namespace: 'num',

  state: {
    num:10000
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    ClickBtn(state, {Nums:{type}}) {
      return {...state, num: type==='+'?++state.num: --state.num}
    },
  },

};
