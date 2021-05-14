<template>
  <div class="wrapper">
    <!-- <Preloader /> -->
    <Navbar />
    <Sidebar />
    <div class="content-wrapper">
      <slot></slot>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/dashboard/Footer.vue'
import Navbar from '~/components/dashboard/Navbar.vue'
import Sidebar from '~/components/dashboard/Sidebar.vue'
import Preloader from '~/components/Preloader.vue'
export default {
  components: { Navbar, Preloader, Sidebar, Footer },
}
</script>

<style>
</style>