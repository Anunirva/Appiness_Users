export const signIn = credentials => {
    return (dispatch, getState) => {
        const loginData = getState();
        if (loginData.login.username === credentials.username && loginData.login.password === credentials.password) {
            dispatch({ type: "LOGIN_SUCCESS" });
        } else {
            dispatch({ type: "LOGIN_ERROR" });
        }

    };
};
