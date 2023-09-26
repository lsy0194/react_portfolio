import Header from './component/common/header/Header';
import './styles/Global.scss';
import Department from './component/sub/department/Department';
import Youtube from './component/sub/youtube/Youtube';
function App() {
	return (
		<>
			<Header />
			<div>
				<Department />
			</div>
			<Youtube />
		</>
	);
}

export default App;
