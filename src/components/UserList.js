import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';

export class UserList extends Component {

    render() {
        const { users } = this.props;
        return (
            <div className="user-list flex">
                {users &&
                    users.map(user => {
                        return (
                            <User user={user} key={user.id} />
                        );
                    })}
            </div>
        )
    }
}

const mapStateToProps = rootReducer => {
    return {
        users: rootReducer.users.users,
    };
};

export default connect(mapStateToProps, null)(UserList)
