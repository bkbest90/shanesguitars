<template>
  <div class="hello">
    {{scrollToTop()}}
    <div v-if="fixedTop == false" >
      <router-link to="/">
      <img src="../assets/Shane's logo.png" width="15%" height="auto" style="margin-top:-33px">
      </router-link>
      <br>
      <router-link to="/"><button class="buttonM button4">HOME</button></router-link>
      <router-link to="/guitars"><button class="buttonM button4">GUITARS</button></router-link>
      <router-link to="/customizer"><button class="buttonM button4">CUSTOMIZE</button></router-link>
      <router-link to="/about"><button class="buttonM button4">ABOUT</button></router-link>
    </div>
    <div id="bgTop" v-if="fixedTop == true" class="top" style="background-size: auto;margin-top:-3px;background-color:white">
      <div style="text-align:left;margin-top:0px">
        <router-link to="/">
      <img src="../assets/Shane's logo.png" width="15%" height="auto" style="margin-top:-33px">
      </router-link>
      </div>
      <div style="margin-top:-60px">
        <router-link to="/"><button class="buttonM button4">HOME</button></router-link>
        <router-link to="/guitars"><button class="buttonM button4">GUITARS</button></router-link>
      <router-link to="/customizer"><button class="buttonM button4">CUSTOMIZE</button></router-link>
      <router-link to="/about"><button class="buttonM button4">ABOUT</button></router-link>
      </div>
    </div>
    <hr>
    <h1>ABOUT</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      scerolled: false,
      fixedTop: false
    }
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
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
        console.log('top')
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
.buttonM {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 16px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
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
    padding: 43px;
    background-repeat: no-repeat;
    background-size: auto;
}
</style>
