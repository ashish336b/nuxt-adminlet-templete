export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ncn-dashboard',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback',
      },
      {
        rel: 'stylesheet',
        href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
      },
    ],
    script: [
      { src: '/plugins/jquery/jquery.min.js', body: true },
      { src: '/plugins/jquery-ui/jquery-ui.min.js', body: true },
      { src: '/widget.js', body: true },
      {
        src: '/plugins/bootstrap/js/bootstrap.bundle.min.js',
        body: true,
      },
      { src: '/plugins/chart.js/Chart.min.js', body: true },
      { src: '/plugins/sparklines/sparkline.js', body: true },
      { src: '/plugins/jqvmap/jquery.vmap.min.js', body: true },
      { src: '/plugins/jqvmap/maps/jquery.vmap.usa.js', body: true },
      { src: '/plugins/jquery-knob/jquery.knob.min.js', body: true },
      { src: '/plugins/moment/moment.min.js', body: true },
      {
        src: '/plugins/daterangepicker/daterangepicker.js',
        body: true,
      },
      {
        src: '/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js',
        body: true,
      },
      { src: '/plugins/summernote/summernote-bs4.min.js', body: true },
      {
        src: '/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js',
        body: true,
      },
      { src: '/dist/js/adminlte.js', body: true },
      { src: '/dist/js/demo.js', body: true },
      { src: '/dist/js/pages/dashboard.js', body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/plugins/fontawesome-free/css/all.min.css',
    '@/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css',
    '@/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
    '@/assets/plugins/jqvmap/jqvmap.min.css',
    '@/assets/dist/css/adminlte.min.css',
    '@/assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css',
    '@/assets/plugins/daterangepicker/daterangepicker.css',
    '@/assets/plugins/summernote/summernote-bs4.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["./plugins/globalComponents"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
