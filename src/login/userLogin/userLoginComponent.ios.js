import React, {Component, PropTypes as T} from 'react';
import {
    View,
    Button,
    AsyncStorage,
} from 'react-native';

import {connect} from 'react-redux';

import {receiveIdToken} from './userLoginActions';
import {changeAppRoot} from '../appRoot/appRootActions';

let Auth0Lock = require('react-native-lock');

const mapDispatchToProps = (dispatch) => {
    return {
        saveToken: (data) => {
            dispatch(receiveIdToken(data));
        },
        changeRoot: () => {
            dispatch(changeAppRoot('main'));
        },
    };
};

const mapStateToProps = (state) => {
    return {
    };
};

class UserLogin extends Component {
    lock = new Auth0Lock({
        clientId: 'cxZYhQ481nzcUhK2VrvfNxNW2ANWT9qc',
        domain: 'danielchao.auth0.com',
    });

    static propTypes = {
        saveToken: T.func.isRequired,
        changeRoot: T.func.isRequired,
    }

    componentDidMount() {
        this.lock.show({}, (err, profile, token) => {
            try {                
                this.props.saveToken(token.idToken);
                this.props.changeRoot();
            } catch (e) {
                console.log(e);
                // TODO: Error handling
            }
        });
    }

    showLock() {
        this.lock.show({}, (err, profile, token) => {
            console.log(profile);
            console.log(token);
        });
    }

    render() {
        return (
            <View>
                <Button title="Hello!" onPress={() => this.showLock()}/>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
