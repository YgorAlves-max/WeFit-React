import plusIcon from "../../../assets/icons/icon-plus.svg";
import subIcon from "../../../assets/icons/icon-sub.svg";
import trashIcon from "../../../assets/icons/icon-trash.svg";
import { useNewProducts } from "../../../context/CartContext";
import UIDefaultButton from '../../../shared/components/UIDefaultButton';
import UILineDivision from "../../../shared/components/UILineDivision";
import { formatPrice } from "../../../shared/interfaces/formatPrice";
import * as S from '../styles';

const UIItemsMobileCart = () => {
    const { mProducts, increaseQuantity, decreaseQuantity, removeProduct, setFinishBuy, clearCart } = useNewProducts();

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
            <div >

                {mProducts.map((product) => (
                    <><S.MContentWrapper key={product.id}>
                        <S.MImgContent src={product.image} />
                        <S.MContentCart>
                            <S.MContentTitle>
                                <S.MTitleText>{product.title}</S.MTitleText>
                                <S.MValueText>{formatPrice(product.price)}</S.MValueText>
                                <img src={trashIcon} alt="" onClick={() => handleRemoveProduct(product.id)} />
                            </S.MContentTitle>
                            <S.MContentWrapper>
                                <S.DivAddInput>
                                    <img src={subIcon} alt="" onClick={() => handleDecreaseQuantity(product.id)} />
                                    <S.StyledInput disabled type="text" value={product.quantity} readOnly />
                                    <img src={plusIcon} alt="" onClick={() => handleIncreaseQuantity(product.id)} />
                                </S.DivAddInput>
                                <S.MContentPrice>
                                    <S.MSubTitleText>SUBTOTAL</S.MSubTitleText>
                                    <S.MValueText>
                                        {formatPrice(product.price * product.quantity)}
                                    </S.MValueText>
                                </S.MContentPrice>
                            </S.MContentWrapper>
                        </S.MContentCart>
                    </S.MContentWrapper>
                    </>
                ))
                }
            </div>
            <div>
                <UILineDivision maxwidth={905} color={"999999"} height={1} mbottom={21} mtop={21} />
                <S.MContentTotalWrapper>
                    <S.MSubTitleText>TOTAL</S.MSubTitleText>
                    <S.MTotalValueText> {formatPrice(mProducts.reduce((total, product) => total + (product.price * product.quantity), 0))}</S.MTotalValueText>
                </S.MContentTotalWrapper>
                <UIDefaultButton onClick={handleFinishPurchase} widthVal={311} fontSize={14} label={"FINALIZAR PEDIDO"} iconSrc={null} qtdItem={null} />
            </div>
        </>
    );

}

export default UIItemsMobileCart;

