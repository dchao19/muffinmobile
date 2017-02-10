import Ionicons from 'react-native-vector-icons/Ionicons';

import AppColors from '../colors/AppColors.js';

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
	'ios-home': [30, AppColors.black],
	'ios-home--big': [50, AppColors.black],

	'ios-home-outline': [30, AppColors.white],
	'ios-home-outline--big': [30, AppColors.white],

	'ios-clock': [30, AppColors.white],
	'ios-clock--big': [50, AppColors.white],

	'ios-clock-outline': [30, AppColors.white],
	'ios-clock-outline--big': [50, AppColors.white],

	'ios-add-circle': [30, AppColors.white],
	'ios-add-circle--big': [50, AppColors.white],

	'ios-add-circle-outline': [30, AppColors.white],
	'ios-add-circle-outline--big': [50, AppColors.white],

	'ios-settings': [30, AppColors.white],
	'ios-settings--big': [50, AppColors.white],

	'ios-settings-outline': [30, AppColors.white],
	'ios-settings-outline--big': [50, AppColors.white],
};

const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
	new Promise.all(
		Object.keys(icons).map((iconName) =>
		// IconName--suffix--other-suffix is just the mapping name in iconsMap
			Ionicons.getImageSource(
				iconName.replace(replaceSuffixPattern, ''),
				icons[iconName][0],
				icons[iconName][1]
			)
		)
	).then((sources) => {
		Object.keys(icons)
		.forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

		// Call resolve (and we are done)
		resolve(true);
	});
});

export {
	iconsMap,
	iconsLoaded,
};
