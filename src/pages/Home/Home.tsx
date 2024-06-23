import useSession from "../../hooks/useSession";
import CustomCard from "../../components/CustomCard";

const Home = () => {
    const { user } = useSession();

    return (
        <main className="min-h-screen">
            <div className="flex flex-col p-5">
                <CustomCard>
                    <div className="flex flex-col items-center">
                        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl" style={{ color: '#5e49e7' }}>
                            Olá, {user?.username}!
                        </h1>
                    </div>
                </CustomCard>
            </div>
        </main>
    );
}

export default Home;