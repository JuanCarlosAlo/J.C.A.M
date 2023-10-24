import { Link } from 'react-scroll';
import AboutSection from '../../components/about-section/AboutSection';
import Icon from '../../components/icon/Icon';
import Section from '../../components/section/Section';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { MEASUREMENTS } from '../../constants/measurements';
import {
	StyledContactInfo,
	StyledIconContainer,
	StyledProyects,
	StyledProyectsContainer,
	StyledWorksContainer
} from './styles';
import { COLORS } from '../../constants/colors';
import { TEXTS } from '../../constants/texts';
import { ALL_PROJECTS } from '../../constants/allProjects';
import AllProjectsComponent from '../../components/all-projects-component/AllProjectsContainer';

const Works = () => {
	const email = 'juancarlosam@live.com';
	return (
		<Section bg={'none'} height={'100VH'} title={''}>
			<StyledWorksContainer>
				<StyledContactInfo>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
						text={'Juan Carlos Alonso Merlo'}
						color={COLORS.WHITE}
					/>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
						color={COLORS.WHITE}
						text={'Front-end developer & Designer'}
					/>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
						color={COLORS.WHITE}
						text={
							'I build inclusive products and create innovative solutions for digital problems'
						}
					/>
					<StyledIconContainer>
						<a href='https://github.com/JuanCarlosAlo' target='_blank'>
							<Icon img='/images/github.svg' />
						</a>
						<a
							href='https://www.linkedin.com/in/juan-carlos-alonso-merlo/'
							target='_blank'
						>
							<Icon img='/images/linkedin.svg' />
						</a>
						<a href={`mailto:${email}`}>
							<Icon img='/images/email.svg' />
						</a>
					</StyledIconContainer>
				</StyledContactInfo>
				<StyledProyects>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
						color={COLORS.WHITE}
						text={TEXTS.ABOUT}
					/>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
						color={COLORS.WHITE}
						text={'Check out my some of my works!'}
					/>
					<StyledProyectsContainer>
						{ALL_PROJECTS.map(item => (
							<AllProjectsComponent item={item} key={item.key} />
						))}
					</StyledProyectsContainer>
				</StyledProyects>
			</StyledWorksContainer>
		</Section>
	);
};

export default Works;
