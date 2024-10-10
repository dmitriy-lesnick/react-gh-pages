import { useParams } from "react-router-dom";
import useStore from "../hooks/useStore";
import { observer } from "mobx-react";

const ProductPage = observer(() => {
    let { id } = useParams()
    let [products] = useStore('products')
    let product = products.one(+id)

    return (<>
        <h1>{product.title}</h1>
        <span><b>{product.price}</b></span>
    </>);
})

export default ProductPage;