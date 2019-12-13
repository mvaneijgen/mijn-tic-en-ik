import Vue from 'vue'
import gsap from 'gsap'
// import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
// import ScrollMagic from 'scrollmagic'
// import SplitText from '../static/SplitText' // any extra plugins
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'imports-loader';

const GSAP = {
  install(Vue, options) {
    // GSAP
    Vue.prototype.$GSAP = {
      gsap,
      // ExpoScaleEase,
      // RoughEase,
      // SlowMo,
      // Power1,
      // Power2,
      // Power3,
      // Back,
      // SplitText
    }
    // // ScrollMagic
    // Vue.prototype.$ScrollMagic = {
    //   Controller: ScrollMagic.Controller,
    //   Scene: ScrollMagic.Scene
    // }
  }
}

Vue.use(GSAP)