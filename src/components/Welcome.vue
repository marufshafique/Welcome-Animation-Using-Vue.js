<template>
  <div class="wrapper">
    <div class="center">
      <div ref="desc">
        <h1 ref="title">Hi I'm Maruf Shafique</h1>
        <p ref="para">UI/UX designer & full stack JavaScript developer</p>
      </div>
      <transition name="slide" mode="out-in">
        <div class="spinner" v-if="!showBtn" key="spiner"></div>
        <div v-else key="explore" ref="explore">
          <div class="explore d-flex justify-content-center">
            <div class="d-flex explore-inner" @click="onExplore">
              <span>Start Exploring</span> 
              <div class="play">
                <i class="material-icons">play_arrow</i>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  props: ['showBtn'],
  methods: {
    onExplore() {
      this.$emit('changeLoaded', true);
    },
  },
  mounted() {
    let { title, para } = this.$refs;

    anime({
      targets: title,
      translateY: ['-120px', '0px'],
      duration: 1500,
      opacity: [.5, 1],
      easing: 'easeOutExpo'
    })

    anime({
      targets: para,
      translateY: ['-80px', '0px'],
      delay: 200,
      duration: 1300,
      opacity: [.5, 1],
      easing: 'easeOutExpo'
    })
  }
}
</script>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100%;
  background: #303030;
  display: flex;
  align-items: center;
}

.center {
  width: 100%;
  text-align: center;
  color: #8A8A8A;
}

.center h1 {
  font-family: 'Alex Brush', cursive;
  font-size: 56px;
}

.explore {
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 60px;
  color: #4085F8;
}

.explore-inner:hover {
  cursor: pointer;
}

.explore-inner:hover .play {
  margin-left: 15px;
  transition: all ease-in-out .3s;
}

.explore span {
  margin-right: 10px;
}

.play {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #666666;
  box-shadow: 0 0px 3px 0 rgba(255, 252, 252, 0.712);
  transition: all ease-in-out .3s;
}

.material-icons {
  line-height: 60px;
}

.spinner {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 20px auto;
  background-color: #666666;
  border: 3px solid transparent;
  border-top: 3px solid #8F8F8F;
  border-right: 3px solid #8F8F8F;
  -webkit-transition: .2s;
  -moz-transition: .2s;
  transition: .2s;
  -webkit-animation: loading 1s linear infinite;
  -moz-animation: loading 1s linear infinite;
  animation: loading 1s linear infinite;
}

@-webkit-keyframes loading {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-moz-keyframes loading {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loading {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes slideLeave {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
  }
}

@keyframes slideEnter {
  0% {
    opacity: 0;
    transform: translateY(30px)
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-enter-active {
  animation: slideEnter .3s ease-in-out forwards;
}
.slide-leave-active {
  animation: slideLeave .3s ease-in-out forwards;
}

</style>
