/**
 *
 * name: UserReducer
 * date: 2019-05-09
 * author: cengfucheng
 * about: user info
 *
 */

let initReducer = {
    username: '',
    password: '',
    token: ''
}

export default (state = initReducer, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'login_user':
            return {
                ...state,
                username: payload.username,
                password: payload.password,
                token: payload.token
            }
        case 'loout':
            return {

            }
        default: return state
    }
}