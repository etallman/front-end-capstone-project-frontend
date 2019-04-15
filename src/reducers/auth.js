import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUTCURRENTUSER,
  LOGOUT,
  LOGOUT_SUCCESS
} from "../actions/auth.js"

const initialState = {
  loginLoading: false,
  login: {
    token: null,
    id: null
  },
  loginError: null,
  logoutLoading: false,
  logout: null,
  logoutError: null,
  registerLoading: false,
  register: null,
  registerError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loginLoading: true, loginError: null }

    case LOGIN_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false }

    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false }

    case REGISTER:
      return { ...state, registerLoading: true, registerError: null }

    case REGISTER_SUCCESS:
      return { ...state, register: action.payload, registerLoading: false }

    case REGISTER_FAIL:
      return {
        ...state,
        registerError: action.payload,
        registerLoading: false
      }

    case LOGOUTCURRENTUSER:
      return { initialState }

    case LOGOUT:
      return state

    case LOGOUT_SUCCESS:
      return { ...state, login: null }

    default:
      return state
  }
}
