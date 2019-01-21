<template>
  <div>
    <app-home></app-home>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue';

export default {
  name: 'home',
  components: {
    appHome: Home
  }
}
</script>
