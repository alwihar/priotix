export const SEARCHED_TOURNAMENTS = 'SEARCHED_TOURNAMENTS';
export const ADD_TOURNAMENT = 'ADD_TOURNAMENT';
export const DELETE_TOURNAMENT = 'DELETE_TOURNAMENT';

export function searchedTournamentsAction (tournaments) {
    return {
        type: SEARCHED_TOURNAMENTS,
        payload: tournaments,
    }
}

export function addTournamentAction (tournament) {
    return {
        type: ADD_TOURNAMENT,
        payload: tournament,
    }
}

export function deleteTournamentAction (id) {
    return {
        type: DELETE_TOURNAMENT,
        payload: id,
    }
}

