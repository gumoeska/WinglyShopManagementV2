import CustomCard from "../../../components/CustomCard";

const Deliveries = () => {
    return (
        <main className="flex flex-col p-5">
            <div className="flex flex-col">
                <div className="p-5">
                    <CustomCard>
                        <div>
                            <h1> (Em Construção) </h1>
                            <h1> Entregas </h1>
                        </div>
                    </CustomCard>
                </div>
                <div className="flex flex-row p-5">
                    <div className="w-full">
                        <CustomCard>
                            <h1> Entregas </h1>
                        </CustomCard>
                    </div>
                    <div className="w-full">
                        <CustomCard>
                            <h1> Entregas </h1>
                        </CustomCard>
                    </div>
                </div>
                <div className="p-5">
                    <CustomCard>
                        <h1> Entregas </h1>
                    </CustomCard>
                </div>
            </div>
        </main>
    );
}

export default Deliveries;