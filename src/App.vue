<template>
  <NavBar/>
  <HeroSection/>
  <PartnerSection/>
  <FeatureSection/>
  <ClosingSection/>
  <FooterSection/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import PartnerSection from './components/PartnerSection.vue'
import FeatureSection from './components/FeatureSection.vue'
import ClosingSection from './components/ClosingSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    PartnerSection,
    FeatureSection,
    ClosingSection,
    FooterSection,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
