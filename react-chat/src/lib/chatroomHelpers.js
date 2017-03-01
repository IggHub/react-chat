export const removeChatroom = (list, id) => {
  const removedIndex = list.findIndex(item => item.id === id);
  return [
    ...list.slice(0, removedIndex),
    ...list.slice(removedIndex+1)
  ]
}
