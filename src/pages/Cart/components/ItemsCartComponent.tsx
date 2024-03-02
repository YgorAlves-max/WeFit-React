import plusIcon from "../../../assets/icons/icon-plus.svg";
import subIcon from "../../../assets/icons/icon-sub.svg";
import trashIcon from "../../../assets/icons/icon-trash.svg";
import { useNewProducts } from "../../../context/CartContext";
import StyledDefaultButton from '../../../shared/components/StyledDefaultButton';
import * as S from '../styles';

const ItemsCartComponent = () => {
    const { mProducts, increaseQuantity, decreaseQuantity, removeProduct, setFinishBuy } = useNewProducts();
    const handleFinishPurchase = () => {
        setFinishBuy(true);
        mProducts.forEach((product) => {
            removeProduct(product.id);
        });
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
            {mProducts.map((product) => (
                <S.StyledCard key={product.id}>
                    <S.TableContainer>
                        <S.TableRow>
                            <S.TableHeader><S.TableT>PRODUTO</S.TableT></S.TableHeader>
                            <S.TableHeader><S.TableT> QTD</S.TableT></S.TableHeader>
                            <S.TableHeader><S.TableT>SUBTOTAL</S.TableT></S.TableHeader>
                        </S.TableRow>
                        <S.TableRow>
                            <S.TableCell>
                                <S.ImgContent src={product.image} />
                                <S.DivTitleText><S.TitleText>{product.title}</S.TitleText><S.ValueText>R$ {product.price}</S.ValueText></S.DivTitleText>
                            </S.TableCell>
                            <S.TableCell>
                                <S.DivAddInput>
                                    <img src={subIcon} alt="" onClick={() => handleDecreaseQuantity(product.id)} />
                                    <S.StyledInput type="text" value={product.quantity} readOnly />
                                    <img src={plusIcon} alt="" onClick={() => handleIncreaseQuantity(product.id)} />
                                </S.DivAddInput>
                            </S.TableCell>
                            <S.TableCell> <S.ValueText>R$ {product.price * product.quantity}</S.ValueText> </S.TableCell>
                            <S.TableCell><img src={trashIcon} alt="" onClick={() => handleRemoveProduct(product.id)} /></S.TableCell>
                        </S.TableRow>
                        <S.LineDivision />
                        <S.TableRow>
                            <StyledDefaultButton onClick={handleFinishPurchase} widthVal={235.42} fontSize={14} label={"FINALIZAR PEDIDO"} iconSrc={null} qtdItem={null}></StyledDefaultButton>
                            <S.ContentTotalWrapper>
                                <S.SubTitleText>TOTAL</S.SubTitleText>
                                <S.TotalValueText>R$ {mProducts.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2)}</S.TotalValueText>
                            </S.ContentTotalWrapper>
                        </S.TableRow>
                    </S.TableContainer>
                </S.StyledCard>
            ))
            }
        </>
    );

}

export default ItemsCartComponent;

