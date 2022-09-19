import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const dateRef = document.querySelector('#datetime-picker');
const startBtnRef = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

startBtnRef.disabled = true;
let timerId = null;
let ms = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    if (selectedDates[0] < new Date) {
      Notiflix.Notify.failure('Please choose a date in the future');
    };flatpickr
    startBtnRef.disabled = false;

    startBtnRef.addEventListener('click', () => {
      Notiflix.Notify.success('Timer started');
      timerId = setInterval(() => {
        ms = selectedDates[0] - new Date;
        const updateTimerObj = convertMs(ms);
        
        updateTimer(updateTimerObj);

        if (ms <= 1000) {
          clearInterval(timerId);
          Notiflix.Notify.success('Timer stoped');
        }
      }, 1000);
    });
  },
};

flatpickr(dateRef, options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
};

function updateTimer(updateTimerObj) {
  secondsRef.textContent = addLeadingZero(updateTimerObj.seconds);
  minutesRef.textContent = addLeadingZero(updateTimerObj.minutes);
  hoursRef.textContent = addLeadingZero(updateTimerObj.hours);
  daysRef.textContent = addLeadingZero(updateTimerObj.days);
};