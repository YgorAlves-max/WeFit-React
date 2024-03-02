import iconShoppingCart from "../../../assets/icons/icon-shopping-cart.svg";
import { useNewProducts } from "../../../context/CartContext";
import StyledDefaultButton from '../../../shared/components/StyledDefaultButton';
import { Product } from '../../../shared/interfaces/products';
import * as S from '../styles';

interface ItemsCardsComponentProps {
    product: Product;
}

const ItemsCardsComponent = ({ product }: ItemsCardsComponentProps) => {
    const { addProduct, mProducts } = useNewProducts()
    const handleAddToCart = () => {
        addProduct(product)
    };
    const cartProduct = mProducts.find(p => p.id === product.id);
    const cartQuantity = cartProduct ? cartProduct.quantity : 0;



    const formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(product.price);

    return (
        <S.HomeCard>
            <S.HomeCardContent>
                <S.HomeImgContent>
                    <S.HomeImgCard src={product.image} alt={product.title} />
                    <S.HomeCardTitle>{product.title}</S.HomeCardTitle>
                </S.HomeImgContent>
                <S.HomeFomatValue>{formattedValue}</S.HomeFomatValue>
            </S.HomeCardContent>
            <StyledDefaultButton
                iconSrc={iconShoppingCart}
                qtdItem={cartQuantity}
                onClick={handleAddToCart}
                widthVal={287.33}
                fontSize={12}
                label={"ADICIONAR AO CARRINHO"}
            />
        </S.HomeCard>
    );
}

export default ItemsCardsComponent;
