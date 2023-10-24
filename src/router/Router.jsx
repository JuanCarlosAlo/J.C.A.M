import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../layout/Layout';
import Works from '../pages/Works/Works';

const Router = () => {
	return (
		<Routes>
			<Route>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/works' element={<Works />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
