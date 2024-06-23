import { ReactNode, Suspense } from "react"
import useSession from "../../hooks/useSession";
import { ValidateUserPermissions } from "../../util/validateUserPermissions";
import { Navigate } from "react-router-dom";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import Loader from "../../components/Loader";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import SiderComponent from "../../components/SiderComponent";
import HeaderComponent from "../../components/Header/HeaderComponent";
import { Header } from "antd/es/layout/layout";

type PrivateRouteProps = {
    role?: string,
    redirectTo?: string,
    children: ReactNode
}

function PrivateRoute(props: PrivateRouteProps) {
    const { role, redirectTo = '/entrar', children } = props;

    const { isAuthenticated, user, loadingUserData } = useSession();
    const { hasPermission } = ValidateUserPermissions({ user, role });

    if (loadingUserData) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to={redirectTo} />
    }

    if (!hasPermission) {
        return <Navigate to={redirectTo} />
    }

    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
                <Layout className='min-h-screen'>
                    <Sider style={{ outline: '1px solid #969696' }}>
                        <SiderComponent />
                    </Sider>
                    <Layout>
                        <Header className='px-6' style={{ backgroundColor: '#f5f5f5' }}>
                            <HeaderComponent />
                        </Header>
                        {children}
                    </Layout>
                </Layout>
            </Suspense>
        </ErrorBoundary>
    );
}

export default PrivateRoute;