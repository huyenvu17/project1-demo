const initialState = {
    isSignedIn: true,
    email: null,
}

const authenReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        
        default:
        return state;
    }

}

export default authenReducer;