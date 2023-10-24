import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledTitle = styled.p`
	color: ${COLORS.WHITE};
	text-align: ${({ align }) => {
		if (align) {
			return align;
		} else {
			return 'left';
		}
	}};
	font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].MOBILE};
	margin-top: ${({ margin }) => margin};
	margin-bottom: ${({ margin }) => margin};
	width: 100%;
	
	@media screen and (min-width: 768px) {
		font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].TABLET};
	}
	@media screen and (min-width: 1024px) {
		font-size: ${({ fontSize }) => MEASUREMENTS.FONTS_SIZE[fontSize].DESKTOP};
	}
`;

export { StyledTitle };
