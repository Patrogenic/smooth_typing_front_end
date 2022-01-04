import { aboutText } from '../data/textData';

const initialState = {
  textSlide: 0,
  finished: false,
}

const setNext = (state, action) => {

  let finished = false;
  if(state.textSlide + 2 >= aboutText.length){
    finished = true;
  }

  return { ...state, textSlide: state.textSlide + 1, finished };
}

const introTestReducer = (state = initialState, action) => {

  switch(action.type){
    case "NEXT":
      return setNext(state, action);
    default: return state;
  }

}

export const nextSlide = () => { return { type: "NEXT" }};

export default introTestReducer;