import {
    SETCURRENTUSER,
    UPDATE,
    UPDATE_FAIL,
    UPDATE_SUCCESS,
    GETUSERS,
    GETUSERS_SUCCESS,
    DOWNLOAD_USER_IMAGE,
    DOWNLOAD_USER_IMAGE_SUCCESS,
    DELETEUSER,
    DELETEUSER_SUCCESS,
    UPLOADIMAGE,
    UPLOADIMAGE_SUCCESS
  } from "../actions/users";
  
  //import logo from "../images/blank-profile.png"
  
  const initialState = {
    currentUsername: "",
    currentDisplayName: "",
    currentAbout: "",
    currentPassword:"",
    updateLoading: false,
    update: null,
    updateError: null,
    usersList: [],
    usersImages: {},
    // defaultImage: logo,
    deletemessage:null,
    // uploadUserPic: {}
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SETCURRENTUSER:
        return {
          ...state,
          currentUsername: action.payload.username,
          currentDisplayName: action.payload.displayName,
          currentAbout: action.payload.about,
          currentPassword: action.payload.password
        };
      case GETUSERS:
        return state;
  
      case GETUSERS_SUCCESS:
        return { ...state, usersList: action.payload.users };
  
      case UPDATE:
        return { ...state, updateLoading: true, updateError: null };
  
      case UPDATE_SUCCESS:
        return { ...state, update: action.payload, updateLoading: false };
  
      case UPDATE_FAIL:
        return { ...state, updateError: action.payload, updateLoading: false };
  
      case DOWNLOAD_USER_IMAGE:
        return state;
      case DOWNLOAD_USER_IMAGE_SUCCESS:
        return {
          ...state,
          usersImages: { ...state.usersImages, [action.id]: action.payload }
        };
      
      case DELETEUSER:
        return state
      
        case DELETEUSER_SUCCESS:
        return {...state, deletemessage:action.payload}
  
      case UPLOADIMAGE:
        return state
      case UPLOADIMAGE_SUCCESS:
        return state
      default:
        return state;
    }
  };   