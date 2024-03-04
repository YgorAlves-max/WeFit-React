import { Product } from '../../shared/interfaces/products';

export const getProducts = async (): Promise<Product[]> => {
    const dev = "http://localhost:3001";
    const prod = "https://json-wefit.vercel.app";
    try {
        const response = await fetch(`${dev + "/products"}`);
        if (!response.ok) {
            throw new Error('Erro ao obter os produtos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        throw error;
    }
};
