import React from "react";

class General extends React.Component {
	constructor() {
		super();
		this.state = {
			isSubmitted: false,
			fname: "",
			lname: "",
			email: "",
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
	};

	render() {
		// const Display = () => {
		// 	return isSubmitted ?
		// };

		return (
			<div className="general">
				<h3>Personal Information</h3>
				<form
					action=""
					onChange={this.handleChange}
					onSubmit={this.onSubmitForm}
				>
					<input type="text" id="fname" name="fname" placeholder="First Name" />
					<input type="text" id="lname" name="lname" placeholder="Last Name" />
					<input type="email" id="email" name="email" placeholder="Email" />
					<input
						type="tel"
						id="telephone"
						name="telephone"
						placeholder="Telephone"
					/>
					<button type="submit">Save</button>
				</form>
			</div>
		);
	}
}

export default General;
