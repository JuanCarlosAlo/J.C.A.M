import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { PROJECTS } from '../../constants/projects';
import { TEXTS } from '../../constants/texts';
import ProjectsComponents from '../projects-component/ProjectsComponents';
import Section from '../section/Section';
import Text from '../text/Text';
import { StyledProjects } from './styles';

const ProjectsSection = () => {
	return (
		<Section
			bg={`none`}
			title={'Projects'}
			height={'200vh'}
			color={COLORS.WHITE}
		>
			<StyledProjects>
				{PROJECTS.map((item, index) => (
					<ProjectsComponents
						key={item.key}
						flex={item.flex}
						img={item.img}
						url={item.url}
						index={`0${index + 1}/04`}
					/>
				))}
			</StyledProjects>
		</Section>
	);
};

export default ProjectsSection;
