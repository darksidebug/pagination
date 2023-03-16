import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PaginationButton from './components/PaginationButton.vue'

createApp(App).use(PaginationButton).mount('#app')