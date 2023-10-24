import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Text from '../text/Text';
import { StyledSection, StyledTitleContainer } from './styled';

const Section = ({ children, bg, title, height, color }) => {
	return (
		<StyledSection bg={bg} height={height}>
			<StyledTitleContainer>
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={color}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					text={title}
				/>
			</StyledTitleContainer>
			{children}
		</StyledSection>
	);
};

export default Section;
