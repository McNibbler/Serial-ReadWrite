import Api from '@/services/Api.js'

export default {
    FakePostRequest (credentials) {
        return Api().post('/TempData', credentials)
    },

    temperatureData (params) {
        return Api().get('TempData', {
          params: params
        })
      },
}