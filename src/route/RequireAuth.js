import authService from '../services/auth-services/Auth.service';

const RequireAuth = ({children}) => {
    const auth = authService.getCurrentUser(); 
    if (!auth) {
        return null
    }
    return children;
};


export default RequireAuth;

