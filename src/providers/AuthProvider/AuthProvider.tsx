import { ReactNode, useEffect, useState } from "react"
import { AuthContext, LoginAccount, User } from "../../contexts";
import { useLocation, useNavigate } from "react-router-dom";
import { getToken, removeToken, setToken } from "../../util/jwtToken";
import { api } from "../../services/api";
import { AxiosError } from "axios";
import { setAuthorizationHeader } from "../../services/interceptors";
import paths from "../../routers/paths";
import { RegisterAccount } from "../../contexts/auth/AuthContext";
import { message } from "antd";

type AuthProviderProps = {
  children: ReactNode
}

const AuthProvider = (props: AuthProviderProps) => {
  // Base props
  const { children } = props;

  // Auth
  const [user, setUser] = useState<User>();
  const token: string = getToken();
  const isAuthenticated = Boolean(token);

  // Loading data
  const [loadingUserData, setLoadingUserData] = useState(true);

  const [messageApi, contextHolder] = message.useMessage();

  // Routes
  const navigate = useNavigate();
  const { pathname } = useLocation();

  async function signIn(params: LoginAccount) {
    const { login, password } = params;

    try {
      const response = await api.post('/auth/login', { login, password });
      const { authData, username } = response.data;

      setUser({ username });
      setToken(authData);
      setAuthorizationHeader({ request: api.defaults, token });

      messageApi.open({
        type: 'success',
        content: 'Logado com sucesso!'
      });

    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  }

  async function registerNewAccount(account: RegisterAccount): Promise<boolean | undefined> {
    const { login, email, password, name, surname, image, phone } = account;

    try {
      const response = await api.post('/auth/register', {
        login, email, password, name, surname, image, phone
      });
      const result = Boolean(response.data);

      return result;

    } catch (error) {
      return false;
    }
  }

  function signOut() {
    removeToken();
    setUser(undefined)
    setLoadingUserData(false)
    navigate(paths.LOGIN_PATH)
  }

  useEffect(() => {
    if (!token) {
      setUser(undefined)
      setLoadingUserData(false)
    }
  }, [navigate, pathname, token])

  useEffect(() => {
    const token = getToken()

    async function getUserData() {
      setLoadingUserData(true)

      try {
        const response = await api.get('/auth/profile')

        if (response?.data) {
          const { username } = response.data
          setUser({ username })
        }
      } catch (error) {
        // Error ..
      } finally {
        setLoadingUserData(false)
      }
    }

    if (token) {
      setAuthorizationHeader({ request: api.defaults, token })
      getUserData()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loadingUserData,
        signIn,
        registerNewAccount,
        signOut
      }}>
      {contextHolder}
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;