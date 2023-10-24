import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Logo from '../logo/logo';
import Text from '../text/Text';
import { StyledHeader, StyledHeaderContainer, StyledMenu } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<Logo fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE} />
				<nav>
					<StyledMenu>
						<li>
							<Text
								align={MEASUREMENTS.ALIGN.CENTER}
								color={COLORS.WHITE}
								fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
								text={'Home'}
							/>
						</li>

						<li>
							<Text
								align={MEASUREMENTS.ALIGN.CENTER}
								color={COLORS.WHITE}
								fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
								text={'Works'}
							/>
						</li>
					</StyledMenu>
				</nav>
			</StyledHeaderContainer>
		</StyledHeader>
	);
};

export default Header;
