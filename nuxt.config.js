const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: 'Köşe Yazısı Uygulaması | Nuxt.js',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://bootswatch.com/4/sketchy/bootstrap.min.css'}
        ],
        script: [
            // { src : 'https://cdn.jqu...'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    // loading : false,
    loading: {
        color: '#666',
        height: '3px',
        failedColor: 'orange'
    },
    // loadingIndicator : {
    //   name : 'circle',
    //   color: "#fbbd08"
    // },

    /*
    ** Global CSS
    */
    // @ ~ => rootFolder /
    css: [
        // "~/assets/style/bootstrap.min.css",
        "~/assets/style/transition.css"
    ],

    // dev : false,

    env: {
        baseURL: "https://kose-yazilari-nuxt-js.firebaseio.com/"
    },

    // generate : {},
    // rootDir : "/my-app",
    // srcDir : "/client",

    router : {
       extendRoutes(routes, resolve){
            routes.push({
                path : '/custom-route',
                component : resolve(__dirname, "pages/test.vue")
            })
       }
    },

    transition : {
        name : "layout",
        mode : "out-in"
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        "~/plugins/Components.js"
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        "@nuxtjs/axios"
    ],

    axios : {},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    }
}
