import './styles/Global.scss';
import { Route } from 'react-router-dom';
import Header from './component/common/header/Header';
import Department from './component/sub/department/Department';
import Youtube from './component/sub/youtube/Youtube';
import Member from './component/sub/member/Member';
import Gallery from './component/sub/gallery/Gallery';
import Contact from './component/sub/contact/Contact';
function App() {
	return (
		<>
			<Header />
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/member' component={Member} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/contact' component={Contact} />
		</>
	);
}

export default App;
