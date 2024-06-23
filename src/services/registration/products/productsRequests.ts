import { Product } from "../../../types";
import { api } from "../../api";

export const GetProducts = async (): Promise<Product[] | undefined> => {
    const response = await api.get('/products');
    const result: Product[] = response.data;

    return result;
}