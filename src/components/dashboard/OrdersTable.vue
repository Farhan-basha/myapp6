<template>
  <div class="overflow-x-auto">
    <table class="w-full text-sm">
      <thead class="text-left text-xs text-gray-500 border-b">
        <tr>
          <th class="py-3">Order</th>
          <th class="py-3">Customer</th>
          <th class="py-3">Items</th>
          <th class="py-3">Total</th>
          <th class="py-3">Date</th>
          <th class="py-3">Status</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="o in orders" :key="o.id">
          <td class="py-3 font-medium">{{ o.id }}</td>
          <td class="py-3">{{ o.customer }}</td>
          <td class="py-3">{{ o.items }}</td>
          <td class="py-3 font-semibold">{{ formatCurrency(o.total) }}</td>
          <td class="py-3">{{ o.date }}</td>
          <td class="py-3">
            <span :class="statusClass(o.status) + ' px-3 py-1 rounded-full text-xs font-medium'">{{ o.status }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({ orders: Array })

function formatCurrency(n) {
  return '₹ ' + Number(n).toLocaleString(undefined, { minimumFractionDigits: 2 })
}
function statusClass(s) {
  if (s === 'Delivered') return 'bg-green-100 text-green-800'
  if (s === 'Preparing') return 'bg-yellow-100 text-yellow-800'
  if (s === 'Pending') return 'bg-amber-100 text-amber-800'
  if (s === 'Cancelled') return 'bg-rose-100 text-rose-800'
  return 'bg-gray-100 text-gray-800'
}
</script>
