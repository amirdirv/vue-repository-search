import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import 'bulma/css/bulma.min.css'

createApp(App).use(store).mount('#app')
