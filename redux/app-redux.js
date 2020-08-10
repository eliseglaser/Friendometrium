import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';


const reference = database().ref('Person');

//
// Initial State...
//
const initialState = {
  personData: { },
}

//
// Reducer...
//
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "setPersonData":
      return { ...state, personData: action.value };
    default:
      return state;
  }
}

//
// Store...
//
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//
// Action Creators
//
const setPersonData = (personData) => {
  return {
    type: "setPersonData",
    value: personData
  };
};

const watchPersonData = () => {
  return function(dispatch) {
    reference.on('value', function(snapshot)
    {
        var personData = snapshot.val();
        var actionSetPersonData = setPersonData(personData);
        dispatch(actionSetPersonData);
    }, function(error) { console.log(error); });
  }
};

export { setPersonData, watchPersonData };
