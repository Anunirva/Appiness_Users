import React, { Component } from 'react';
import { signIn } from '../store/actions/loginActions';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
        fields: {},
        errors: {}
    }

    handleChange = e => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            this.props.signInHandler(this.state.fields);
        }
    };
    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "Please enter your username.";
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Please enter your password.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;

    }
    render() {
        const { authStatus } = this.props;
        if (authStatus === 'Success') return <Redirect to="/users" />;
        return (
            <React.Fragment>
                <div id="main-registration-container">
                    <div id="register">
                        <form name="userLoginForm" className="user-login-form" onSubmit={this.handleSubmit} >
                            <label>Name</label>
                            <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                            <div className="text-danger">{this.state.errors.username}</div>
                            <label>Password</label>
                            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                            <div className="text-danger">{this.state.errors.password}</div>
                            <input type="submit" className="button" value="Login" />
                            <div className="text-danger">
                                {authStatus ? <p>{authStatus}</p> : null}
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signInHandler: credentials => dispatch(signIn(credentials))
    };
};
const mapStateToProps = rootReducer => {
    return {
        authStatus: rootReducer.login.authStatus,
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
