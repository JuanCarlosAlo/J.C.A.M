import { v4 } from 'uuid';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { SERVICES } from '../../constants/services';
import Logo from '../logo/logo';
import Section from '../section/Section';
import Text from '../text/Text';
import { StyledImg, StyledInfo, StyledServices } from './styles';

const ServicesSection = () => {
	return (
		<Section
			bg={COLORS.WHITE}
			height={'100VH'}
			title={'Services'}
			color={COLORS.BLACK}
		>
			<StyledServices>
				<StyledImg src='/images/laptop.png' alt='' />
				<StyledInfo>
					<Logo fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE} />
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						color={COLORS.BLACK}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
						text={'Best of my services expertise'}
					/>
					{SERVICES.map(item => (
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							color={COLORS.BLACK}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
							text={item.text}
							key={v4()}
						/>
					))}
				</StyledInfo>
			</StyledServices>
		</Section>
	);
};

export default ServicesSection;
