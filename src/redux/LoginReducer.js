let initialSliderState = {
    isLogged: false,
    currentUser: {},
    userList: []
}
const LOGIN = "LOGIN",
    UN_LOGIN = "UN_LOGIN",
    SET_USERS = "SET_USERS",
    SET_NEW_USER = "SET_NEW_USER"

const LoginReducer = (state = initialSliderState, action) => {
    switch (action.type) {
        case LOGIN: {
            let newCurrentUser = state.userList.filter(e => e.id === action.id)
            return {
                ...state,
                isLogged: true,
                currentUser: newCurrentUser[0]
            }
        }
        case UN_LOGIN: {
            return {
                ...state,
                isLogged: false,
                currentUser: {},
            }
        }
        case SET_USERS: {
            return {
                ...state,
                userList: action.userList
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

const logIn = (email, password, id) => ({type: LOGIN, email, password, id})
const unLogIn = () => ({type: UN_LOGIN})
const setUsers = (userList) => ({type: SET_USERS, userList})
const setNewUser = () => ({type: SET_NEW_USER})

export const LogInThunk = (email, password, id) => {
    return (dispatch) => {
        dispatch(logIn(email, password, id))
    }
}

export const UnLogInThunk = () => {
    return (dispatch) => {
        dispatch(unLogIn())
    }
}

export const SetUsersThunk = () => {
    return (dispatch) => {
        fetch(`http://localhost:8000/users`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (response) => {
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
            .then(
                () => {
                    fetch(`http://localhost:8000/users`, {
                        method: 'GET'
                    })
                        .then(res => res.json())
                        .then(
                            (response) => {
                                dispatch(setUsers(response))
                            }
                        )
                }
            )
    }
}

