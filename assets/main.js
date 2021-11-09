const app = new Vue({
  el: "#app",
  data: {
    mails: [
    ]
  },
  methods: {

  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(mail => {
          app.mails.push(mail.data.response);
        })
    }
  }
})
