const initialState = {
  showHighlights: false,
};

const testResultsReducer = (state = initialState, action) => {
  switch(action.type){
    case "SHOW_HIGHLIGHTS":
      return { ...state, showHighlights: true}
    case "HIDE_HIGHLIGHTS":
      return { ...state, showHighlights: false}
    default: return state
  }
}

export const showHighlights = () => { return { type: "SHOW_HIGHLIGHTS" } }
export const hideHighlights = () => { return { type: "HIDE_HIGHLIGHTS" } }

export default testResultsReducer;