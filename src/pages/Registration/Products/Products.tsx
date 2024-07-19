import { Button, Divider, Table } from "antd";
import CustomCard from "../../../components/CustomCard";
import { useEffect, useState } from "react";
import { GetProducts } from "../../../services/registration/products/productsRequests";
import { Product } from "../../../types";
import { useNavigate } from "react-router-dom";
import useRoutePaths from "../../../hooks/useRoutePaths";

const Products = () => {
    const [data, setData] = useState<Product[]>([]);
    const navigate = useNavigate();
    const routePath = useRoutePaths();

    const columns = [
        { key: 1, title: 'Código', dataIndex: 'code' },
        { key: 2, title: 'Descrição', dataIndex: 'description' },
        { key: 3, title: 'Preço', dataIndex: 'price' },
        { key: 4, title: 'Possui estoque', dataIndex: 'hasStock' }
    ];

    const GetAllProducts = async () => {
        const dataRequest = await GetProducts();

        if (dataRequest === undefined){
            return;
        }

        setData(dataRequest);
    }

    const AddProduct = () => {
        navigate(routePath.PRODUCTS_CREATE_PATH);
    }

    useEffect(() => {
        if (data.length){
            return;
        }

        GetAllProducts();
    });

    return (
        <main className="min-h-screen">
            <div className="flex flex-col p-5">
                <CustomCard>
                    <div>
                        <div className="flex flex-row justify-between">
                            <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl">
                                Produtos
                            </h1>
                            <div className="space-x-2">
                                <Button type="primary" onClick={AddProduct}>Novo Produto</Button>
                            </div>
                        </div>
                        <Divider />
                        <div>
                            <Table columns={columns} dataSource={data} />
                        </div>
                    </div>
                </CustomCard>
            </div>
        </main>
    );
}

export default Products;