export function chatReducer(state, action) {
  switch (action.type) {
    case 'init': return [...action.messages];
    case 'add-message': return [...state, {message: action.message, userId: 1}];
    case 'delete-message': return state.filter((message, idx) => idx !== action.messageId);
    default: throw Error();
  }
}