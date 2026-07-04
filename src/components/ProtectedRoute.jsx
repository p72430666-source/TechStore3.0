import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "Administrador") {
    return (
      <div className="max-w-3xl mx-auto text-center py-20">
        <h1 className="text-5xl font-bold text-red-600">
          Acceso denegado
        </h1>

        <p className="mt-6 text-xl">
          Solo el administrador puede ingresar aquí.
        </p>
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;