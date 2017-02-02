import Ionicons from 'react-native-vector-icons/Ionicons';

import AppColors from '../colors/AppColors.js';

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
	'ios-home': [30, AppColors.black],
	'ios-home--big': [50, AppColors.black],

	'ios-person--active': [30, AppColors.appPrimary],
	'ios-person--active--big': [50, AppColors.appPrimary],
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
		))
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
