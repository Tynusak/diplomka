const deadline = dayjs('2017-06-29');
const today = dayjs();
const par = document.querySelector('p');

if (today.isAfter(deadline)) {
  par.innerHTML = `ANO <br>Jsi fakt borec!`;
} else {
  par.innerHTML = `NE <br> Koukej ještě psát!`;
}
