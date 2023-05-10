import React from "react";

const AForm = ({
	fname,
	lname,
	email,
	telephone,
	onSubmitForm,
	handleChange,
}) => {
	return (
		<form action="" onSubmit={onSubmitForm}>
			<input
				onChange={handleChange}
				value={fname}
				type="text"
				id="fname"
				name="fname"
				placeholder="First Name"
			/>
			<input
				type="text"
				id="lname"
				name="lname"
				onChange={handleChange}
				value={lname}
				placeholder="Last Name"
			/>
			<input
				type="email"
				onChange={handleChange}
				value={email}
				id="email"
				name="email"
				placeholder="Email"
			/>
			<input
				type="tel"
				id="telephone"
				name="telephone"
				onChange={handleChange}
				value={telephone}
				placeholder="Telephone"
				pattern="[0-9]{10}"
			/>

			<button type="submit">Save</button>
		</form>
	);
};

const Display = ({ fname, lname, email, telephone, onSubmitForm }) => {
	return (
		<div className="information">
			<p>
				Name: {fname} {lname}
			</p>
			<p>Email: {email}</p>
			<p>Tel: {telephone}</p>
			<button onClick={onSubmitForm}>Edit</button>
		</div>
	);
};

class General extends React.Component {
	constructor() {
		super();
		this.state = {
			isSubmitted: false,
			fname: "",
			lname: "",
			email: "",
			telephone: "",
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
		const { isSubmitted, fname, lname, email, telephone } = this.state;

		return (
			<div className="general">
				<h3>Personal Information</h3>
				{isSubmitted ? (
					<Display
						fname={fname}
						lname={lname}
						email={email}
						telephone={telephone}
						onSubmitForm={this.onSubmitForm}
					/>
				) : (
					<AForm
						fname={fname}
						lname={lname}
						email={email}
						telephone={telephone}
						handleChange={this.handleChange}
						onSubmitForm={this.onSubmitForm}
					/>
				)}
			</div>
		);
	}
}

export default General;
