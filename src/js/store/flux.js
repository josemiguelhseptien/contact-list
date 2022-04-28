const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [
				{
					name: "a",
					address: "b",
					phone: "c",
					email: "d",
					id: "123"
				}
			]
			//Your data structures, A.K.A Entities
		},
		actions: {
			saveContact: newContact => {
				let contactsArr = getStore().contacts;
				contactsArr.push(newContact);
				setStore({ contacts: contactsArr });
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
