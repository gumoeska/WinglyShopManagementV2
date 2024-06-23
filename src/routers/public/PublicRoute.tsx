import { ReactNode, Suspense } from "react"
import useSession from "../../hooks/useSession";
import { Navigate } from "react-router-dom";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import Loader from "../../components/Loader";

type PublicRouteProps = {
    children: ReactNode
}

const PublicRoute = (props: PublicRouteProps) => {
    const { children } = props;

    const { isAuthenticated } = useSession();

    if (isAuthenticated) {
        return <Navigate to="/"/>
    }

    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                {children}
            </Suspense>
        </ErrorBoundary>
    );
}

export default PublicRoute;