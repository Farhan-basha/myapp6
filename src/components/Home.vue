<template>
    <section class="relative">
        <img src="/images/image 110.png" alt="hero" class="w-full h-96 object-cover hidden lg:block" />
        <!-- <img src="../assets/Hero (2).png" alt="hero small" class="w-full h-72 object-cover lg:hidden" /> -->


        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="text-center max-w-3xl px-6">
                <h1 class="font-serifDisplay text-6xl lg:text-8xl text-gray-800 leading-tight">Best food for<br />your
                    taste</h1>
                <p class="mt-4 text-gray-600">Discover delectable cuisine and unforgettable moments in our welcoming,
                    culinary haven.</p>
                <div class="mt-8 flex gap-6 justify-center pointer-events-auto">
                    <button class="bg-brandRed text-white px-6 py-3 rounded-full">Book A Table</button>
                    <button class="border border-gray-800 px-6 py-3 rounded-full">Explore Menu</button>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
// purely presentational
</script>


<style scoped>
.font-serifDisplay {
    font-family: 'Playfair Display', serif;
}

</style>