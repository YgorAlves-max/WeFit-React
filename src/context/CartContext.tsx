import React, { createContext, useContext, useState } from "react";
import { Product } from "../shared/interfaces/products";

export interface CartContextProps {
    products: Product[],
    mProducts: Product[],
    addProduct: (param: Product) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeProduct: (productId: number) => void;
}
export interface CartProviderProps {
    children: React.ReactNode
}
export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [nProducts] = useState<Array<Product>>([
        {
            id: 1,
            title: "Viúva Negra",
            price: 9.99,
            image: "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png",
            quantity: 0 // Inicializa a quantidade como 0 para cada produto
        },
        {
            id: 2,
            title: "Shang-chi",
            price: 30.99,
            image: "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png",
            quantity: 0 // Inicializa a quantidade como 0 para cada produto
        },
        {
            id: 3,
            title: "Homem Aranha",
            price: 29.9,
            image: "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png",
            quantity: 0 // Inicializa a quantidade como 0 para cada produto
        }])

    const [mProducts, setMProducts] = useState<Array<Product>>([])

    function addProduct(newProduct: Product) {
        const existingProduct = mProducts.find(product => product.id === newProduct.id);
        if (existingProduct) {
            increaseQuantity(newProduct.id);
        } else {
            setMProducts([...mProducts, { ...newProduct, quantity: 1 }]);
        }
    }

    function increaseQuantity(productId: number) {
        const updatedProducts = mProducts.map(product =>
            product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        );
        setMProducts(updatedProducts);
    }

    function decreaseQuantity(productId: number) {
        const updatedProducts = mProducts.map(product =>
            product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
        );
        setMProducts(updatedProducts);
    }

    function removeProduct(productId: number) {
        const updatedProducts = mProducts.filter(product => product.id !== productId);
        setMProducts(updatedProducts);
    }

    return (
        <CartContext.Provider value={{
            products: nProducts,
            mProducts: mProducts,
            addProduct: addProduct,
            increaseQuantity: increaseQuantity,
            decreaseQuantity: decreaseQuantity,
            removeProduct: removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
};
export function useNewProducts() {
    const context = useContext(CartContext);
    return context;
}
