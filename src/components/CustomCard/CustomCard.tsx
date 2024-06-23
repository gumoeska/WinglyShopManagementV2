import { Card } from "antd";

interface CustomCardProps {
    children: JSX.Element
}

const CustomCard = ({ children }: CustomCardProps) => {
    const cardStyle = {
        borderRadius: "16px",
        marginRight: "24px",
        boxShadow: "2px 2px 4px 0px #bcbcbc"
    };

    return (
        <Card style={cardStyle}>
            {children}
        </Card>
    );
}

export default CustomCard;