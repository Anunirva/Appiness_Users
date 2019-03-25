const initialState = {
    username: 'hruday@gmail.com',
    password: 'hruday123',
    authStatus: null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                authStatus: 'Success'
            };
        case "LOGIN_ERROR":
            return {
                ...state,
                authStatus: "Login Failed! Please check your credentials."
            };
        default:
            return state;
    }
};

export default loginReducer;
