import { Button, Checkbox, Divider, Form, FormProps, Input, message, Select } from "antd";
import CustomCard from "../../../../components/CustomCard";
import { DollarOutlined, EditOutlined, QrcodeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useRoutePaths from "../../../../hooks/useRoutePaths";
import { CreateProduct } from "../../../../services/registration/products/productsRequests";
import { GetCategories } from "../../../../services/registration/categories/categoriesRequests";
import { ProductRegistration } from "../../../../types";
import { useEffect, useState } from "react";
import { Category } from "../../../../types/categories";

const AddProduct = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [categories, setCategories] = useState<Category[]>([]);
    const [isCategoriesLoading, setIsCategoriesLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const path = useRoutePaths();


    const statusMessage = (failed: boolean) => {
        if (failed) {
            messageApi.open({
                type: 'error',
                content: 'Ocorreu um erro ao cadastrar o Produto.'
            });
        } else {
            messageApi.open({
                type: 'success',
                content: 'Produto cadastrado com sucesso!'
            });
        }
    }

    async function handleSubmit(product: ProductRegistration) {
        try {
            CreateProduct(product);
            statusMessage(false);
            
            navigate(path.PRODUCTS_PATH);
        } catch (error) {
            statusMessage(true);
        }
    }

    const onFinish: FormProps<ProductRegistration>['onFinish'] = (values) => {
        console.log('Success:', values);

        handleSubmit(values);
    };

    const onFinishFailed: FormProps<ProductRegistration>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const cancel = () => {
        navigate(path.PRODUCTS_PATH);
    };

    async function GetCategoriesRequest() {
        const categoriesRequest: Category[] | undefined = await GetCategories();

        if (categoriesRequest?.length) {
            setCategories(categoriesRequest);
            setIsCategoriesLoading(false);
        }
    }

    useEffect(() => {
        if (categories.length) {
            return;
        }

        setIsCategoriesLoading(true);

        GetCategoriesRequest();
    }, [isCategoriesLoading, categories]);

    return (
        <main className="min-h-screen">
            <div className="flex flex-col p-5">
                <CustomCard>
                    <div>
                        {contextHolder}
                        <div className="flex flex-row justify-between">
                            <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl">
                                Cadastrar novo Produto
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
                                        <Form.Item<ProductRegistration> name="code" rules={[{ required: true, message: 'O código é obrigatório' }]} className="m-0">
                                            <Input
                                                size="middle"
                                                placeholder="001"
                                                prefix={<QrcodeOutlined />} />
                                        </Form.Item>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                                            Nome do Produto:
                                        </p>
                                        <Form.Item<ProductRegistration> name="description" rules={[{ required: true, message: 'O nome do produto é obrigatório' }]} className="m-0">
                                            <Input
                                                size="middle"
                                                placeholder="Insira o nome do Produto"
                                                prefix={<EditOutlined />} />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-4">
                                    <div className="flex flex-col w-1/6">
                                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                                            Preço:
                                        </p>
                                        <Form.Item<ProductRegistration> name="price" rules={[{ required: true, message: 'O nome do produto é obrigatório' }]} className="m-0">
                                            <Input
                                                size="middle"
                                                placeholder="0,00"
                                                prefix={<DollarOutlined />} />
                                        </Form.Item>
                                    </div>
                                    <div className="flex flex-col mt-7">
                                        <Form.Item<ProductRegistration> name="idCategory" rules={[{ required: true, message: 'A categoria é obrigatória' }]} className="m-0">
                                            <Select
                                                style={{ width: 180 }}
                                                loading={isCategoriesLoading}
                                                options={
                                                    categories.map((category) => {
                                                        return { value: category.code, label: category.description }
                                                    })
                                                }
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="flex flex-col mt-6">
                                        <Form.Item<ProductRegistration> name="hasStock" valuePropName="checked" className="m-0">
                                            <Checkbox>
                                                <p className="leading-7 [&:not(:first-child)]:mt-6">
                                                    Possui estoque?
                                                </p>
                                            </Checkbox>
                                        </Form.Item>
                                    </div>
                                    <div className="flex flex-col mt-6">
                                        <Form.Item<ProductRegistration> name="isActive" valuePropName="checked" className="m-0">
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
                                                Cadastrar Produto
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

export default AddProduct;