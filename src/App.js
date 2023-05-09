import "./style/App.css";
import General from "./components/General.js";

function App() {
	return (
		<div className="App">
			<div className="header">
				<h1>CV Maker</h1>
			</div>
			<div className="content">
				<div className="outer">
					<General />
				</div>
			</div>
		</div>
	);
}
export default App;
