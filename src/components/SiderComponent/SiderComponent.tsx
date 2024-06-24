import { AreaChartOutlined, HomeOutlined, ProductOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

const SiderComponent = () => {
    const [current, setCurrent] = useState('/inicio');
    const navigate = useNavigate();

    const sideMenuStyle = {
        borderRadius: "16px",
        boxShadow: "2px 2px 4px 0px #bcbcbc"
    };

    const items: MenuItem[] = [
        {
            label: 'Início',
            key: '/inicio',
            icon: <HomeOutlined />
        },
        {
            label: 'Cadastro',
            key: '/cadastro',
            icon: <ProductOutlined />,
            children: [
                {
                    label: 'Produtos',
                    key: '/produtos'
                },
                {
                    label: 'Categorias',
                    key: '/categorias'
                }
            ]
        },
        {
            label: 'Loja',
            key: 'loja',
            icon: <ShoppingCartOutlined />,
            children: [
                {
                    label: 'Pedidos',
                    key: '/pedidos'
                },
                {
                    label: 'Entregas',
                    key: '/entregas'
                }
            ]
        },
        {
            label: 'Usuários',
            key: 'usuarios',
            icon: <UserOutlined />,
            children: [
                {
                    label: 'Contas',
                    key: '/contas'
                },
                {
                    label: 'Autorizações',
                    key: '/autorizacoes'
                }
            ]
        },
        {
            label: 'Dashboard',
            key: 'dashboard',
            icon: <AreaChartOutlined />,
            children: [
                {
                    label: 'Vendas',
                    key: '/vendas'
                },
                {
                    label: 'Prospecção de Clientes',
                    key: '/prospeccaoclientes'
                }
            ]
        },
    ]

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        navigate(e.key);
    };

    return (
        <div className="flex flex-col" style={sideMenuStyle}>
            <div className="flex flex-col my-5 items-center">
                <img src="/src/assets/images/winglyShopLogoColor.png" width={50} height={50} className="m-0" />
                <div>
                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0" style={{ color: '#5e49e7' }}>
                        Wingly Shop
                    </h2>
                </div>
            </div>
            <div>
                <Menu className="min-h-screen" onClick={onClick} selectedKeys={[current]} mode="inline" items={items} defaultSelectedKeys={['/inicio']}/>
            </div>
        </div>
    );
};

export default SiderComponent;