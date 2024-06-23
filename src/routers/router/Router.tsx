import { Route, Routes } from "react-router-dom";
import useRoutePaths from "../../hooks/useRoutePaths";
import PrivateRoute from "../private/PrivateRoute";
import PublicRoute from "../public/PublicRoute";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import App from "../../App";
import Home from "../../pages/Home";
import Products from "../../pages/Registration/Products";
import Categories from "../../pages/Registration/Categories";

const Router = () => {
    const {
        MAIN_PATH,
        LOGIN_PATH,
        REGISTER_PATH,
        HOME_PATH,
        PRODUCTS_PATH,
        CATEGORIES_PATH
    } = useRoutePaths();

    return (
        <Routes>
            {/* Public */}
            <Route
                path={LOGIN_PATH}
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />

            <Route
                path={REGISTER_PATH}
                element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                } />

            {/* Private */}
            <Route
                path={MAIN_PATH}
                element={
                    <PrivateRoute>
                        <App />
                    </PrivateRoute>
                } />

            <Route
                path={HOME_PATH}
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />

            <Route
                path={PRODUCTS_PATH}
                element={
                    <PrivateRoute>
                        <Products />
                    </PrivateRoute>
                } />

            <Route
                path={CATEGORIES_PATH}
                element={
                    <PrivateRoute>
                        <Categories />
                    </PrivateRoute>
                } />
        </Routes>
    );
}

export default Router;