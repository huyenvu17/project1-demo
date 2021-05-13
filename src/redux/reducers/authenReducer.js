const initialState = {
    isSignedIn: true,
    email: null,
}

export const authenticationReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        default:
        return state;
    }

}