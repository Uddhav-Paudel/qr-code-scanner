<script setup>
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const triggerFileClick = (event) => {
  event.preventDefault()
  const qrCodeCapture = document.getElementById('qrCodeCapture')
  qrCodeCapture.click()
}

const onDetected = (result) => {
  if (result && result.length > 0) {
    router.push({ path: '/result', query: { result: result[0]['rawValue'] } })
  }
}
</script>

<template>
  <footer class="px-(--p-x) py-(--p-y)">
    <article>
      <header class="flex align-center justify-between">
        <a
          href="https://www.uddhavpaudel.com.np"
          target="_blank"
          class="bg-[url('/logo_white.svg')] h-25 w-25 bg-no-repeat bg-contain bg-center"
        ></a>
        <nav class="flex gap-(--a-gap) w-60">
          <RouterLink
            to="/"
            class="hover:bg-(--color-background-header) hover:text-(--color-text-header) flex w-100 justify-center items-center px-(--p-x) border-(length:--border-width) rounded-(--border-radius)"
            >Scan</RouterLink
          >
          <qrcode-capture v-show="false" id="qrCodeCapture" @detect="onDetected"> </qrcode-capture>
          <button
            @click="triggerFileClick"
            class="hover:bg-(--color-background-header) hover:text-(--color-text-header) cursor-pointer flex w-100 justify-center items-center px-(--p-x) py-(--p-y) border-(length:--border-width) rounded-(--border-radius)"
          >
            Upload
          </button>
        </nav>
      </header>
    </article>
  </footer>
</template>
