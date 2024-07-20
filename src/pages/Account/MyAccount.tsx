import CustomCard from "../../components/CustomCard";
import useSession from "../../hooks/useSession";

const MyAccount = () => {
    const { user } = useSession();

    // Adicionar requisicao ao abrir tela -> buscar informacoes do usuario atual

    return (
        <main className="min-h-screen">
            <div className="flex flex-col p-5">
                <CustomCard>
                    <div className="flex flex-col items-center">
                        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl" style={{ color: '#5e49e7' }}>
                            {user?.username}
                        </h1>
                    </div>
                </CustomCard>
            </div>
        </main>
    );
}

export default MyAccount;