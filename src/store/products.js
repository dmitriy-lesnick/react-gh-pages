import { makeAutoObservable } from "mobx"


class Products {
    products = []

    constructor(rootStore, api) {
        makeAutoObservable(this)
        this.api = api
        this.rootStore = rootStore
    }

    get one() {
        return id => this.products.find(item => item.id === id)
    }

    load = async () => {
        this.products = await this.api.products.all()
    }


}

export default Products