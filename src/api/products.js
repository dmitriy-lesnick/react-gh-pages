import http from "./http";


export async function all() {
    let response = await http.get('/products/index.php')
    return response.data
}