
import { makeAutoObservable, runInAction } from "mobx"


class Cart {
    items = []
    token = null

    constructor(rootStore, api, localStorage) {
        makeAutoObservable(this)
        this.api = api
        this.rootStore = rootStore
        this.localStorage = localStorage
    }

    get totalCnt() {
        return this.items.length
    }

    get totalPrice() {
        return this.items.reduce((t, item) => t + this.rootStore.products.one(item.id).price * item.cnt, 0) ?? 0
    }

    get has() {
        return id => this.items.some(item => item.id == id)
    }

    get cnt() {
        return id => this.items.find(item => item.id == id)?.cnt ?? 0
    }

    load = async () => {
        let tokenKey = 'CART TOKEN'
        let { cart, needUpdate, token } = await this.api.cart.load(this.localStorage.getItem(tokenKey))

        if (needUpdate) {
            this.localStorage.setItem(tokenKey, token)
        }

        runInAction(() => {
            this.items = cart
            this.token = token
        })

    }

    add = async (id) => {
        let result = await this.api.cart.add(this.token, id)
        if (result) {
            runInAction(() => {
                this.items.push({ id, cnt: 1 })
            })
        }
    }

    remove = async (id) => {
        let result = await this.api.cart.remove(this.token, id)
        if (result) {
            runInAction(() => {
                this.items = this.items.filter(item => item.id != id)
            })
        }
    }

    setCnt = async (id, cnt) => {
        let result = await this.api.cart.change(this.token, id, cnt)
        if (result) {
            runInAction(() => {
                let item = this.items.find(item => item.id == id)
                item.cnt = cnt
            })
        }
    }



}

export default Cart