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
            dispatch(getCurrentBalance());
        },
    };
};

const mapStateToProps = (state) => {
    return {
        data: {
            fetching: state.home.fetching,
            currentBalance: state.home.currentBalance,
        },
    };
};

class Home extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    static propTypes = {
        getBalance: T.func.isRequired,
        data: T.shape({
            fetching: T.bool.isRequired,
            currentBalance: T.number,
        }),
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>muffin</Text>
                <Image
                    style={styles.muffinLogo}
                    source={require('../images/homeMuffinInvert.png')}/>
                <Text style={styles.helpText}>tap to pay</Text>
                <Text style={styles.balanceText}>$15.94</Text>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
