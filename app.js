const birthDate = document.getElementById("birthDate");
const CalculateBirth = document.getElementById("CalculateBirth");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
const hours = document.getElementById("hours");
const minites = document.getElementById("minites");
const seconds = document.getElementById("seconds");
const milisecond =document.getElementById("milisecond")

function dicimal(e) {
  return Math.floor(e);
}

const claculateAge = () => {
  // const todayDate =`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
  // const todaynow=new Date(todayDate)
  const timeChange = () => {
    const birth = new Date(birthDate.value);
    const today = new Date();
    const differnce = today.getTime() - birth.getTime();
    const difday = dicimal(differnce / 1000 / 60 / 60 / 24);
    day.textContent = `day is : ${difday}`;
    const difmonth = dicimal(difday / 30);
    month.textContent = `month is : ${difmonth}`;
    const difYear = dicimal(difday / 365);
    year.textContent = `years is : ${difYear}`;
    const difHours = dicimal(differnce / 1000 / 60 / 60);
    hours.textContent = `hours is : ${difHours}`;
    const difminites = dicimal(differnce / 1000 / 60);
    minites.textContent = `minites is : ${difminites}`;
    const difSecond = dicimal(differnce / 1000);
    seconds.textContent = `seconds is : ${difSecond}`;
    milisecond.textContent=`miliSecond is : ${differnce}`

  };
timeChange()
  setInterval(timeChange, 1);
};

CalculateBirth.addEventListener("click", claculateAge);
