import { Category } from "../../../types/categories";
import { api } from "../../api";

export const GetCategories = async (): Promise<Category[] | undefined> => {
    const response = await api.get('/categories');
    const result: Category[] = response.data;
    
    return result;
}