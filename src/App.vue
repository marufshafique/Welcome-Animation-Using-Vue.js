<template>
  <div id="app">
    <app-welcome 
      v-show="!isLoaded" 
      :showBtn="showBtn"
      @changeLoaded="onLoadedChange"></app-welcome>
    <router-view v-show="isLoaded"/>
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


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
