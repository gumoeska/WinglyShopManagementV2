import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Form, FormProps, Input, message } from "antd";
import useSession from "../../hooks/useSession";
import { LoginCredentials } from "../../contexts";

type FieldType = {
    login?: string,
    password?: string,
}

const Login = () => {
    const { LoginAccount, isAuthenticated } = useSession();
    const [messageApi, contextHolder] = message.useMessage();

    const statusMessage = (failed: boolean) => {
        if (failed) {
            messageApi.open({
                type: 'error',
                content: 'Usuário ou senha incorretos.'
            });
        } else {
            messageApi.open({
                type: 'success',
                content: 'Logado com sucesso!'
            });
        }
    }

    async function handleSubmit(credentials: LoginCredentials) {
        try {
            await LoginAccount(credentials);
            if (isAuthenticated) {
                statusMessage(false);
            } else {
                statusMessage(true);
            }
        } catch (error) {
            statusMessage(true);

        }
    }
    
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);

        const credentials: LoginCredentials = {
            login: values.login ?? '',
            password: values.password ?? ''
        }

        handleSubmit(credentials);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const cardStyle = {
        width: "400px",
        borderRadius: "16px",
        marginRight: "24px",
        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f5f5f5' }}>
            {contextHolder}
            <div className="flex flex-col mb-10 items-center">
                <img src="/src/assets/images/winglyShopLogoColor.png" width={60} height={60} className="m-0" />
                <div>
                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0" style={{ color: '#5e49e7' }}>
                        Wingly Shop
                    </h2>
                </div>
            </div>
            <div>
                <Card style={cardStyle}>
                    <div className="flex flex-row items-center justify-center">
                        <UserOutlined style={{ color: '#5e49e7' }} />
                        <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight px-4" style={{ color: '#5e49e7' }}>
                            Entrar
                        </h3>
                    </div>
                    <div className="flex flex-row items-center justify-center pt-2">
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Não tem uma conta?
                        </p>
                        <Button type="link" style={{ color: '#5e49e7' }} size='small' href="/registrar">
                            Registre-se
                        </Button>
                    </div>
                    <Divider />
                    <div className="flex flex-col items-center justify-center">
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off">
                            <div className="flex flex-col">
                                <p>Usuário:</p>
                                <Form.Item<FieldType> name="login" rules={[{ required: true, message: 'O usuário é obrigatório' }]} className="m-0">
                                    <Input
                                        size="large"
                                        placeholder="Insira seu Usuário"
                                        prefix={<UserOutlined />} />
                                </Form.Item>
                            </div>
                            <br />
                            <div className="flex flex-col">
                                <p>Senha:</p>
                                <Form.Item<FieldType> name="password" rules={[{ required: true, message: 'A senha é obrigatória' }]} className="m-0">
                                    <Input.Password
                                        size="large"
                                        prefix={<LockOutlined />}
                                        placeholder="Insira sua senha"
                                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                                </Form.Item>
                            </div>
                            <div className="flex flex-row justify-center mt-4 pt-5">
                                <div className="flex flex-row w-full">
                                    <Form.Item className="w-full mr-1">
                                        <Button
                                            className="w-full"
                                            type="primary"
                                            htmlType="submit"
                                            style={{ backgroundColor: '#5e49e7' }}>
                                            Entrar
                                        </Button>
                                    </Form.Item>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Card>
            </div>
        </main>
    );
}

export default Login;


