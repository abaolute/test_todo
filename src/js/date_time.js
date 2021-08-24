const currentDate = new Date();

// 年・月・日・曜日を取得
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const date = currentDate.getDate();
const day = currentDate.getDay();
const weekday = ["日","月","火","水","木","金","土"];

// 時間を取得
const hour = formatTime(currentDate.getHours());
const minute = formatTime(currentDate.getMinutes());
const second = formatTime(currentDate.getSeconds());

// 0~9の数値に0を足して2桁にする関数(例: 0:0:0 -> 00:00:00)
function formatTime(val) {
  return ("0" + val).slice(-2);
}

// 取得した日付・時間をアウトプット
const outputDateTimeEl = document.querySelector('.output-date-time_bottom_space');
outputDateTimeEl.innerText = `日付:${year}/${month}/${date}/${weekday[day]}/${hour}:${minute}:${second}`;