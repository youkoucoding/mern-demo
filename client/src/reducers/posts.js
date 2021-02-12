export default (posts = [], action) => {  //(state=[], action)(previousState, action)
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];  // ... is stretch all the post,then add new ones
    default:
      return posts;
  }
}