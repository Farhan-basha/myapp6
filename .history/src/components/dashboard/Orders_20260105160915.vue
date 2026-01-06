<template>
  <div class="p-6">
    <h1 class="text-2xl font-semibold mb-4">Orders</h1>

    <table class="w-full border rounded-lg">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-3 text-left">Order ID</th>
          <th class="p-3">Customer</th>
          <th class="p-3">Total</th>
          <th class="p-3">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id" class="border-t">
          <td class="p-3">{{ order.id }}</td>
          <td class="p-3">{{ order.customer }}</td>
          <td class="p-3">₹{{ order.total }}</td>
          <td class="p-3">
            <span class="px-3 py-1 rounded text-sm bg-green-100 text-green-700">
              {{ order.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const orders = [
  { id: "ORD-1001", customer: "Farhan", total: 450, status: "Delivered" },
  { id: "ORD-1002", customer: "Ali", total: 320, status: "Pending" }
]
</script>
