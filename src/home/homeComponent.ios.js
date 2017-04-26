import React, {Component, PropTypes as T} from 'react';
import {connect} from 'react-redux';
import {
    View,
    Image,
    Text,
} from 'react-native';

import {styles} from './homeStyles';
import {getCurrentBalance} from './homeActions';

const mapDispatchToProps = (dispatch) => {
    return {
        getBalance: () => {
            return dispatch(getCurrentBalance());
        },
        // getBalance: (idToken) => {
        //     return dispatch(getCurrentBalance(idToken));
        // },
        // retrieveBalance: (data) => {
        //     return dispatch(receiveCurrentBalance(data));
        // },
    };
};

const mapStateToProps = (state) => {
    return {
        data: {
            idToken: state.userLogin.idToken,
            fetched: state.home.fetched,
            currentBalance: state.home.currentBalance,
        },
    };
};

class Home extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    static propTypes = {
        data: T.shape({
            idToken: T.string,
            fetched: T.bool.isRequired,
            currentBalance: T.number,
        }),
        getBalance: T.func.isRequired,
    };

    componentDidMount() {
        if (!this.props.data.fetched) {
            this.props.getBalance();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>muffin</Text>
                <Image
                    style={styles.muffinLogo}
                    source={require('../images/homeMuffinInvert.png')}/>
                <Text style={styles.helpText}>tap to pay</Text>
                <Text style={styles.balanceText}>
                    ${this.props.data.currentBalance
                }</Text>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
