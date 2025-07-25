import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const a = {
	name: 'ssss',
	b: 222,
}
const b = {
	aa: 222,
}

console.log(a === b)

createApp(App).mount('#app')
