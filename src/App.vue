<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <app-welcome 
        v-if="!isLoaded" 
        :showBtn="showBtn"
        @changeLoaded="onLoadedChange"></app-welcome>
      <router-view v-else/>
    </transition>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome';

export default {
  data() {
    return {
      isLoaded: false,
      showBtn: false,
      firtTimeOut: ''
    }
  },
  components: {
    appWelcome: Welcome,
  },
  methods: {
    onLoadedChange(e) {
      this.isLoaded = e;
    }
  },
  mounted() {
    this.firtTimeOut = setTimeout(() => {
      this.showBtn = true;
    }, 2000);
  }
}
</script>


<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  100% {
    opacity: 0;
  }
}

.fade-enter-active {
  animation: fade-in .5s ease-in forwards;
}

.fade-leave-active {
  animation: fade-out .5s ease-in forwards;
}

#app {
  background: #303030;
}
</style>
