<template>
  <div>
    <app-navigation onRefSubmit="refSubmitted" ref="navbar"></app-navigation>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="mt-5" ref="title">Hello world</h1>
        </div>
        <div class="col-md-6">
          <p class="mt-5" ref="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem facilis corrupti officia. Repellendus quae id expedita architecto quia, tempora atque optio possimus recusandae assumenda aperiam enim aliquid corrupti sapiente?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation';
import anime from 'animejs';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      navbar: ''
    }
  },
  components: {
    appNavigation: Navigation
  },
  methods: {
    refSubmitted(e) {
      this.navbar = e;
    }
  },
  mounted() {
    let { title, desc, navbar } = this.$refs;

    let atl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });

    atl.add({
      targets: navbar.$el,
      translateY: ['-50px', '0px'],
      opacity: ['.6', '1'],
    }).add({
      targets: title,
      translateY: ['-50px', '0px'],
      opacity: [0, 1],
    }).add({
      targets: desc,
      translateX: ['-200px', '0px'],
      opacity: [0, 1]
    })

    console.log(navbar.$el);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  min-height: 100vh;
  color: #8A8A8A;
}
</style>
