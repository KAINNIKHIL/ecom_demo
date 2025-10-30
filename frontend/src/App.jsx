import React, { useEffect, useState } from 'react'
import { getProducts, getCart, addToCart, removeFromCart, updateCartItem, checkout } from './api'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import CheckoutModal from './components/CheckoutModal'
import ReceiptModal from './components/RecieptModal'


export default function App(){
const [products, setProducts] = useState([])
const [cart, setCart] = useState({ items: [], total: 0 })
const [isCartOpen, setCartOpen] = useState(false)
const [isCheckoutOpen, setCheckoutOpen] = useState(false)
const [receipt, setReceipt] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(()=>{ loadProducts(); loadCart(); }, [])


async function loadProducts(){
try{ 
    const p = await getProducts(); 
    setProducts(p); 
} catch(err){ 
    console.error(err); 
    setError('Failed to load products') 
}
}


async function loadCart(){
try{ 
    const c = await getCart(); 
    setCart({ items: c.items || c, total: c.total ?? 0 }); 
}catch(err){ 
    console.error(err); 
    setError('Failed to load cart') 
}
}


async function handleAdd(productId){
setLoading(true)
try{ 
    await addToCart(productId, 1); 
    await loadCart(); 
    setCartOpen(false); 
} catch(err){ 
    alert(err.response?.data?.message || 'Add failed') }
    setLoading(false)
}


async function handleRemove(id){
setLoading(true)
try{ 
    await removeFromCart(id); 
    await loadCart(); 
} catch(err){ 
    alert(err.response?.data?.message || 'Remove failed') }
    setLoading(false)
}


async function handleUpdate(id, qty){
if(qty < 1) return
setLoading(true)
try{ 
    await updateCartItem(id, qty); 
    await loadCart(); 
} catch(err){ 
    alert(err.response?.data?.message || 'Update failed') }
    setLoading(false)
}


async function handleCheckoutSubmit({ name, email }){
if(cart.items.length === 0){ 
    alert('Cart is empty'); 
    return 
}
setLoading(true)
try{
const res = await checkout(name, email)
setReceipt(res)
setCheckoutOpen(false)
await loadCart()
}catch(err){ 
    alert(err.response?.data?.message || 'Checkout failed') }
    setLoading(false)
}


return (
<div className="min-h-screen bg-gray-50">
<header className="bg-white shadow">
<div className="container mx-auto px-4 py-4 flex justify-between items-center">
<h1 className="text-2xl font-bold">Vibe Commerce</h1>
<div>
<button onClick={()=>setCartOpen(true)} className="px-3 py-2 rounded border">Cart ({cart.items.length})</button>
</div>
</div>
</header>


<main className="container mx-auto px-4 py-6">
{error && <div className="mb-4 text-red-600">{error}</div>}
<ProductGrid products={products} onAdd={handleAdd} />
</main>


<CartDrawer
open={isCartOpen}
onClose={()=>setCartOpen(false)}
items={cart.items}
total={cart.total}
onRemove={handleRemove}
onUpdate={handleUpdate}
onCheckout={()=>{ setCheckoutOpen(true); setCartOpen(false) }}
loading={loading}
/>


<CheckoutModal open={isCheckoutOpen} onClose={()=>setCheckoutOpen(false)} onSubmit={handleCheckoutSubmit} loading={loading} />
<ReceiptModal receipt={receipt} onClose={()=>setReceipt(null)} />


<footer className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">Built for Vibe Commerce assignment</footer>
</div>
)
}