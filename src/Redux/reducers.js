const initialState = {
    searchedTournaments: [],
    showResults : false,
    savedTournaments: []
};

function Reducer(state = initialState, action) {
    switch (action.type) {
        case "SEARCHED_TOURNAMENTS":
            return {
                ...state,
                searchedTournaments: action.payload,
                showResults: true,
            };
        case 'ADD_TOURNAMENT':
            let index = state.savedTournaments.findIndex(el => el.id === action.payload.id);

            if(index === -1)
                return  {
                    ...state,
                    savedTournaments: [...state.savedTournaments, action.payload],
                    showResults: false,
                };
            return state;
        case 'DELETE_TOURNAMENT':
            const savedTournaments =  state.savedTournaments.filter(item => item.id !== action.payload);
            return {
                ...state,
                savedTournaments: savedTournaments,
            }
        default:
            return state;
    }
}

export default Reducer;
