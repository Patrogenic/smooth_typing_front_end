

//verify if I need to declare initial state values like this
//it might not be needed, but I suppose it displays the shape of the data for the reducer, so that might be useful regardless
const initialState = {
  showDetails: false, 
  showHighlights: false,
};


const testResultsReducer = (state = initialState, action) => {

  switch(action.type){
    case "SHOW_DETAILS":
      return { ...state, showDetails: true };
    case "HIDE_DETAILS":
      return { ...state, showDetails: false };
    case "SHOW_HIGHLIGHTS":
      return { ...state, showHighlights: true}
    case "HIDE_HIGHLIGHTS":
      return { ...state, showHighlights: false}
    default: return state
  }
}

export const showDetails = () => { return { type: "SHOW_DETAILS" } }
export const hideDetails = () => { return { type: "HIDE_DETAILS" } }
export const showHighlights = () => { return { type: "SHOW_HIGHLIGHTS" } }
export const hideHighlights = () => { return { type: "HIDE_HIGHLIGHTS" } }

export default testResultsReducer;