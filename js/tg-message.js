"use strict"

const TOKEN = "5961037641:AAEg50OiDYTJv3r616SVjzDd0F2yW7gTeqc";
const CHAT_ID = "-1001965614141";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function(e) {
  e.preventDefault();



  let message = `<b>Заявка с сайта!</b>\n`;
  message += `<b>Отправитель: </b> ${ this.name.value }\n`;
  message += `<b>Нужна консультация в</b> ${ this.time.value }\n`;
  message += `<b>Телефон для связи:</b> ${ this.phone.value }`;

  <!-- console.log(message); -->

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })

  .then((res) => {
    this.name.value = "";
    this.time.value = "";
    this.phone.value = "";
    success.innerHTML = "Заявка отправлена!";
    success.style.display = "block";
  })

  .catch((err) => {
    console.warn(err);
  })

  .finally(() => {
    console.log('Конец');
  })

})


