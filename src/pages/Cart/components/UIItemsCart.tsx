import { useEffect, useState } from "react";
import plusIcon from "../../../assets/icons/icon-plus.svg";
import subIcon from "../../../assets/icons/icon-sub.svg";
import trashIcon from "../../../assets/icons/icon-trash.svg";
import { useNewProducts } from "../../../context/CartContext";
import UIDefaultButton from '../../../shared/components/UIDefaultButton';
import { formatPrice } from "../../../shared/interfaces/formatPrice";
import * as S from '../styles';
import UIItemsMobileCart from "./UIItemsMobileCart";
import UILineDivision from "../../../shared/components/UILineDivision";

const UIItemsCart = () => {
    const { mProducts, increaseQuantity, decreaseQuantity, removeProduct, setFinishBuy, clearCart } = useNewProducts();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleFinishPurchase = () => {
        setFinishBuy(true);
        clearCart();
    };
    const handleIncreaseQuantity = (productId: number) => {
        increaseQuantity(productId);
    };

    const handleDecreaseQuantity = (productId: number) => {
        decreaseQuantity(productId);
    };

    const handleRemoveProduct = (productId: number) => {
        removeProduct(productId);
    };

    return (
        <>
            <S.StyledCard >
                {isMobile ?
                    <>
                        <UIItemsMobileCart></UIItemsMobileCart>
                    </>

                    :
                    <>
                        {mProducts.map((product) => (
                            <S.TableContainer key={product.id} >
                                <S.TableRow>
                                    <S.TableHeader><S.TableT>PRODUTO</S.TableT></S.TableHeader>
                                    <S.TableHeader><S.TableT> QTD</S.TableT></S.TableHeader>
                                    <S.TableHeader><S.TableT>SUBTOTAL</S.TableT></S.TableHeader>
                                </S.TableRow>
                                <S.TableRow>
                                    <S.TableCell>
                                        <S.ImgContent src={product.image} />
                                        <S.DivTitleText><S.TitleText>{product.title}</S.TitleText><S.ValueText>{formatPrice(product.price)}</S.ValueText></S.DivTitleText>
                                    </S.TableCell>
                                    <S.TableCell>
                                        <S.DivAddInput>
                                            <img src={subIcon} alt="" onClick={() => handleDecreaseQuantity(product.id)} />
                                            <S.StyledInput disabled type="text" value={product.quantity} readOnly />
                                            <img src={plusIcon} alt="" onClick={() => handleIncreaseQuantity(product.id)} />
                                        </S.DivAddInput>
                                    </S.TableCell>
                                    <S.TableCell> <S.ValueText> {formatPrice(product.price * product.quantity)}</S.ValueText> </S.TableCell>
                                    <S.TableCell><img src={trashIcon} alt="" onClick={() => handleRemoveProduct(product.id)} /></S.TableCell>
                                </S.TableRow>
                                <UILineDivision maxwidth={905} color={"999999"} height={1} mbottom={21} mtop={21} />
                            </S.TableContainer>
                        ))
                        }
                        <S.TableTotalRow>
                            <UIDefaultButton onClick={handleFinishPurchase} widthVal={235.42} fontSize={14} label={"FINALIZAR PEDIDO"} iconSrc={null} qtdItem={null} />
                            <S.ContentTotalWrapper>
                                <S.SubTitleText>TOTAL</S.SubTitleText>
                                <S.TotalValueText> {formatPrice(mProducts.reduce((total, product) => total + (product.price * product.quantity), 0))}</S.TotalValueText>
                            </S.ContentTotalWrapper>
                        </S.TableTotalRow>

                    </>

                }
            </S.StyledCard >
        </>
    );

}

export default UIItemsCart;

