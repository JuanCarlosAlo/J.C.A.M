import { StyledFooter } from './styles';

import Text from '../text/Text';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Logo from '../logo/logo';

const Footer = () => {
	return (
		<StyledFooter>
			<Text
				align={MEASUREMENTS.ALIGN.LEFT}
				color={COLORS.WHITE}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
				text={'Designed and developed by '}
			/>

			<Logo fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT} />
		</StyledFooter>
	);
};

export default Footer;
