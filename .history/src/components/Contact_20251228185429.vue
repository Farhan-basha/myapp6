<template>
  <section class="min-h-screen bg-white">
    <div class="max-w-4xl mx-auto px-6 pt-16">
      <h1 class="font-serifDisplay text-5xl md:text-7xl text-center text-gray-800">Contact Us</h1>
      <p class="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
        We consider all the drivers of change gives you the components you need to change to create a truly happens.
      </p>

      <!-- Form card -->
      <div class="mt-12 bg-white rounded-xl shadow-2xl p-6 md:p-10">
        <form @submit.prevent="onSubmit" novalidate>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input v-model="form.name" type="text" placeholder="Enter your name"
                     class="w-full border rounded-full px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-emerald-200"
              />
              <p v-if="errors.name" class="text-xs text-rose-600 mt-1">{{ errors.name }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input v-model="form.email" type="email" placeholder="Enter email address"
                     class="w-full border rounded-full px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-emerald-200"
              />
              <p v-if="errors.email" class="text-xs text-rose-600 mt-1">{{ errors.email }}</p>
            </div>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input v-model="form.subject" type="text" placeholder="Write a subject"
                   class="w-full border rounded-full px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-emerald-200"
            />
            <p v-if="errors.subject" class="text-xs text-rose-600 mt-1">{{ errors.subject }}</p>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea v-model="form.message" rows="6" placeholder="Write your message"
                      class="w-full border rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-emerald-200"></textarea>
            <p v-if="errors.message" class="text-xs text-rose-600 mt-1">{{ errors.message }}</p>
          </div>

          <div class="mt-6">
            <button :disabled="submitting" type="submit"
                    class="w-full bg-brandRed text-white rounded-full px-6 py-3 font-medium hover:opacity-95 disabled:opacity-60">
              <span v-if="!submitting">Send</span>
              <span v-else>Sending...</span>
            </button>
          </div>

          <div v-if="success" class="mt-4 text-sm text-green-700">
            ✅ Message sent successfully. We'll get back to you soon.
          </div>
          <div v-if="submitError" class="mt-4 text-sm text-rose-600">
            ⚠️ {{ submitError }}
          </div>
        </form>
      </div>

      <!-- Contact details area -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
        <div>
          <h4 class="font-semibold mb-3">Call Us:</h4>
          <div class="text-brandRed font-semibold text-lg">+91 1234567890</div>
        </div>

        <div>
          <h4 class="font-semibold mb-3">Hours:</h4>
          <div class="text-gray-600">
            Mon–Fri: 11am – 8pm<br/>
            Sat, Sun: 9am – 10pm
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-3">Our Location:</h4>
          <div class="text-gray-600">
            Chennai<br/>
            Tamil Nadu<br/>
            India
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({ name: '', email: '', subject: '', message: '' })
const submitting = ref(false)
const success = ref(false)
const submitError = ref('')

// simple email regex
function isEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
}

function validate() {
  errors.name = form.name.trim() ? '' : 'Name is required.'
  errors.email = form.email.trim() ? (isEmail(form.email) ? '' : 'Enter a valid email.') : 'Email is required.'
  errors.subject = form.subject.trim() ? '' : 'Subject is required.'
  errors.message = form.message.trim() ? '' : 'Message is required.'

  return !errors.name && !errors.email && !errors.subject && !errors.message
}

async function onSubmit() {
  success.value = false
  submitError.value = ''
  if (!validate()) return

  submitting.value = true
  try {
    // Replace below with your backend call, e.g.:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    // mock delay
    await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form)
})
    await new Promise(r => setTimeout(r, 900))

    // success
    success.value = true
    // reset form
    form.name = form.email = form.subject = form.message = ''
  } catch (e) {
    submitError.value = 'Failed to send message. Please try again later.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.font-serifDisplay { font-family: 'Playfair Display', serif; }
:root {
  --brand-red: #a93436;
}
.bg-brandRed { background-color: var(--brand-red); }
.text-brandRed { color: var(--brand-red); }
</style>
