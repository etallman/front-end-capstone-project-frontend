import { domain, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";
//import {getMessages} from "."
//import {auth} from "../reducers/auth.js"

export const SETCURRENTUSER = "SETCURRENTUSER";
export const GETUSERS = "GETUSERS"
export const GETUSERS_SUCCESS="GETUSERS_SUCCESS"

export const UPDATE = "UPDATE";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAIL = "UPDATE_FAIL";

 export const DOWNLOAD_USER_IMAGE="DOWNLOAD_USER_IMAGE"
 export const DOWNLOAD_USER_IMAGE_SUCCESS="DOWNLOAD_USER_IMAGE_SUCCESS"

 export const UPLOADIMAGE="UPLOADIMAGE"
 export const UPLOADIMAGE_SUCCESS="UPLOADIMAGE_SUCCESS"

 export const DELETEUSER="DELETEUSER"
 export const DELETEUSER_SUCCESS="DELETEUSER_SUCCESS"

export const GETUSERSANDMESSAGES="GETUSERSANDMESSAGES"
export const GETUSERSANDMESSAGES_SUCCESS="GETUSERSANDMESSAGES_SUCCESS"

const url = domain + "/users/";

export const user = id => dispatch => {
    return fetch(url + id)
      .then(handleJsonResponse)
      .then(result => {
          return dispatch({
              type: SETCURRENTUSER,
              payload: result.user
          })
      })
  };

  export const getUsers = ()=> dispatch => {
    dispatch({
      type: GETUSERS
    })
    
    return fetch(url + "?limit=10000")
      .then(handleJsonResponse)
      .then(result => {
          return dispatch({
              type: GETUSERS_SUCCESS,
              payload: result
          })
      })
  };

  //  export const getMessagesAndUserPics = ()=> (dispatch,getState) => {
  //    dispatch(getMessages())
  //    .then(()=>{
  //      const messages=getState().messages.list
  //      const usersImages=getState().users.usersImages
  //      messages.forEach(message=>{
  //        const id=message.userId
  //        if(usersImages[id] === undefined){
  //            dispatch(downloadUserImage(id))
  //        }
  //      })
  //    })
  //  }

  const userUpdate = newUserData => dispatch => {
        const token = newUserData.loginInfo.token
    dispatch({
      type: UPDATE
    });

    fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUserData.state)
    })
    .then(res => {
        if (!res.ok) {
          res.json().then(err => {
            throw err;
          });
        }
   
        return res.json();
      })
      .then(result => {
        dispatch({
          type: UPDATE_SUCCESS,
          payload: result   //data.user.displayName
        });
        dispatch(push("/canvas"));
      })
      .catch(err => {
        dispatch({
          type: UPDATE_FAIL,
          payload: alert("There was a problem with your updates.")
        });
      });
  };

  export const updateThenNavToProfile = newUserData => dispatch => {
    return dispatch(userUpdate(newUserData))
  };
    
    export const downloadUserImage = id => (dispatch, getState) => {
      dispatch({
        type:DOWNLOAD_USER_IMAGE
      })
      return fetch(url + id + "/picture")
      .then(res=>{
        if(res.status===200){
        return res.blob().then(blob=>URL.createObjectURL(blob))
      }else{
        return getState().users.defaultImage
      }
      })
      .then(result => {
        return dispatch({
          type: DOWNLOAD_USER_IMAGE_SUCCESS,
          payload: result,id
        })
      })
    }
    
export const uploadImage =  imageData => (dispatch,getState) => {
  const token = getState().auth.login.token
  dispatch({
    type:UPLOADIMAGE
  })
  return fetch(url + "picture", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token
     }, 
     body: imageData
  })
  .then(res=>{
    if(res.status===500){
    alert("Image failed to upload.")
  }
  })
  .then(result => {
    return dispatch({
        type: UPLOADIMAGE_SUCCESS,
        payload: result
    })
})
}
export const updateUserImage = imageData => (dispatch, getState) => {
  return dispatch(uploadImage(imageData))
  .then(() => dispatch(downloadUserImage(getState().auth.login.id)))
};

   export const deleteUser = () => (dispatch, getState) => {
    const token = getState().auth.login.token
    dispatch({
      type:DELETEUSER
    })
    fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
    })
    .then(result => {
       dispatch({
          type: DELETEUSER_SUCCESS,
          payload: alert(getState().users.currentUsername + "'s account has been deleted."),
      })
      return dispatch(push("/"))
  })
   }