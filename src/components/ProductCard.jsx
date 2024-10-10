import { Link } from "react-router-dom";
import useStore from "../hooks/useStore";
import { observer } from "mobx-react";

const ProductCard = observer(({ item }) => {
    let [cart] = useStore('cart')
    let isHas = cart.has(+item.id)
    let cnt = cart.cnt(+item.id)

    return (<>
        <h2>{item.title}</h2>
        <span>{item.price}</span>
        <Link to={`/catalog/${item.id}`}>read more</Link>
        <div>
            <button onClick={() => { cart.setCnt(item.id, ++cnt) }} type="button" className="btn btn-success" disabled={!isHas}>+</button>
            <span><b>{cnt}</b></span>
            <button onClick={() => { cart.setCnt(item.id, --cnt) }} type="button" className="btn btn-danger mx-1" disabled={!isHas}>-</button>
        </div>
        <button onClick={() => { cart.add(item.id) }} className="btn btn-success" type="button" disabled={isHas}>Add</button>
        <button onClick={() => { cart.remove(item.id) }} className="btn btn-danger mx-1" type="button" disabled={!isHas}>Remove</button>
    </>);
})

export default ProductCard;