export default (posts = [], action) => {  //(state=[], action)(previousState, action)
  switch (action.types) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return posts;
    default:
      return posts;
  }
}