import useStore from "../hooks/useStore";
import { observer } from "mobx-react";


const Cart = observer(() => {

    let [cart] = useStore('cart')

    return (<>
        <div>cnt: {cart.totalCnt}</div>
        <div>totalPrice: {cart.totalPrice}</div>
    </>);
})

export default Cart;