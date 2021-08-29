import { FETCH_SPORTS } from '../actions'

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_SPORTS:
            return action.payload.data
        default:
            return state
    }
}