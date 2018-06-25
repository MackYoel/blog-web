module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'blog-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Css
   */
  css: ['~/assets/scss/app.scss'],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  axios: {
    baseURL: process.env.AXIOS_BASE_URL || 'http://127.0.0.1:8000',
    retry: {
      retries: 2
    }
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login/', method: 'post', propertyName: 'key' },
          logout: { url: '/auth/logout/', method: 'post' },
          user: { url: '/auth/user/', method: 'get', propertyName: false }
        },
        tokenType: 'Token'
      }
    },
    cookie: {
      options: {
        expires: 30
      }
    },
    redirect: {
      home: '/new-post'
    }
  },

  router: {
    middleware: ['auth']
  },
  /*
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
