// Reducer function
// Accepts current state and action
// Current state provided by React automatically
// Returns new state
export default (currentState, action) => {
    //    console.log(`Reducer invoked with action: ${JSON.stringify(action)}`)
    //    console.log(`Current State: ${JSON.stringify(currentState)}`)
    switch (action.type) {
        case 'addEntry':
            return {
                ...currentState,
                entries: [...currentState.entries, action.entry]
            }
        case 'setEntries':
            return {
                ...currentState,
                entries: action.entries
            }
        case 'setCategories':
            return {
                ...currentState,
                categories: action.categories
            }
        case 'setLoading':
            return {
                ...currentState,
                loading: action.value
            }

        default:
            return currentState
    }
}
