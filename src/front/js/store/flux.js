const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			todos: [
				[
					{ plant_Name: "Agrega plantas" },
					{ plant_url: "https://whatsup.es/wp-content/uploads/2020/07/partes-de-la-planta-en-ingles.jpg" },

					{
						tasks: [
							{ task: "DDDDDD", freq: 24, type: "Horas" },
							{ task: "tarea2", freq: 24, type: "Horas" }
						]
					}
				]
			],
			plants: [
				{
					name: "Chile Jalapeño",
					scientName: "Capsicum annuum var"
				},
				{
					name: "Chile Poblano / Chile Ancho",
					scientName: "Capsicum annuum var"
				},
				{
					name: "Chile Habanero Manzano",
					scientName: "Capsicum annuum var"
				},
				{
					name: "Chile Güero Húngaro Variedad Santa Fe",
					scientName: "Capsicum annuum var"
				},
				{
					name: "Betabel Remolacha",
					scientName: "Beta vulgaris"
				},
				{
					name: "Cabeza Larga",
					scientName: "Curcubita pepo"
				},
				{
					name: "Cebolla Amarilla",
					scientName: "Allium cepa"
				},
				{
					name: "Crisantemo Gigante Blanco",
					scientName: "Leucanthemum maximum"
				},
				{
					name: "Girasol Belleza de Otoño Variado",
					scientName: "Helianthus decapetalus"
				}
			],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			changeName: name_doc => {
				if (name_doc == "" || name_doc == undefined) {
					setStore({ name: "Aquí irá el nombre de tu planta" });
				} else {
					setStore({ name: name_doc });
				}
			},

			modifyTodos: (list, oldlist) => {
				// Hola
				let newlist = oldlist;
				let control_list = newlist.push(list);
				console.log(newlist);
				setStore({ todos: control_list });
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
