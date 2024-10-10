import http from "./http"


export async function load(token) {
    let response = await http.get(`/cart/load.php?token=${token}`)
    return response.data
}

export async function add(token, id) {
    let result = await http.get(`/cart/add.php?token=${token}&id=${id}`)
    return result.data
}

export async function remove(token, id) {
    let result = await http.get(`/cart/remove.php?token=${token}&id=${id}`)
    return result.data
}

export async function change(token, id, cnt) {
    let result = await http.get(`/cart/change.php?token=${token}&id=${id}&cnt=${cnt}`)
    return result.data
}