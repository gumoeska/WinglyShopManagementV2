import { Avatar, Button, Dropdown, MenuProps, Space } from "antd";
import useSession from "../../hooks/useSession";
import { DownOutlined } from "@ant-design/icons";

const HeaderComponent = () => {
    const { user, signOut } = useSession();

    const signOutAccount = () => {
        signOut();
    }

    const items: MenuProps['items'] = [
        {
            label: <a href="">Minha Conta</a>,
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