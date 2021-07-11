import './style.css'
import createApp from "@shopify/app-bridge";

console.log(createApp);

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
