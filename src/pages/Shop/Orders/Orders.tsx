import CustomCard from "../../../components/CustomCard";

const Orders = () => {
    return (
        <main className="flex flex-col p-5">
            <div className="flex flex-col">
                <div className="p-5">
                    <CustomCard>
                        <h1> Pedidos </h1>
                    </CustomCard>
                </div>
                <div className="flex flex-row p-5">
                    <div className="w-full">
                        <CustomCard>
                            <h1> Pedidos </h1>
                        </CustomCard>
                    </div>
                    <div className="w-full">
                        <CustomCard>
                            <h1> Pedidos </h1>
                        </CustomCard>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Orders;