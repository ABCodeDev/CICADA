export function* globalSagas() {
  // Fork watcher so we can continue execution
  const fetch = "";
  yield take(LOCATION_CHANGE);
  yield cancel(fetch);
}

// Bootstrap sagas
export default [
  globalSagas,
];
