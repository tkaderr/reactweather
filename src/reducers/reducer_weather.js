//importing var because of consistendy
import {FETCH_WEATHER} from "../actions/index"

//initial state of array because storing multiple things
export default function(state = [], action) {
  switch(action.type){
    case FETCH_WEATHER:
    return [ action.payload.data, ...state ];
  }
  return state;
}

// same method as [action.payload.data, ...state ];
  //both add new data and concats
  // make a new array. put action.data and state array into new array
  // this puts the action.payload.data infront of the new array
  // return state.concat([action.payload.data]);
