import React from "react";

const CForm = ({
	companyName,
	position,
	dateStart,
	dateEnd,
	onSubmitForm,
	handleChange,
}) => {
	return (
		<form action="" onSubmit={onSubmitForm}>
			<input
				onChange={handleChange}
				value={companyName}
				type="text"
				id="companyName"
				name="companyName"
				placeholder="Company Name"
			/>
			<input
				type="text"
				id="position"
				name="position"
				onChange={handleChange}
				value={position}
				placeholder="Position"
			/>
			<input
				type="date"
				onChange={handleChange}
				value={dateStart}
				id="dateStart"
				name="dateStart"
			/>
			<input
				type="date"
				onChange={handleChange}
				value={dateEnd}
				id="dateEnd"
				name="dateEnd"
			/>

			<button type="submit">Save</button>
		</form>
	);
};

const Display = ({
	companyName,
	position,
	dateStart,
	dateEnd,
	onSubmitForm,
}) => {
	return (
		<div className="information">
			<p>Company Name: {companyName}</p>
			<p>Position: {position}</p>
			<p>
				Worked from {dateStart} to {dateEnd}
			</p>
			<button onClick={onSubmitForm}>Edit</button>
		</div>
	);
};

class Experience extends React.Component {
	constructor() {
		super();
		this.state = {
			isSubmitted: false,
			companyName: "",
			position: "",
			dateStart: "",
			dateEnd: "",
		};
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	onSubmitForm = (e) => {
		e.preventDefault();
		this.setState({
			isSubmitted: !this.state.isSubmitted,
		});
	};
	render() {
		const { isSubmitted, companyName, position, dateStart, dateEnd } =
			this.state;
		return (
			<div className="Experience">
				<h3>Experience</h3>
				{isSubmitted ? (
					<Display
						companyName={companyName}
						position={position}
						dateStart={dateStart}
						dateEnd={dateEnd}
						onSubmitForm={this.onSubmitForm}
					/>
				) : (
					<CForm
						companyName={companyName}
						position={position}
						dateStart={dateStart}
						dateEnd={dateEnd}
						handleChange={this.handleChange}
						onSubmitForm={this.onSubmitForm}
					/>
				)}
			</div>
		);
	}
}

export default Experience;
