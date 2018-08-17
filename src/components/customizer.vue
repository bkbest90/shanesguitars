<template>
  <div class="hello">
    <h3 v-if="firstTop == false">{{scrollToTop()}}</h3>
    <!-- Top Bar Not Fixed -->
    <!-- Transition -->
    <div class="w3-container w3-center w3-animate-top" v-if="fixedTop == false">
      <router-link to="/">
      <img src="../assets/Shane's logo.png" width="15%" height="auto" style="margin-top:-50px">
      </router-link>
      <br>
      <div style="margin-top:-20px">
        <router-link to="/"><button class="buttonL button4">HOME</button></router-link>
        <router-link to="/guitars"><button class="buttonL button4">GUITARS</button></router-link>
        <router-link to="/customizer"><button class="buttonL button4">CUSTOMIZE</button></router-link>
        <router-link to="/about"><button class="buttonL button4">ABOUT</button></router-link>
      </div>
      <div style="margin-top:-100px;text-align: right"><button class="buttonM button4">EN/TH</button></div>
    </div><br>
      <!-- Top Bar Fixed -->
    <div id="bgTop" v-if="fixedTop == true" class="w3-container w3-center w3-animate-top top" style="background-size: auto;margin-top:0px;background-color:white">
      <div style="text-align:left;margin-top:0px">
        <router-link to="/">
      <img src="../assets/Shane's logo.png" width="10%" height="auto" style="margin-left:100px;margin-top:-28px">
      </router-link>
      </div>
      <div style="margin-top:-60px">
        <router-link to="/"><button class="buttonM button4">HOME</button></router-link>
        <router-link to="/guitars"><button class="buttonM button4">GUITARS</button></router-link>
      <router-link to="/customizer"><button class="buttonM button4">CUSTOMIZE</button></router-link>
      <router-link to="/about"><button class="buttonM button4">ABOUT</button></router-link>
      <div style="margin-top:-89px;text-align: right"><button class="buttonM button4">EN/TH</button></div>
      </div>
    </div>
    CUSTOMIZER
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import { dataRef } from './firebase'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      scerolled: false,
      fixedTop: false,
      firstTop: false
    }
  },
  firebase: {
    dataF: dataRef
  },
  methods: {
    testPush () {
      dataRef.push({ matchWatcher: 0 })
    },
    scrollToTop () {
      window.scrollTo(0, 0)
      this.firstTop = true
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    handleScroll () {
      this.scrolled = window.scrollY > 0
      if (this.scrolled) {
        this.fixedTop = true
      } else if (this.scrolled === false) {
        this.fixedTop = false
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
.buttonL {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 20px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 25px 15px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
.buttonM {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 7px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 25px 10px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
.button4 {
    background-color: white;
    color: black;
    border: 0px solid #e7e7e7;
}

.button4:hover {background-color: #e7e7e7;}
.slide {
    color: #fff;
    height: 400px;
    position: relative
}
.center {
    margin: auto;
    width: 100%;
    border: 3px solid green;
    padding: 10px;
}
.top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 23px;
}
#bgTop {
    padding: 29px;
    background-repeat: no-repeat;
    background-size: auto;
}
</style>
