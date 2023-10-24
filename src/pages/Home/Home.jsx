import AboutSection from '../../components/about-section/AboutSection';
import ContactSection from '../../components/contact-section/ContactSection';
import ProjectsSection from '../../components/projects-section/ProjectsSection';
import ServicesSection from '../../components/services-section/ServicesSection';

import VideoIntro from '../../components/video-intro/VideoIntro';

const Home = () => {
	return (
		<div>
			<VideoIntro />
			<AboutSection />
			<ProjectsSection />
			<ServicesSection />
			<ContactSection />
		</div>
	);
};

export default Home;
