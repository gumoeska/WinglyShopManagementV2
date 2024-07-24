import { Route, Routes } from "react-router-dom";
import useRoutePaths from "../../hooks/useRoutePaths";
import PrivateRoute from "../private/PrivateRoute";
import PublicRoute from "../public/PublicRoute";
import App from "../../App";
import { lazy } from "react";

const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));
const MyAccount = lazy(() => import('../../pages/Account/MyAccount'));

const Products = lazy(() => import('../../pages/Registration/Products'));
const AddProduct = lazy(() => import('../../pages/Registration/Products/AddProduct'));

const Categories = lazy(() => import('../../pages/Registration/Categories'));
const AddCategory = lazy(() => import('../../pages/Registration/Categories/AddCategories/AddCategory'));

const Home = lazy(() => import('../../pages/Home'));
const Orders = lazy(() => import('../../pages/Shop/Orders'));
const Deliveries = lazy(() => import('../../pages/Shop/Deliveries'));
const Sales = lazy(() => import('../../pages/Dashboard/Sales'));
const Authorizations = lazy(() => import('../../pages/Users/Authorizations'));
const Prospect = lazy(() => import('../../pages/Dashboard/Prospect'));
const Accounts = lazy(() => import('../../pages/Users/Accounts'));

const Router = () => {
    const {
        MAIN_PATH,
        MY_ACCOUNT_PATH,
        LOGIN_PATH,
        REGISTER_PATH,
        HOME_PATH,
        PRODUCTS_PATH,
        PRODUCTS_CREATE_PATH,
        CATEGORIES_PATH,
        CATEGORIES_CREATE_PATH,
        ORDERS_PATH,
        DELIVERIES_PATH,
        ACCOUNTS_PATH,
        AUTHORIZATIONS_PATH,
        PROSPECT_PATH,
        SALES_PATH,
    } = useRoutePaths();

    return (
        <Routes>
            {/* Public */}
            <Route path={LOGIN_PATH} element={ <PublicRoute> <Login /> </PublicRoute> } />
            <Route path={REGISTER_PATH} element={ <PublicRoute> <Register /> </PublicRoute> } />

            {/* Private */}
            <Route path={MY_ACCOUNT_PATH} element={ <PrivateRoute> <MyAccount /> </PrivateRoute> } />
            <Route path={MAIN_PATH} element={ <PrivateRoute> <App /> </PrivateRoute> } />
            <Route path={HOME_PATH} element={ <PrivateRoute> <Home /> </PrivateRoute> } />
            <Route path={PRODUCTS_PATH} element={ <PrivateRoute> <Products /> </PrivateRoute> } />
            <Route path={PRODUCTS_CREATE_PATH} element={ <PrivateRoute> <AddProduct /> </PrivateRoute> } />
            <Route path={CATEGORIES_PATH} element={ <PrivateRoute> <Categories /> </PrivateRoute> } />
            <Route path={CATEGORIES_CREATE_PATH} element={ <PrivateRoute> <AddCategory /> </PrivateRoute> } />
            <Route path={ORDERS_PATH} element={ <PrivateRoute> <Orders /> </PrivateRoute> } />
            <Route path={DELIVERIES_PATH} element={ <PrivateRoute> <Deliveries /> </PrivateRoute> } />
            <Route path={PROSPECT_PATH} element={ <PrivateRoute> <Prospect /> </PrivateRoute> } />
            <Route path={SALES_PATH} element={ <PrivateRoute> <Sales /> </PrivateRoute> } />
            <Route path={ACCOUNTS_PATH} element={ <PrivateRoute> <Accounts /> </PrivateRoute> } />
            <Route path={AUTHORIZATIONS_PATH} element={ <PrivateRoute> <Authorizations /> </PrivateRoute> } />

        </Routes>
    );
}

export default Router;