import {doLogin, doValidate} from './axios';

const store = {
    state: {
        username: '',
        token: ''
    },
    mutations: {
        setLoginInfo (state, userinfo) {
            const { username, token } = userinfo;
            state.token = token;
            state.username = username;
        }
    },
    actions: {
        async validate ({ commit }) {
            let res = await doValidate();
            if (res.reslut.code === 0) {
                return false
            }
            commit('setLoginInfo', username);
            localStorage.setItem('token', token);
            return true
        },
        async login ({ commit }, userinfo) {
            let { username, token } = await doLogin(userinfo);
            localStorage.setItem('token', token)
            commit('setLoginInfo', username)
        }
    }
}