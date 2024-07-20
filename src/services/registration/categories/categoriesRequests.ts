import { Category, CategoryRegistration } from "../../../types/categories";
import { api } from "../../api";

export const GetCategories = async (): Promise<Category[] | undefined> => {
    const response = await api.get('/categories');
    const result: Category[] = response.data;
    
    return result;
}

export const CreateCategory = async (categoryRegistration: CategoryRegistration): Promise<boolean | undefined> => {
    const response = await api.post('/categories/create', { 
        Code: categoryRegistration.code,
        Description: categoryRegistration.description,
        IsActive: categoryRegistration.isActive
     });
    const result: boolean = response.data;

    return result;
}