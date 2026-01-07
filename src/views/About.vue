<template>
  <section class="max-w-7xl mx-auto px-6 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <!-- Image column -->
      <div class="relative">
        <img src="/images/image 111.png" alt="dish" class="w-full h-[520px] md:h-[560px] object-cover rounded-lg shadow-lg" />

        <!-- Contact card overlay -->
        <div
          class="absolute left-6 bottom-6 md:left-12 md:bottom-12 bg-gray-800/95 text-gray-100 p-6 md:p-8 rounded-2xl w-72 md:w-96 shadow-xl"
          role="region"
          aria-label="Contact card"
        >
          <h3 class="text-xl md:text-2xl font-semibold mb-4">Come and visit us</h3>

          <ul class="space-y-4 text-sm md:text-base">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-gray-300 mt-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M3 5v4a2 2 0 0 0 2 2h3l2 3 3-3h4a2 2 0 0 0 2-2V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>+91 1234567890</span>
            </li>

            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-gray-300 mt-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16v16H4z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>yummy@dineperks</span>
            </li>

            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-gray-300 mt-0.5" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="10" r="2" fill="currentColor" class="text-gray-300"/>
              </svg>
              <span class="leading-tight">Chennai, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Text column -->
      <div class="px-2 md:px-6">
        <h2 class="font-serifDisplay text-4xl md:text-6xl text-gray-800 leading-tight mb-6">We provide healthy food for your family.</h2>

        <p class="text-gray-600 max-w-xl mb-6">
          Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service,
          and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a
          global palate.
        </p>

        <p class="text-gray-600 max-w-xl">
          At place, we believe that dining is not just about food, but also about the overall experience. Our staff,
          renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// purely presentational — no script required right now
</script>

<style scoped>
/* Make sure you have Playfair Display available in your project; this is optional */
.font-serifDisplay { font-family: 'Playfair Display', serif; }
</style>
