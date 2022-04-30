import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = props => {
	const { store, actions } = useContext(Context);

	let contact = store.contacts.find(element => {
		return element.id == props.match.params.id;
	});
	console.log(contact);

	const [userInput, setUserInput] = useState({
		name: contact.name,
		address: contact.address,
		phone: contact.phone,
		email: contact.email,
		id: contact.id
	});

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={userInput.name}
							onChange={e => {
								setUserInput({ ...userInput, full_name: e.target.value });
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={userInput.email}
							onChange={e => {
								setUserInput({ ...userInput, email: e.target.value });
							}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={userInput.phone}
							onChange={e => {
								setUserInput({ ...userInput, phone: e.target.value });
							}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={userInput.address}
							onChange={e => {
								setUserInput({ ...userInput, address: e.target.value });
							}}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={e => {
							actions.editContact(userInput);
						}}>
						edit
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
