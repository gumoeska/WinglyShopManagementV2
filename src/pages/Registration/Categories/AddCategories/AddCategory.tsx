import { Button, Checkbox, Divider, Form, FormProps, Input, message } from "antd";
import CustomCard from "../../../../components/CustomCard";
import { useNavigate } from "react-router-dom";
import useRoutePaths from "../../../../hooks/useRoutePaths";
import { CategoryRegistration } from "../../../../types/categories";
import { EditOutlined, QrcodeOutlined } from "@ant-design/icons";
import { CreateCategory } from "../../../../services/registration/categories/categoriesRequests";

const AddCategory = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();
    const path = useRoutePaths();


    const statusMessage = (failed: boolean) => {
        if (failed) {
            messageApi.open({
                type: 'error',
                content: 'Ocorreu um erro ao cadastrar a Categoria.'
            });
        } else {
            messageApi.open({
                type: 'success',
                content: 'Categoria cadastrada com sucesso!'
            });
        }
    }

    async function handleSubmit(category: CategoryRegistration) {
        try {
            CreateCategory(category);
            statusMessage(false);
        } catch (error) {
            statusMessage(true);
        }
    }

    const onFinish: FormProps<CategoryRegistration>['onFinish'] = (values) => {
        console.log('Success:', values);

        handleSubmit(values);
    };

    const onFinishFailed: FormProps<CategoryRegistration>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const cancel = () => {
        navigate(path.CATEGORIES_PATH);
    };

    return (
        <main className="min-h-screen">
            {contextHolder}
            <div className="flex flex-col p-5">
                <CustomCard>
                    <div>
                        <div className="flex flex-row justify-between">
                            <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl">
                                Cadastrar nova Categoria
                            </h1>
                        </div>
                        <Divider />
                        <div>
                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off">
                                <div className="flex flex-row space-x-4">
                                    <div className="flex flex-col">
                                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                                            Código:
                                        </p>
                                        <Form.Item<CategoryRegistration> name="code" rules={[{ required: true, message: 'O código é obrigatório' }]} className="m-0">
                                            <Input
                                                size="middle"
                                                placeholder="001"
                                                prefix={<QrcodeOutlined />} />
                                        </Form.Item>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                                            Nome da Categoria:
                                        </p>
                                        <Form.Item<CategoryRegistration> name="description" rules={[{ required: true, message: 'O nome da categoria é obrigatório' }]} className="m-0">
                                            <Input
                                                size="middle"
                                                placeholder="Insira o nome da Categoria"
                                                prefix={<EditOutlined />} />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-4">
                                    <div className="flex flex-col mt-6">
                                        <Form.Item<CategoryRegistration> name="isActive" valuePropName="checked" className="m-0">
                                            <Checkbox>
                                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                                    Ativo?
                                                </p>
                                            </Checkbox>
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="flex flex-row justify-end items-end space-x-4">
                                        <Form.Item className="">
                                            <Button
                                                className="w-full bg-zinc-600"
                                                type="primary"
                                                onClick={cancel}>
                                                Cancelar
                                            </Button>
                                        </Form.Item>
                                        <Form.Item className="">
                                            <Button
                                                className="w-full"
                                                type="primary"
                                                htmlType="submit"
                                                style={{ backgroundColor: '#5e49e7' }}>
                                                Cadastrar Categoria
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </CustomCard>
            </div>
        </main>
    );
}

export default AddCategory;