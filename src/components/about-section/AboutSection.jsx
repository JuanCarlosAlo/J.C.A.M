import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { TEXTS } from '../../constants/texts';
import Section from '../section/Section';
import Text from '../text/Text';
import { StyledAboutMe } from './styles';

const AboutSection = () => {
	return (
		<Section
			bg={`url(/images/about-bg.png) center no-repeat`}
			title={'About me'}
			height={'100vh'}
			color={COLORS.WHITE}
		>
			<StyledAboutMe>
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					text={TEXTS.ABOUT}
				/>
			</StyledAboutMe>
		</Section>
	);
};

export default AboutSection;
