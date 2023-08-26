import { combineReducers } from "redux"

const initialState = {formDisplay:false,contactData:[],editData:[],viewData:[]};

const Contact = (state = initialState, action) => {
  switch(action.type){
    case "SAVE_CONTACT" : return  {
      ...state,
      formDisplay: false,
      contactData: [...state.contactData, action.data],
      editData:[]
    };
    case "REMOVE_CONTACT" : return {...state, contactData: action.data}
    case "EDIT_CONTACT" : return {...state, formDisplay: true, editData: action.editData}
    case "VIEW_CONTACT" : return {...state, formDisplay: true, viewData: action.viewData}
    case "UPDATE_CONTACT" : return {...state, formDisplay: false, contactData: action.data, editData:[]}
    default : return state
  }
}

export const rootReducer = combineReducers({
  Contact
})

