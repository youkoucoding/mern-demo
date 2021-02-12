import * as api from '../api';

// action Creators ====>>> functions that returns actions ///////
// redux-thunkというmiddleware による action が　function になりました。
export const getPosts = () => async (dispatch) => {
  //const action = { type: 'FETCH_ALL', payload: [] };  // payload usually datas in it
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};