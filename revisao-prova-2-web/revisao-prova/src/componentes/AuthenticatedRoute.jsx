import { useAuth } from './AuthProvider';
import { Navigate } from 'react-router-dom';

export default function AuthenticatedRoute({ children }) {
    const { autenticado } = useAuth();
    
    if(!autenticado) {
        return <Navigate to="/home" replace/>
    }

    return children;
}