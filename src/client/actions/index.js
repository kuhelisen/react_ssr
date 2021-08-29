import axios from 'axios'

export const FETCH_SPORTS = 'fetch_sports'

export const fetchSports = () => async dispatch => {
    const res = await axios.get('/api/sports')

    dispatch({
        type: FETCH_SPORTS,
        payload: res
    })
}