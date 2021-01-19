// Reducer function
// Accepts current state and action
// Current state provided by React automatically
// Returns new state
export default (currentState, action) => {
//    console.log(`Reducer invoked with action: ${JSON.stringify(action)}`)
//    console.log(`Current State: ${JSON.stringify(currentState)}`)
    switch (action.type) {
        case 'addEntry':
            const { cat_id, entry } = action
            return {
                ...currentState,
                entries: [...currentState.entries, { cat_id, entry }]
            }

        default:
            return currentState
    }
}
