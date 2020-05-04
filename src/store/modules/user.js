import { login, logout } from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';

const getDefaultState = () => {
  return {
    token: getToken()
  }
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  }
};

const actions = {
  login({ commit }, userInfo) {
    const { username, password, isRemember } = userInfo;
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password: password,
        isRemember: isRemember
      }).then(response => {
        const { res } = response;
        commit('SET_TOKEN', res.data);
        setToken(res.data);
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations:
  actions
};
