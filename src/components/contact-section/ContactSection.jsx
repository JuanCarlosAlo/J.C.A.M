import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { TEXTS } from '../../constants/texts';
import Section from '../section/Section';
import Text from '../text/Text';
import Icon from '../icon/Icon';
import { StyledContact, StyledIconContainer } from './styles';
import { Link } from 'react-router-dom';

const ContactSection = () => {
	const email = 'juancarlosam@live.com';

	return (
		<Section bg='none' title='Contact me' height='50vh' color={COLORS.WHITE}>
			<StyledContact>
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					text='Ready to kickstart an exciting project or just want to chat?'
				/>
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					text="I'm here to help!"
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
			</StyledContact>
		</Section>
	);
};

export default ContactSection;
