import React from "react";

const BForm = ({
	schoolName,
	titleOfStudy,
	date,
	onSubmitForm,
	handleChange,
}) => {
	return (
		<form action="" onSubmit={onSubmitForm}>
			<input
				onChange={handleChange}
				value={schoolName}
				type="text"
				id="schoolName"
				name="schoolName"
				placeholder="School Name"
			/>
			<input
				type="text"
				id="titleOfStudy"
				name="titleOfStudy"
				onChange={handleChange}
				value={titleOfStudy}
				placeholder="Title of Study"
			/>
			<input
				type="date"
				onChange={handleChange}
				value={date}
				id="date"
				name="date"
			/>

			<button type="submit">Save</button>
		</form>
	);
};

const Display = ({ schoolName, titleOfStudy, date, onSubmitForm }) => {
	return (
		<div className="information">
			<p>School Name: {schoolName}</p>
			<p>Title of Study: {titleOfStudy}</p>
			<p>date: {date}</p>
			<button onClick={onSubmitForm}>Edit</button>
		</div>
	);
};

class Education extends React.Component {
	constructor() {
		super();
		this.state = {
			isSubmitted: false,
			schoolName: "",
			titleOfStudy: "",
			date: "",
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
		const { isSubmitted, schoolName, titleOfStudy, date } = this.state;
		return (
			<div className="education">
				<h3>Education</h3>
				{isSubmitted ? (
					<Display
						schoolName={schoolName}
						titleOfStudy={titleOfStudy}
						date={date}
						onSubmitForm={this.onSubmitForm}
					/>
				) : (
					<BForm
						schoolName={schoolName}
						titleOfStudy={titleOfStudy}
						date={date}
						handleChange={this.handleChange}
						onSubmitForm={this.onSubmitForm}
					/>
				)}
			</div>
		);
	}
}

export default Education;
