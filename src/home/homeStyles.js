import {StyleSheet} from 'react-native';

import {width} from '../utils/AppDimensions';
import colors from '../colors/AppColors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.appPrimary,
    },
    titleText: {
        fontSize: 50,
        color: colors.white,
    },
    muffinLogo: {
        width: width * 0.6,
        height: width * 0.6,
    },
    helpText: {
        color: colors.white,
        fontSize: 15,
    },
    balanceText: {
        color: colors.white,
        fontSize: 50,
    },
});
