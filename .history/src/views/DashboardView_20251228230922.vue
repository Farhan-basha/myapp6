<template>
    <div class="min-h-screen bg-gray-50 flex">
    <Sidebar class="hidden lg:block" />
    <div class="flex-1 flex flex-col">
      <Topbar />

      <main class="p-6 md:p-8 lg:p-10">
        <!-- Top stats -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Monthly Revenue" :value="formatCurrency(stats.revenue)" icon="₹">
            <template #trend>
              <MiniTrend :values="stats.revenueTrend" />
            </template>
          </StatCard>

          <StatCard title="Orders (month)" :value="stats.orders" icon="🧾">
            <template #trend>
              <MiniTrend :values="stats.ordersTrend" color="green" />
            </template>
          </StatCard>

          <StatCard title="Active Users" :value="stats.activeUsers" icon="👥">
            <template #trend>
              <MiniTrend :values="stats.usersTrend" color="amber" />
            </template>
          </StatCard>

          <StatCard title="Rewards Redeemed" :value="stats.redeemed" icon="🎟️">
            <template #trend>
              <MiniTrend :values="stats.redeemedTrend" color="rose" />
            </template>
          </StatCard>
        </div>

        <!-- Middle: Orders table + Rewards summary -->
        <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2">
            <div class="bg-white shadow rounded-lg p-4">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-medium">Recent Orders</h3>
                <div class="flex items-center gap-2">
                  <select v-model="filterStatus" class="border rounded px-3 py-1 text-sm">
                    <option value="">All</option>
                    <option>Pending</option>
                    <option>Preparing</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                  <input v-model="search" placeholder="Search order or customer" class="border rounded px-3 py-1 text-sm" />
                </div>
              </div>

              <OrdersTable :orders="filteredOrders" />
            </div>
          </div>

          <div>
            <div class="bg-white shadow rounded-lg p-4 mb-6">
              <h4 class="font-medium text-gray-700 mb-2">Rewards Summary</h4>
              <p class="text-sm text-gray-500">Points outstanding and recent redemptions</p>
              <div class="mt-4 space-y-3">
                <div class="flex items-center justify-between">
                  <div>
                    <div class="text-xs text-gray-500">Total Points</div>
                    <div class="text-xl font-semibold">{{ rewards.totalPoints }}</div>
                  </div>
                  <div class="text-sm text-gray-500">Members: {{ rewards.members }}</div>
                </div>

                <div class="bg-gray-100 p-3 rounded">
                  <div class="text-sm text-gray-600">Top reward redeemed</div>
                  <div class="font-medium mt-1">{{ rewards.topReward }}</div>
                </div>
              </div>
            </div>

            <div class="bg-white shadow rounded-lg p-4">
              <h4 class="font-medium text-gray-700 mb-2">Recent Activity</h4>
              <ul class="space-y-3 text-sm text-gray-600">
                <li v-for="(a,i) in recentActivity" :key="i">
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">{{ a.icon }}</div>
                    <div>
                      <div class="font-medium text-gray-800">{{ a.title }}</div>
                      <div class="text-xs text-gray-500">{{ a.time }}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Footer small -->
        <div class="mt-8 text-center text-xs text-gray-400">
          © {{ new Date().getFullYear() }} DinePerks Dashboard
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Sidebar from '@/components/dashboard/Sidebar.vue'
import Topbar from '@/components/dashboard/Topbar.vue'
import StatCard from '@/components/dashboard/StatCard.vue'
import MiniTrend from '@/components/dashboard/MiniTrend.vue'
import OrdersTable from '@/components/dashboard/OrdersTable.vue'

// sample/mock data
const stats = {
  revenue: 12540.75,
  revenueTrend: [800, 1100, 1250, 1000, 1400, 1700, 1500],
  orders: 324,
  ordersTrend: [30, 40, 45, 35, 50, 60, 64],
  activeUsers: 1210,
  usersTrend: [1000, 1020, 1100, 1150, 1170, 1200, 1210],
  redeemed: 78,
  redeemedTrend: [5, 8, 6, 7, 10, 12, 30]
}

const rewards = {
  totalPoints: 12450,
  members: 421,
  topReward: '50% off coupon'
}

const orders = ref([
  { id: 'ORD-1001', customer: 'Alice', date: '2025-11-22', items: 3, total: 29.5, status: 'Delivered' },
  { id: 'ORD-1002', customer: 'Bob', date: '2025-11-23', items: 1, total: 9.99, status: 'Preparing' },
  { id: 'ORD-1003', customer: 'Carlos', date: '2025-11-23', items: 2, total: 21.75, status: 'Pending' },
  { id: 'ORD-1004', customer: 'Dana', date: '2025-11-23', items: 4, total: 45.5, status: 'Delivered' },
  { id: 'ORD-1005', customer: 'Eve', date: '2025-11-24', items: 2, total: 18.25, status: 'Cancelled' }
])

const recentActivity = [
  { icon: '🎉', title: 'New reward created: 25% off', time: '2 hours ago' },
  { icon: '🔔', title: 'Order ORD-1004 marked as Delivered', time: '4 hours ago' },
  { icon: '👤', title: 'New user signed up: frank@example.com', time: '1 day ago' }
]

const search = ref('')
const filterStatus = ref('')

const filteredOrders = computed(() =>
  orders.value.filter(o => {
    const matchStatus = filterStatus.value ? o.status === filterStatus.value : true
    const q = search.value.trim().toLowerCase()
    const matchSearch = !q || o.id.toLowerCase().includes(q) || o.customer.toLowerCase().includes(q)
    return matchStatus && matchSearch
  })
)

function formatCurrency(n) {
  return '₹ ' + n.toLocaleString(undefined, { minimumFractionDigits: 2 })
}
</script>
