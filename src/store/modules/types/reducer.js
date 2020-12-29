const defaultState = [];

export default function types(state = defaultState, action) {
    switch (action.type) {
        case '@types/GET':
            return state;

        case '@types/SET':
            return action.data;

        default:
            return defaultState;
    }
}
