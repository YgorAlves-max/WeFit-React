import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../shared/interfaces/products";
import { getProducts } from "../api";

export interface CartContextProps {
    products: Product[],
    mProducts: Product[],
    loading: boolean,
    finishBuy: boolean,
    clearCart: () => void,
    setFinishBuy: (param: boolean) => void,
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
    const [nProducts, setProducts] = useState<Array<Product>>([])
    const [mProducts, setMProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [finishBuy, setfinishBuy] = useState<boolean>(false);
    useEffect(() => {
        const dataProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
                setLoading(false)
            } catch (error) {
                console.error('Erro ao obter os produtos:', error);
                setLoading(false);
            }
        }
        dataProducts();
        // return ()=>{}
    }, [])

    function addProducts(newProduct: Product) {
        const existingProductIndex = mProducts.findIndex(product => product.id === newProduct.id);
        if (existingProductIndex !== -1) {
            const updatedProducts = [...mProducts];
            updatedProducts[existingProductIndex].quantity += 1; // Atualiza a quantidade se o produto já estiver no carrinho
            setMProducts(updatedProducts);
        } else {
            setMProducts([...mProducts, { ...newProduct, quantity: 1 }]); // Adiciona o produto com a quantidade 1 se for novo no carrinho
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
    function setFinishBuy(param: boolean) {
        setfinishBuy(param);
    }
    function clearCart() {
        setMProducts([]);
    }
    return (
        <CartContext.Provider value={{
            products: nProducts,
            mProducts: mProducts,
            loading: loading,
            finishBuy: finishBuy,
            setFinishBuy: setFinishBuy,
            clearCart: clearCart,
            addProduct: addProducts,
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
