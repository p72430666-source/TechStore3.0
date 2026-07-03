import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    const success = login(username, password);

    if(success){

      navigate("/");

    }else{

      alert("Usuario o contraseña incorrectos.");

    }

  }

  return(

    <div className="max-w-md mx-auto py-16">

      <div className="bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-8">

          Iniciar Sesión

        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input

            type="text"

            placeholder="Usuario"

            className="w-full border rounded-lg p-3"

            value={username}

            onChange={(e)=>setUsername(e.target.value)}

          />

          <input

            type="password"

            placeholder="Contraseña"

            className="w-full border rounded-lg p-3"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

          />

          <button

            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg"

          >

            Ingresar

          </button>

        </form>

        <div className="mt-8 text-sm text-gray-600">

          <p><strong>Administrador</strong></p>

          <p>Usuario: admin</p>

          <p>Contraseña: admin123</p>

          <br/>

          <p><strong>Cliente</strong></p>

          <p>Usuario: cliente</p>

          <p>Contraseña: cliente123</p>

        </div>

      </div>

    </div>

  );

}

export default Login;