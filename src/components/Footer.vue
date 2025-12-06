<template>
  <footer class="bg-gray-700 text-gray-200">
    <div class="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Left: Brand, description, socials -->
      <div>
        <div class="flex items-center gap-3 mb-4">
          <img src="/src/assets/Mint Lemonade_files/logo.svg" alt="DinePerks" class="h-16 object-contain" />
          <h3 class="text-2xl font-serifDisplay text-white">Dine Perks</h3>
        </div>

        <p class="text-gray-300 max-w-sm mb-6">
          In the new era of technology, we look to the future with certainty and pride to build something meaningful for our company and customers.
        </p>

        <div class="flex gap-3">
          <button aria-label="twitter" class="w-9 h-9 rounded-full bg-red-700/90 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.92c-.63.28-1.31.47-2.02.56.73-.44 1.29-1.14 1.56-1.97-.69.41-1.45.7-2.26.86A3.9 3.9 0 0016.15 4c-2.18 0-3.95 1.77-3.95 3.95 0 .31.04.62.1.92C8.22 8.7 5.23 6.9 3.2 4.2c-.34.58-.53 1.25-.53 1.97 0 1.36.69 2.56 1.74 3.26-.64-.02-1.24-.2-1.77-.49v.05c0 1.9 1.35 3.48 3.14 3.84-.33.09-.68.14-1.04.14-.25 0-.49-.02-.73-.07.49 1.53 1.91 2.64 3.59 2.67A7.86 7.86 0 012 19.54 11.1 11.1 0 008.29 21c6.54 0 10.12-5.42 10.12-10.12 0-.15-.01-.29-.02-.43.7-.5 1.3-1.12 1.78-1.83-.64.28-1.31.46-2.01.55z"/></svg>
          </button>

          <button aria-label="facebook" class="w-9 h-9 rounded-full bg-red-700/90 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.2v-2.9h2.2V9.3c0-2.2 1.3-3.4 3.2-3.4.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.4l-.4 2.9h-2v7A10 10 0 0022 12z"/></svg>
          </button>

          <button aria-label="instagram" class="w-9 h-9 rounded-full bg-red-700/90 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.1A4.9 4.9 0 1016.9 13 4.9 4.9 0 0012 8.1zM18.5 7.1a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z"/></svg>
          </button>

          <button aria-label="github" class="w-9 h-9 rounded-full bg-red-700/90 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.2 2.9.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.6-1.7.1-3.6 0 0 1-.3 3.3 1.2A11.4 11.4 0 0112 6.8c1 0 2 .1 2.9.4 2.3-1.5 3.3-1.2 3.3-1.2.7 1.9.3 3.3.1 3.6.8.9 1.2 2 1.2 3.3 0 4.5-2.9 5.5-5.6 5.8.4.4.7 1 .7 2v2.9c0 .3.2.7.8.6A12 12 0 0012 .5z"/></svg>
          </button>
        </div>
      </div>

      <!-- Middle: two columns of links -->
      <div class="grid grid-cols-2 gap-8 text-gray-200">
        <div>
          <h4 class="font-semibold mb-4">Pages</h4>
          <ul class="space-y-3 text-sm text-gray-300">
            <li><a class="hover:text-white" href="#">Home</a></li>
            <li><a class="hover:text-white" href="#">About</a></li>
            <li><a class="hover:text-white" href="#">Menu</a></li>
            <li><a class="hover:text-white" href="#">Pricing</a></li>
            <li><a class="hover:text-white" href="#">Blog</a></li>
            <li><a class="hover:text-white" href="#">Contact</a></li>
            <li><a class="hover:text-white" href="#">Delivery</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Utility Pages</h4>
          <ul class="space-y-3 text-sm text-gray-300">
            <li><a class="hover:text-white" href="#">Start Here</a></li>
            <li><a class="hover:text-white" href="#">Styleguide</a></li>
            <li><a class="hover:text-white" href="#">Password Protected</a></li>
            <li><a class="hover:text-white" href="#">404 Not Found</a></li>
            <li><a class="hover:text-white" href="#">Licenses</a></li>
            <li><a class="hover:text-white" href="#">Changelog</a></li>
            <li><a class="hover:text-white" href="#">View More</a></li>
          </ul>
        </div>
      </div>

      <!-- Right: Instagram grid -->
      <div class="md:col-span-1">
        <h4 class="font-semibold mb-4">Follow Us On Instagram</h4>
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-lg overflow-hidden h-28 bg-gray-600">
            <img src="/images/fried egg.jpg" alt="insta1" class="w-full h-full object-cover"/>
          </div>
          <div class="rounded-lg overflow-hidden h-28 bg-gray-600">
            <img src="/images/hawaiian pizza.jpg" alt="insta2" class="w-full h-full object-cover"/>
          </div>
          <div class="rounded-lg overflow-hidden h-28 bg-gray-600">
            <img src="/images/Cheese Burger.webp" alt="insta3" class="w-full h-full object-cover"/>
          </div>
          <div class="rounded-lg overflow-hidden h-28 bg-gray-600">
            <img src="/images/Classic Waffles.webp" alt="insta4" class="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-600">
      <div class="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-300">Copyright © 2025 DinePerks Developer. All Rights Reserved</div>
    </div>
  </footer>
</template>

<script setup>
// Presentational — no script required
</script>

<style scoped>
.font-serifDisplay { font-family: 'Playfair Display', serif; }
</style>
