import { Product, ProductRegistration } from "../../../types";
import { api } from "../../api";

export const GetProducts = async (): Promise<Product[] | undefined> => {
    const response = await api.get('/products');
    const result: Product[] = response.data;

    return result;
}

export const CreateProduct = async (productRegistration: ProductRegistration): Promise<boolean | undefined> => {
    const response = await api.post('/products/create', { productRegistration });
    const result: boolean = response.data;

    return result;
}