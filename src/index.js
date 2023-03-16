import PaginationButton from './components/PaginationButton.vue'

export default {
  install: (app, options) => {
    app.component('PaginationButton', PaginationButton)
  }
}