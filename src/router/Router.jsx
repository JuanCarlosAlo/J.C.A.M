import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../layout/Layout';

const Router = () => {
	return (
		<Routes>
			<Route>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
