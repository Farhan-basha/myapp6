<template>
  <div class="p-6">
    <h1 class="text-2xl font-semibold mb-4">Users</h1>

    <table class="w-full border">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-3">Name</th>
          <th class="p-3">Email</th>
          <th class="p-3">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.email" class="border-t">
          <td class="p-3">{{ user.name }}</td>
          <td class="p-3">{{ user.email }}</td>
          <td class="p-3">
            <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded">
              {{ user.role }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const users = [
  { name: "Farhan", email: "farhan@mail.com", role: "ADMIN" },
  { name: "Rahul", email: "rahul@mail.com", role: "USER" }
]
</script>
