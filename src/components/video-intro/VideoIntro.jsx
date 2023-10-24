import {
	StyledSubtitles,
	StyledTitle,
	StyledTitleContainer,
	StyledVideoContainer
} from './styles';

const VideoIntro = () => {
	return (
		<StyledVideoContainer>
			<StyledTitleContainer>
				<StyledTitle>J.C.A.M</StyledTitle>

				<StyledSubtitles>DESIGNER & WEB DEVELOPER</StyledSubtitles>
			</StyledTitleContainer>
			<video loop muted autoPlay>
				<source src='/videos/desktop-mk1.mp4' type='video/mp4' />
			</video>
		</StyledVideoContainer>
	);
};

export default VideoIntro;
