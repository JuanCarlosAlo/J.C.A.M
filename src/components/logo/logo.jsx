import { StyledLogo } from './styles';

const Logo = ({ fontSize }) => {
	return (
		<StyledLogo fontSize={fontSize} to={'/'}>
			J.C.A.M
		</StyledLogo>
	);
};

export default Logo;
