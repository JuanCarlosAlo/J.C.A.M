import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Icon from '../icon/Icon';
import Text from '../text/Text';
import {
	StyledArrowContainer,
	StyledDirectionContainer,
	StyledImg,
	StyledInfo,
	StyledWorksContainer
} from './styles';

const AllProjectsComponent = ({ item }) => {
	return (
		<StyledWorksContainer onClick={() => handleLinkClick(item.url)}>
			<StyledImg src={item.img} alt='web preview' />
			<StyledInfo>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					color={COLORS.WHITE}
					text={item.title}
				/>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
					color={COLORS.WHITE}
					text={item.description}
				/>
				<StyledDirectionContainer>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
						color={COLORS.WHITE}
						text={'See in github'}
					/>
					<StyledArrowContainer>
						<Icon img={'/images/arrow.svg'} />
					</StyledArrowContainer>
				</StyledDirectionContainer>
			</StyledInfo>
		</StyledWorksContainer>
	);
};

const handleLinkClick = url => {
	// Abrir el enlace en una nueva pestaña
	window.open(url, '_blank');
};

export default AllProjectsComponent;
