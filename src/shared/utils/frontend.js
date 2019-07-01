/**
 * Creates new state from state and newState. NewState overwrites state properties.
 * @param state
 * @param newState
 * @returns {*}
 */
export function getNewState(state, newState) {
  return Object.assign({}, state, newState);
}

/**
 * Check if data is empty or not when we try first time to render the component.
 * @param items
 * @returns {boolean}
 */
export function isFirstRender(items) {
  return !items || items.length === 0 || Object.keys(items).length === 0;
}
