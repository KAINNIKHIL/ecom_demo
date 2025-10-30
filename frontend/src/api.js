import axios from 'axios'


const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000'


const client = axios.create({ baseURL: API_BASE, headers: { 'Content-Type': 'application/json' } })


export async function getProducts(){
const res = await client.get('/api/products')
return res.data
}


export async function getCart(){
const res = await client.get('/api/cart')
return res.data
}


export async function addToCart(productId, qty = 1){
const res = await client.post('/api/cart', { productId, qty })
return res.data
}


export async function removeFromCart(cartId){
const res = await client.delete(`/api/cart/${cartId}`)
return res.data
}


export async function updateCartItem(cartId, qty){
const res = await client.patch(`/api/cart/${cartId}`, { qty })
return res.data
}


export async function checkout(name, email){
const res = await client.post('/api/cart/checkout', { name, email })
return res.data
}