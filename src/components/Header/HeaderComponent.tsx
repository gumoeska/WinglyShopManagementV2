import { Avatar, Button } from "antd";
import useSession from "../../hooks/useSession";

const HeaderComponent = () => {
    const { user, signOut } = useSession();

    const signOutAccount = () => {
        signOut();
    }

    return (
        <div>
            <div className="flex flex-row items-end justify-end space-x-4">
                <div>
                    <Button onClick={signOutAccount}>Sair da conta (Temporário)</Button>
                </div>
                <div>
                    <Avatar size={40} style={{ backgroundColor: '#5e49e7' }}>
                        {user?.username[0]}
                    </Avatar>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;