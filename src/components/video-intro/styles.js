import { keyframes, styled } from 'styled-components';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';

const slideIn = keyframes`
 0% {
    transform: translateY(-10px);
    color: transparent;
     }


     100%{
      color: ${COLORS.WHITE};
    transform: translateY(0px);
    text-shadow: 2px 2px 2px rgb(0 0 0 /.7);
    
     }
`;
const intro = keyframes`
 0% {
   transform: translateY(10px);
    color: transparent;
     }


     100%{
      color: ${COLORS.WHITE};
      transform: translateY(0px);
    text-shadow: 2px 2px 2px rgb(0 0 0 /.7);
    
     }
`;

const StyledVideoContainer = styled.div`
	position: relative;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;
	z-index: -10;
`;

const StyledTitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
	z-index: 10;
`

const StyledTitle = styled.p`
	font-family: Red-Seven;
	color: ${COLORS.WHITE};
	font-size: ${MEASUREMENTS.FONTS_SIZE.TITLE.DESKTOP};
   text-shadow: 2px 2px 2px rgb(0 0 0 /.7);
    animation-name:  ${intro};
    animation-duration: 1.2s;
margin: 0;
`;

const StyledSubtitles = styled.p`
	font-size: 0.8rem;
	display: flex;
	justify-content: center;
	color: transparent;
	animation-name: ${slideIn};
	animation-duration: 1.6s;
	animation-delay: 1s;
	animation-fill-mode: forwards;


`;

export { StyledVideoContainer, StyledTitle, StyledSubtitles, StyledTitleContainer };
