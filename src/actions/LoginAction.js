/**
 *
 * name: LoginAction
 * date: 2019-05-09
 * author: cengfucheng
 * about: login
 *
 */

export function LoginByUsername(username, password, token) {
    // user login
    console.log(username, password, token)
    return {
        type: 'login_user',
        payload: {username, password, token}
    }
}

