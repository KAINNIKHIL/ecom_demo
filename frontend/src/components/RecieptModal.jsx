import React from 'react'


export default function ReceiptModal({ receipt, onClose }){
if(!receipt) return null
return (
<div className="fixed inset-0 z-70 flex items-center justify-center">
<div className="absolute inset-0 bg-black/40" onClick={onClose} />
<div className="bg-white p-6 rounded shadow w-full max-w-sm z-10">
<h3 className="text-lg font-semibold">Receipt</h3>
<p className="mt-2">Total: <strong>₹{receipt.total.toFixed(2)}</strong></p>
<p className="text-sm text-gray-600">Time: {new Date(receipt.timestamp).toLocaleString()}</p>
<div className="flex justify-end mt-4">
<button onClick={onClose} className="px-4 py-2 rounded bg-indigo-600 text-white">Close</button>
</div>
</div>
</div>
)
}