import { useEffect, useState } from "react";
import s from "./Calendar.module.css";
import sprite from "../../img/icon-sprite.svg";

export default function Calendar({ setDayOfMonth, setCalendars }) {
  const [numberOfDaysInAMonth, setNumberOfDaysInAMonth] = useState(() => {
    const day = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    ).getDate();

    const days = [];
    for (let i = 1; i <= day; i++) {
      days.push(i);
    }

    return days;
  });
  const [month, setMonth] = useState("");
  const [number, setNumber] = useState(1);
  const [year, setYear] = useState(2025);

  useEffect(() => {
    switch (number) {
      case 1:
        setMonth("January");
        break;
      case 2:
        setMonth("February");
        break;
      case 3:
        setMonth("March");
        break;
      case 4:
        setMonth("April");
        break;
      case 5:
        setMonth("May");
        break;
      case 6:
        setMonth("June");
        break;
      case 7:
        setMonth("July");
        break;
      case 8:
        setMonth("August");
        break;
      case 9:
        setMonth("September");
        break;
      case 10:
        setMonth("October");
        break;
      case 11:
        setMonth("November");
        break;
      case 12:
        setMonth("December");
        break;
    }

    const numberOfDays = new Date(year, number, 0).getDate();
    const days = [];
    for (let i = 1; i <= numberOfDays; i++) {
      days.push(i);
    }

    setNumberOfDaysInAMonth(days);
  }, [number, year]);

  const handleClickDay = (e) => {
    const form = e.target.innerText;
    setDayOfMonth(
      `${year}-${number.toString().padStart(2, "0")}-${form
        .toString()
        .padStart(2, "0")}`
    );

    setCalendars(false);
  };

  const handleClickForward = () => {
    if (number >= 1) {
      setNumber(number + 1);
    }
    if (number === 12) {
      setNumber(1);
      setYear(year + 1);
    }
  };

  const handleClickBack = () => {
    if (number >= 2) {
      setNumber(number - 1);
    }
    if (number === 1) {
      setNumber(12);
      setYear(year - 1);
    }
  };

  return (
    <div className={s.calendarBox}>
      <div className={s.titleCalendar}>
        <button
          className={s.buttonArrows}
          onClick={handleClickBack}
          type="button"
        >
          <svg className={s.iconL}>
            <use href={`${sprite}#icon-up`} />
          </svg>
        </button>
        <p className={s.month}>
          {month} {year}
        </p>
        <button
          className={s.buttonArrows}
          onClick={handleClickForward}
          type="button"
        >
          <svg className={s.iconR}>
            <use href={`${sprite}#icon-up`} />
          </svg>
        </button>
      </div>
      <div>
        <ul className={s.calendar}>
          {numberOfDaysInAMonth.map((day, index) => {
            return (
              <li key={index}>
                <button
                  className={s.buttonCalend}
                  onClick={handleClickDay}
                  type="button"
                >
                  {day}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
