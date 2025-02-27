import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faBell, faCalendar } from '@fortawesome/free-solid-svg-icons';

library.add([faBell, faCalendar]);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
