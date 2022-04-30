const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [
				{
					full_name: "a",
					address: "b",
					phone: "c",
					email: "d",
					id: "123"
				}
			]
			//Your data structures, A.K.A Entities
		},
		actions: {
			getData: contacts => {
				fetch(` https://assets.breatheco.de/apis/fake/contact/agenda/josemiguelhseptien`)
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(responseAsJson => {
						// Do stuff with the JSONified response

						setStore({ contacts: responseAsJson });
					})
					.catch(error => {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			saveContact: newContact => {
				let myStoreContacts = getStore().contacts;

				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST", // or 'POST'
					body: JSON.stringify({
						full_name: newContact.full_name,
						email: newContact.email,
						agenda_slug: "josemiguelhseptien",
						address: newContact.address,
						phone: newContact.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						if (!res.ok) throw Error(res.statusText);
						return res.json();
					})
					.then(response => {
						console.log("Success:", response);
						getActions().getData();
					})
					.catch(error => console.error(error));

				/*let contactsArr = getStore().contacts;
				contactsArr.push(newContact);
				setStore({ contacts: contactsArr });*/
			},
			editContact: userEdit => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${userEdit.id}`, {
					method: "PUT", // or 'POST'
					body: JSON.stringify({
						full_name: userEdit.full_name,
						email: userEdit.email,
						agenda_slug: "josemiguelhseptien",
						address: userEdit.address,
						phone: userEdit.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						if (!res.ok) throw Error(res.statusText);
						return res.json();
					})
					.then(response => {
						console.log("Success:", response);
						getActions().getData();
					})
					.catch(error => console.error(error));

				/*let contactsArr = getStore().contacts;
				let filteredContacts = contactsArr.filter(element => {
					return element.id != userEdit.id;
				});
				filteredContacts.push(userEdit);
				setStore({ contacts: filteredContacts });*/
			},
			deleteContact: contactId => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contactId}`, {
					method: "DELETE" // or 'POST'
				})
					.then(res => {
						if (!res.ok) throw Error(res.statusText);
						return res.json();
					})
					.then(response => {
						console.log("Success:", response);
						getActions().getData();
					})
					.catch(error => console.error(error));

				/*let contactsArr = getStore().contacts;
				let filteredContacts = contactsArr.filter(element => {
					return element.id != contactId;
				});
				setStore({ contacts: filteredContacts });*/
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
