import "./style/App.css";
import General from "./components/General.js";
import Education from "./components/Education";
function App() {
	return (
		<div className="App">
			<div className="header">
				<h1>CV Maker</h1>
			</div>
			<div className="content">
				<div className="outer">
					<General />
					<Education />
				</div>
			</div>
		</div>
	);
}
export default App;
