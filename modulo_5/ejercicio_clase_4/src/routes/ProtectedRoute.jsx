const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user } = useAuth

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(user.role)){
        return <Navigate to="/" />;
    }

    return children;
}