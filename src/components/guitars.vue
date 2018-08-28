<template>
  <div class="hello">
    <h3 v-if="firstTop == false">{{scrollToTop()}}</h3>
    <!-- Mobile View -->
<div v-if="screenWidth <= 1024 && screenWidth> 800">
  {{changeFoot ('ipad pro')}}
      <!-- Top Bar Not Fixed -->
    <div class="w3-container w3-center w3-animate-top" v-if="fixedTop == false" >
      <router-link to="/">
        <img src="../assets/Shane's logo.png" width="25%" height="auto" style="margin-top:-40px">
      </router-link>
      <br>
      <div style="margin-bottom:-10px;margin-top:-15px">
        <router-link to="/"><button style="font-size:27px;padding: 10px 10px" class="buttonL button4">HOME</button></router-link>
        <router-link to="/guitars"><button style="color:black;font-size:27px;padding: 10px 10px" class="buttonL button4">GUITARS</button></router-link>
        <router-link to="/customizer"><button style="font-size:27px;padding: 10px 10px" class="buttonL button4">CUSTOMIZE</button></router-link>
        <router-link to="/about"><button style="font-size:27px;padding: 10px 10px" class="buttonL button4">ABOUT</button></router-link>
      </div>
    </div><br>
      <!-- Top Bar Fixed -->
    <div id="bgTop" v-if="fixedTop == true" class="w3-container w3-center w3-animate-top top" style="height:100px;background-size: auto;background-color:white">
      <div style="text-align:left;margin-top:10px;margin-left:-70px">
        <router-link to="/">
          <img src="../assets/Shane's logo.png" width="20%" height="auto" style="margin-left:100px;margin-top:-28px">
        </router-link>
      </div>
      <div style="margin-top:-75px;margin-left:250px">
        <router-link to="/"><button style="font-size:27px;" class="buttonM button4">HOME</button></router-link>
        <router-link to="/guitars"><button style="color:black;font-size:27px" class="buttonM button4">GUITARS</button></router-link>
        <router-link to="/customizer"><button style="font-size:27px" class="buttonM button4">CUSTOMIZE</button></router-link>
        <router-link to="/about"><button style="font-size:27px" class="buttonM button4">ABOUT</button></router-link>
      </div>
    </div>
    <h1>GUITARS</h1>
    </div>
<!-- For less than 700 screen -->
<div v-if="screenWidth <= 800 && screenWidth >= 350">
  {{changeFoot ('mobile 5.5')}}
      <div class="w3-container w3-center w3-animate-top" v-if="fixedTop == false && scrolledTop">
      <router-link to="/">
        <img src="../assets/Shane's logo.png" width="48%" height="auto" style="margin-top:-60px">
      </router-link>
      <div style="text-align:center;padding:7px 0px">
        <router-link to="/"><button style="font-size:16px;width:17%" class="button4 ">HOME</button></router-link>
        <router-link to="/guitars"><button style="color:black;font-size:16px;width:25%" class="button4 ">GUITARS</button></router-link>
        <router-link to="/customizer"><button style="font-size:16px;width:33%" class="button4 ">CUSTOMIZE</button></router-link>
        <router-link to="/about"><button style="font-size:16px;width:18%" class="button4 ">ABOUT</button></router-link>
      </div>
      </div>
      <div id="bgTop app" v-if="fixedTop == true" class="w3-container w3-center w3-animate-top top" style="width:111%;margin-left:-17px">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/">
         <img src="../assets/Shane's logo.png" width="100px" height="auto" >
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div style="margin-top:10px" id="navbarNavDropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                     <router-link to="/"><a style="font-size:18px" class="nav-link">HOME<span class="sr-only">(current)</span></a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/guitars"><button style="background-color:#F8F9FA;font-size:18px;width:25%" class="button4 buttonMobile">GUITARS</button></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/customizer"><a style="font-size:18px" class="nav-link">CUSTOMIZE</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about"><a style="font-size:18px" class="nav-link">ABOUT</a></router-link>
                </li>
            </ul>
        </div>
    </nav>
      <div style="text-align:center;padding:7px 2px">
      </div>
    </div>
    <h1>GUITARS</h1>
    </div>
<!-- For less than 375 screen -->
<div v-if="screenWidth < 350">
  {{changeFoot ('iphone5')}}
      <div class="w3-container w3-center w3-animate-top" v-if="fixedTop == false && scrolledTop">
      <router-link to="/">
        <img src="../assets/Shane's logo.png" width="48%" height="auto" style="margin-top:-60px">
      </router-link>
      <div style="text-align:center;padding:7px 2px">
        <router-link to="/"><button style="font-size:13px;width:16%" class="button4">HOME</button></router-link>
        <router-link to="/guitars"><button style="color:black;font-size:13px;width:23%" class="button4">GUITARS</button></router-link>
        <router-link to="/customizer"><button style="font-size:13px;width:30%" class="button4">CUSTOMIZE</button></router-link>
        <router-link to="/about"><button style="font-size:13px;width:18%" class="button4">ABOUT</button></router-link>
      </div>
      </div>
      <div id="bgTop app" v-if="fixedTop == true" class="w3-container w3-center w3-animate-top top" style="width:111%;margin-left:-17px">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/">
         <img src="../assets/Shane's logo.png" width="100px" height="auto" >
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavDropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                     <router-link to="/"><a class="nav-link">HOME<span class="sr-only">(current)</span></a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/guitars"><button style="background-color:#F8F9FA;font-size:13px;width:22%" class="button4 buttonMobile">GUITARS</button></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/customizer"><a class="nav-link">CUSTOMIZE</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about"><a class="nav-link">ABOUT</a></router-link>
                </li>
            </ul>
        </div>
    </nav>
      <div style="text-align:center;padding:7px 2px">
      </div>
    </div>
    <h1>GUITARS</h1>
 </div>
<!-- Mobile View -->
<!-- Desktop View -->
<div v-if="screenWidth > 1024">
  {{changeFoot('desktop')}}
    <!-- Top Bar Not Fixed -->
    <div class="w3-container w3-center w3-animate-top" v-if="fixedTop == false" >
      <router-link to="/">
        <img src="../assets/Shane's logo.png" width="15%" height="auto" style="margin-top:-50px">
      </router-link>
      <br>
      <div style="margin-bottom:-10px;margin-top:-15px">
        <router-link to="/"><button style="font-size:20px;padding: 10px 10px" class="buttonL button4">HOME</button></router-link>
        <router-link to="/guitars"><button style="color:black;font-size:20px;padding: 10px 10px" class="buttonL button4">GUITARS</button></router-link>
        <router-link to="/customizer"><button style="font-size:20px;padding: 10px 10px" class="buttonL button4">CUSTOMIZE</button></router-link>
        <router-link to="/about"><button style="font-size:20px;padding: 10px 10px" class="buttonL button4">ABOUT</button></router-link>
      </div>
    </div><br>
      <!-- Top Bar Fixed -->
    <div id="bgTop" v-if="fixedTop == true" class="w3-container w3-center w3-animate-top top" style="height:80px;background-size: auto;margin-top:0px;background-color:white">
      <div style="text-align:left;margin-top:0px">
        <router-link to="/">
          <img src="../assets/Shane's logo.png" width="13%" height="auto" style="margin-left:100px;margin-top:-24px">
        </router-link>
      </div>
      <div style="margin-top:-65px;margin-left:65px">
        <router-link to="/"><button style="font-size:19px;" class="buttonM button4">HOME</button></router-link>
        <router-link to="/guitars"><button style="font-size:19px;color:black;" class="buttonM button4">GUITARS</button></router-link>
        <router-link to="/customizer"><button style="font-size:19px" class="buttonM button4">CUSTOMIZE</button></router-link>
        <router-link to="/about"><button style="font-size:19px" class="buttonM button4">ABOUT</button></router-link>
      </div>
    </div>
    <h1>GUITARS</h1>
</div>
<!-- BR Content -->
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<!-- Mobile iphone5 size -->
<div v-if="deviceShow == 'iphone5'" style="color:black">
    <div style="text-align: center">
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:30px;color:black" class="fa">&#xf230;</i></button>
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:30px;color:black" class="fa">&#xf16a;</i></button>
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:30px;color:black" class="fa">&#xf16d;</i></button>
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:26px;color:black" class="fa material-icons">&#xe0e1;</i></button>
      </div> <br>
      <div class="container">
        <div style="font-size:15px" class="row">
          <div class="col">
          <b>one</b> <br>
          saf <br>asfasflfgjdg
          </div>
          <div class="col">
            <b>two</b> <br>
            asf
          </div>
          <div class="col">
            <b>three</b> <br>
            asf
          </div>
        </div>
      </div>
      <br>
 </div>
<!-- Mobile 5.5 size -->
<div v-if="deviceShow == 'mobile 5.5'" style="color:black">
    <div style="text-align: center">
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:35px;color:black" class="fa">&#xf230;</i></button>
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:35px;color:black" class="fa">&#xf16a;</i></button>
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:35px;color:black" class="fa">&#xf16d;</i></button>
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:30px;color:black" class="fa material-icons">&#xe0e1;</i></button>
      </div> <br>
      <div class="container">
        <div style="font-size:15px" class="row">
          <div class="col">
          <b>one</b> <br>
          saf <br>asfasflfgjdg
          </div>
          <div class="col">
            <b>two</b> <br>
            asf
          </div>
          <div class="col">
            <b>three</b> <br>
            asf
          </div>
        </div>
      </div>
      <br>
 </div>
<!-- IPAD Pro size -->
<div v-if="deviceShow == 'ipad pro'" style="color:black">
    <div style="text-align: center">
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:48px;color:black" class="fa">&#xf230;</i></button>
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:48px;color:black" class="fa">&#xf16a;</i></button>
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:48px;color:black" class="fa">&#xf16d;</i></button>
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:40px;color:black" class="fa material-icons">&#xe0e1;</i></button>
      </div> <br>
      <div class="container">
        <div style="font-size:22px" class="row">
          <div class="col">
          <b>one</b> <br>
          saf <br>asfasflfgjdg
          </div>
          <div class="col">
            <b>two</b> <br>
            asf
          </div>
          <div class="col">
            <b>three</b> <br>
            asf
          </div>
        </div>
      </div>
      <br>
 </div>
<!-- Desktop foot -->
<div v-if="deviceShow == 'desktop'" style="color:black">
    <div style="text-align: center">
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:40px;color:black" class="fa">&#xf230;</i></button>
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:40px;color:black" class="fa">&#xf16a;</i></button>
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:40px;color:black" class="fa">&#xf16d;</i></button>
        <button class="btn-outline-light" style="border: 0px;background-color:white"><i style="font-size:34px;color:black" class="fa material-icons">&#xe0e1;</i></button>
      </div> <br>
      <div class="container">
        <div style="font-size:20px" class="row">
          <div class="col">
          <b>one</b> <br>
          saf <br>asfasflfgjdg
          </div>
          <div class="col">
            <b>two</b> <br>
            asf
          </div>
          <div class="col">
            <b>three</b> <br>
            asf
          </div>
        </div>
      </div>
      <br>
 </div>
    Developed by Chayanut Pasing
<!-- Desktop View #F8F9FA -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      scerolled: false,
      fixedTop: false,
      firstTop: false,
      screenWidth: 0,
      scrolledTop: false,
      deviceShow: ''
    }
  },
  methods: {
    changeFoot (device) {
      this.deviceShow = device
    },
    scrollToTop () {
      this.scrolledTop = true
      this.screenWidth = screen.width
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
      this.scrolled = window.scrollY > 10
      this.scrolledTop = window.scrollY < 5
      if (this.scrolled) {
        this.fixedTop = true
      } else if (this.scrolled === false) {
        this.fixedTop = false
      } else if (this.scrolledTop === true) {
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
    color: #808080;
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
.buttonMobile {
  padding: 1px 1px;
  text-align: center;
  color: black;
}
</style>
