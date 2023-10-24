import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Text from '../text/Text';
import {
	StyledImg,
	StyledImgContainer,
	StyledModalText,
	StyledProjectContainer
} from './styles';

const ProjectsComponents = ({ img, url, flex, index }) => {
	return (
		<StyledProjectContainer flex={flex}>
			<Text
				align={
					flex === 'row' ? MEASUREMENTS.ALIGN.RIGHT : MEASUREMENTS.ALIGN.LEFT
				}
				color={COLORS.WHITE}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				text={index}
			/>
			<StyledImgContainer onClick={() => handleProjectClick(url)}>
				<StyledModalText>Click to see it in Github</StyledModalText>
				<StyledImg src={img} alt='project img' />
			</StyledImgContainer>
		</StyledProjectContainer>
	);
};

const handleProjectClick = url => {
	window.open(url, '_blank'); // Abre la URL en una nueva pestaña
};

export default ProjectsComponents;
