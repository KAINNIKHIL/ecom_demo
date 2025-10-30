import React, { useState } from 'react'


export default function CheckoutModal({ open, onClose, onSubmit, loading }){
const [name, setName] = useState('')
const [email, setEmail] = useState('')
if(!open) return null
return (
<div className="fixed inset-0 z-60 flex items-center justify-center">
<div className="absolute inset-0 bg-black/40" onClick={onClose} />
<div className="bg-white p-6 rounded shadow w-full max-w-md z-10">
<h3 className="text-lg font-semibold mb-2">Checkout</h3>
<label className="text-sm">Name</label>
<input value={name} onChange={(e)=>setName(e.target.value)} className="w-full border rounded px-3 py-2 mb-3" />
<label className="text-sm">Email</label>
<input value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border rounded px-3 py-2 mb-3" />
<div className="flex justify-end gap-2">
<button onClick={onClose} className="px-3 py-2 rounded border">Cancel</button>
<button onClick={() => onSubmit({ name, email })} disabled={loading} className="px-4 py-2 rounded bg-indigo-600 text-white">Pay</button>
</div>
</div>
</div>
)
}