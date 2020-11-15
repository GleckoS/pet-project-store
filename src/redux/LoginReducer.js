let initialSliderState = {
    isLogged: false,
    accType: null,
    login: null,
    userList: []
}
const LOGIN = "LOGIN",
    UN_LOGIN = "UN_LOGIN",
    SET_USERS = "SET_USERS",
    SET_NEW_USER = "SET_NEW_USER"

const LoginReducer = (state = initialSliderState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isLogged: !state.isLogged,
                login: action.login
            }
        }
        case UN_LOGIN: {
            return {
                ...state,
                isLogged: !state.isLogged,
                login: null
            }
        }
        case SET_USERS: {
            return {
                ...state,
            }
        }
        case SET_NEW_USER: {
            return {
                ...state
            }
        }
        default: {
            return state
        }
    }
}

export default LoginReducer

const logIn = (accType, login) => ({type: LOGIN, accType, login})
const unLogIn = () => ({type: UN_LOGIN})
const setUsers = (userInform) => ({type: SET_USERS, userInform})
const setNewUser = () => ({type: SET_NEW_USER})
/* Не Рабочие */
export const LogInThunk = (accType, login) => {
    return (dispatch) => {
        dispatch(logIn(accType, login))
    }
}

export const UnLogInThunk = () => {
    return (dispatch) => {
        dispatch(unLogIn())
    }
}
/* Рабочие */
export const SetUsersThunk = () => {
    return (dispatch) => {
        fetch(`http://localhost:8000/users`, {})
            .then(res => res.json())
            .then(
                (response) => {
                    console.log(response)
                    dispatch(setUsers(response))
                }
            )
    }
}

export const RegisterThunk = (userInform) => {
    return (dispatch) => {
        fetch(`http://localhost:8000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInform)
        })
            .then(res => res.json())
            .then(
                (response) => {
                    console.log(response)
                    dispatch(setNewUser(userInform))
                }
            )
    }
}


