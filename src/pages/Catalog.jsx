import { observer } from "mobx-react";
import ProductCard from "../components/ProductCard";
import useStore from "../hooks/useStore";



const Catalog = observer(() => {
    let [products] = useStore('products')

    return (<>
        <div className="row">
            {products.products.map(
                item => <div className="col col-3" key={item.id}><ProductCard item={item} /></div>
            )}
        </div>

    </>);
})

export default Catalog;