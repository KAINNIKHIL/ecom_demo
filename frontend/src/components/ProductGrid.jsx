import React from 'react'


export default function ProductGrid({ products = [], onAdd }){
return (
<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{products.map(p => (
<div key={p._id} className="bg-white rounded-lg shadow p-4 flex flex-col">
<img src={p.image || 'https://via.placeholder.com/200'} alt={p.name} className="h-40 w-full object-contain mb-3" />
<h3 className="text-sm font-semibold">{p.name}</h3>
<p className="mt-2 font-medium">₹{p.price}</p>
<div className="mt-auto">
<button onClick={() => onAdd(p._id)} className="mt-3 w-full px-3 py-2 rounded bg-indigo-600 text-white">Add to cart</button>
</div>
</div>
))}
</section>
)
}