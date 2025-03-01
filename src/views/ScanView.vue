<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const onDetected = (result) => {
  if (result && result.length > 0) {
    router.push({ path: '/result', query: { result: result[0]['rawValue'] } })
  }
}
</script>
<template>
  <div class="scan">
    <qrcode-stream @detect="onDetected"> </qrcode-stream>
  </div>
</template>
