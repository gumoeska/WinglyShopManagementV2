import { Button, Divider, Table } from "antd";
import CustomCard from "../../../components/CustomCard";
import { useEffect, useState } from "react";
import { GetCategories } from "../../../services/registration/categories/categoriesRequests";
import { Category } from "../../../types/categories";

const Categories = () => {
    const [data, setData] = useState<Category[]>([]);

    const columns = [
        { key: 1, title: 'Código', dataIndex: 'code' },
        { key: 2, title: 'Descrição', dataIndex: 'description' }
    ];

    const GetAllCategories = async () => {
        const dataRequest = await GetCategories();

        if (dataRequest === undefined) {
            return;
        }

        setData(dataRequest);
    }

    useEffect(() => {
        if (data.length) {
            return;
        }

        GetAllCategories();
    });

    return (
        <main className="min-h-screen">
            <div className="flex flex-col p-5">
                <CustomCard>
                    <div>
                        <div className="flex flex-row justify-between">
                            <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl fc">
                                Categorias
                            </h1>
                            <div className="space-x-2">
                                <Button type="primary">Nova Categoria</Button>
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

export default Categories;