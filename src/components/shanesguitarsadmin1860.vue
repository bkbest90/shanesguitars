<template>
  <div class="hello">
    {{scrollToTop()}}
    <!-- Top Bar Not Fixed -->
    <!-- Transition -->
    <div class="w3-container w3-center w3-animate-top" v-if="fixedTop == false">
      <router-link to="/">
      <img src="../assets/Shane's logo.png" width="15%" height="auto" style="margin-top:-50px">
      <br> * Admin *
      </router-link>
      <br>
    </div><br>
      <!-- Top Bar Fixed -->
    <div id="bgTop" v-if="fixedTop == true" class="w3-container w3-center w3-animate-top top" style="background-size: auto;margin-top:0px;background-color:white">
      <div style="text-align:left;margin-top:0px">
        <router-link to="/">
          <img src="../assets/Shane's logo.png" width="10%" height="auto" style="margin-left:44.5%;margin-top:-28px">
        </router-link>
      </div>
    </div>
    <div style="margin-top:-20px">
      <h2>Add a part of guitar.</h2>
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{partForAdd}}
     </button>
      <div class="dropdown-menu">
        <button class="dropdown-item" @click="partForAdd='Model'">Model</button>
        <button class="dropdown-item" @click="partForAdd='Body'">Body wood</button>
        <button class="dropdown-item" @click="partForAdd='Neck'">Neck wood</button>
        <button class="dropdown-item" @click="partForAdd='Pickguard'">Pickguard</button>
        <button class="dropdown-item" @click="partForAdd='Electronic'">Electronic</button>
        <button class="dropdown-item" @click="partForAdd='Color'">Color</button>
      </div>
    </div><br><hr>
    <h1 v-if="partForAdd!='Select to add..'"><b>{{partForAdd}}</b></h1>
    <form v-if="partForAdd!='Select to add..'">
    <div class="form-group">
      Name <input style="width:500px;margin-left:32%" type="text" class="form-control" v-model="nameOfPart" placeholder="Enter name"><br>
      Code <input style="width:500px;margin-left:32%" type="text" class="form-control" v-model="codeOfPart" placeholder="Enter Code"><br>
      <div v-if="partForAdd=='Model'||partForAdd=='Neck'||partForAdd=='Pickguard'||partForAdd=='Color'">
      Link <input style="width:500px;margin-left:32%" type="text" class="form-control" v-model="imgLinkOfPart" placeholder="Enter Link"><br>
      </div>
      <button type="submit" @click="addPart" class="btn btn-primary">Submit</button>
      <div class="w3-container w3-center w3-animate-bottom" v-if="imgLinkOfPart!== ''">
        <h3><u> Image preview</u></h3> <br> <img :src="imgLinkOfPart"/></div>
      </div>
    </form>
  </div>
</template>

<script>
import { guitarsPartRef, modelRef, bodyRef, neckRef, pickguardRef, electronicRef, colorRef } from './firebase'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      scerolled: false,
      fixedTop: false,
      partForAdd: 'Select to add..',
      nameOfPart: '',
      codeOfPart: '',
      imgLinkOfPart: ''
    }
  },
  firebase: {
    guitarsPartF: guitarsPartRef,
    modelF: modelRef,
    bodyF: bodyRef,
    neckF: neckRef,
    pickguardF: pickguardRef,
    electronicF: electronicRef,
    colorF: colorRef
  },
  methods: {
    addPart () {
      const swal = require('sweetalert2')
      if (this.partForAdd === 'Model' && this.nameOfPart !== '' && this.codeOfPart !== '') {
        modelRef.push({ nameOfPart: this.nameOfPart, imgModelLink: this.imgLinkOfPart, codeOfPart: this.codeOfPart })
        swal(
          'Successful!',
          'That part is saved',
          'success'
        )
      } else if (this.partForAdd === 'Body' && this.nameOfPart !== '' && this.codeOfPart !== '') {
        bodyRef.push({ nameOfPart: this.nameOfPart, imgModelLink: this.imgLinkOfPart, codeOfPart: this.codeOfPart })
        swal(
          'Successful!',
          'That part is saved',
          'success'
        )
      } else if (this.partForAdd === 'Neck' && this.nameOfPart !== '' && this.codeOfPart !== '') {
        neckRef.push({ nameOfPart: this.nameOfPart, imgModelLink: this.imgLinkOfPart, codeOfPart: this.codeOfPart })
        swal(
          'Successful!',
          'That part is saved',
          'success'
        )
      } else if (this.partForAdd === 'Pickguard' && this.nameOfPart !== '' && this.codeOfPart !== '') {
        pickguardRef.push({ nameOfPart: this.nameOfPart, imgModelLink: this.imgLinkOfPart, codeOfPart: this.codeOfPart })
        swal(
          'Successful!',
          'That part is saved',
          'success'
        )
      } else if (this.partForAdd === 'Electronic' && this.nameOfPart !== '' && this.codeOfPart !== '') {
        electronicRef.push({ nameOfPart: this.nameOfPart, imgModelLink: this.imgLinkOfPart, codeOfPart: this.codeOfPart })
        swal(
          'Successful!',
          'That part is saved',
          'success'
        )
      } else if (this.partForAdd === 'Color' && this.nameOfPart !== '' && this.codeOfPart !== '') {
        colorRef.push({ nameOfPart: this.nameOfPart, imgModelLink: this.imgLinkOfPart, codeOfPart: this.codeOfPart })
        swal(
          'Successful!',
          'That part is saved',
          'success'
        )
      } else {
        swal(
          'Error!',
          'ใส่ข้อมูลให้ถูกสิ ไอสัส',
          'error'
        )
      }
      this.nameOfPart = ''
      this.codeOfPart = ''
      this.imgLinkOfPart = ''
    },
    firstComeCheck () {
      if (this.firstCome === 0) {
        this.firstCome = 1
      }
    },
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
    color: lightblue;
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
    color: lightblue;
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
    background-color: lightblue;
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
