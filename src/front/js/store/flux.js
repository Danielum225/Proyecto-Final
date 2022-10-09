const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      Productos: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      registro: (email, contraseña, direccion, telefono, ciudad, pais) => {
        fetch(process.env.BACKEND_URL + "/api/registro", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            contraseña: contraseña,
            direccion: direccion,
            telefono: telefono,
            ciudad: ciudad,
            pais: pais,
          }),
          headers: { "Content-type": "application/json" },
        });
      },

      crearProducto: (categoria, tipoAnimal, nombre, precio, descripcion) => {
        fetch(process.env.BACKEND_URL + "/api/crearProducto", {
          method: "POST",
          body: JSON.stringify({
            categoria: categoria,
            tipoAnimal: tipoAnimal,
            nombre: nombre,
            precio: precio,
            descripcion: descripcion,
          }),
          headers: { "Content-type": "application/json" },
        });
      },

      login: async (email, password) => {
        const resp = await fetch(`https://your_api.com/token`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: "joe@gmail.com", password: "1234" }),
        });

        if (!resp.ok) throw Error("There was a problem in the login request");

        if (resp.status === 401) {
          throw "Invalid credentials";
        } else if (resp.status === 400) {
          throw "Invalid email or password format";
        }
        const data = await resp.json();
        // save your token in the localStorage
        //also you should set your user into the store using the setStore function
        localStorage.setItem("jwt-token", data.token);

        return data;
      },

      mostrarProducto: () => {
        fetch(process.env.BACKEND_URL + "/api/mostrarProducto")
          .then((data) => data.json())
          .then((data) => setStore.store({ productos: data }));
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
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
      },
    },
  };
};

export default getState;
