import Vue from 'vue'
import Layout from '@/layouts/Layout'

const components = { Layout }
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
