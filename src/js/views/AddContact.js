import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [userInput, setUserInput] = useState({
		full_name: "",
		address: "",
		phone: "",
		email: ""
	});

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={userInput.full_name}
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
							actions.saveContact(userInput);
						}}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
