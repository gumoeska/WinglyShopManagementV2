import { Avatar, Dropdown, MenuProps } from "antd";
import useSession from "../../hooks/useSession";
import { useNavigate } from "react-router-dom";
import useRoutePaths from "../../hooks/useRoutePaths";

const HeaderComponent = () => {
    const { user, signOut } = useSession();
    
    const navigate = useNavigate();
    const path = useRoutePaths();
    
    const goToMyAccount = () => {
        navigate(path.MY_ACCOUNT_PATH);
    }

    const signOutAccount = () => {
        signOut();
    }

    const items: MenuProps['items'] = [
        {
            label: <a onClick={goToMyAccount}>Minha Conta</a>,
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: <a onClick={signOutAccount}>Sair</a>,
            key: '2',
        },
    ];

    return (
        <div>
            <div className="flex flex-row items-end justify-end space-x-4">
                <div>
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <Avatar size={40} style={{ backgroundColor: '#5e49e7' }}>
                            <a className="cursor-grab">
                                {user?.username[0]}
                            </a>
                        </Avatar>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;