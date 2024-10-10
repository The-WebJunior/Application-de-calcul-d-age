import { useState } from "react";

export default function Ages() {
  const [formdata, SetFormData] = useState({
    days: "",
    months: "",
    years: "",
  });

  const [age, setAge] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  function handleChange(e) {
    e.preventDefault();

    if (formdata.day < 1 || formdata.day > 31) {
      console.log("Le jour doit être entre 1 et 31.");
    }

    if (formdata.month < 1 || formdata.month > 12) {
      console.log("Le mois doit être entre 1 et 12.");
    }

    if (formdata.years < 1900 || formdata.years > new Date().getFullYear()) {
      console.log("Veuillez entrer une année valide.");
    }
    const currentDate = new Date();

    let Years = currentDate.getFullYear() - formdata.years;

    if (formdata.months > currentDate.getMonth() + 1) {
      Years -= 1;
    } else if (formdata.months > currentDate.getMonth() + 1) {
      if (formdata.days > currentDate.getDate()) {
        Years -= 1;
      }
    }
    const Months = currentDate.getMonth() + 1 - formdata.months;
    const Days = currentDate.getDate() - formdata.days;

    setAge(Years);
    setMonths(Months >= 0 ? Months : Months + 12);
    setDays(Days >= 0 ? Days : Days + 30);

    console.log(Years);
  }

  return (
    <div className=" flex justify-center items-center bg-gray-100  h-screen">
      <div className=" rounded-br-[120px]  shadow-xl h-80 p-6 w-96 bg-white  ">
        <form onSubmit={handleChange}>
          <div className="flex gap-4 mr-24">
            <div>
              <label className="text-xs mr-10 text-gray-400  font-bold ">
                DAY
              </label>{" "}
              <input
                className="border border-gray-100 font-extrabold border-t-gray-400 rounded-md w-16 p-2 placeholder:font-bold text-xs "
                placeholder="DD"
                value={formdata.days}
                onChange={(e) =>
                  SetFormData({ ...formdata, days: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-xs mr-5 text-gray-400  font-bold ">
                MONTH
              </label>{" "}
              <input
                className="border border-gray-100 font-extrabold border-t-gray-400 rounded-md w-16 p-2 placeholder:font-bold text-xs"
                placeholder="MM"
                value={formdata.months}
                onChange={(e) =>
                  SetFormData({ ...formdata, months: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-xs mr-9 text-gray-400  font-bold ">
                YEAR
              </label>{" "}
              <input
                className="border border-gray-100 font-extrabold border-t-gray-400 rounded-md  w-16 p-2 placeholder:font-bold text-xs"
                placeholder="YYYY"
                value={formdata.years}
                onChange={(e) =>
                  SetFormData({ ...formdata, years: e.target.value })
                }
              />
            </div>
          </div>
          <div className="border-y border-gray-200 mt-3" />
          <button
            type="submit"
            className="bg-violet-500 rounded-full w-10 h-10 ml-72 -mt-5 "
          ></button>
        </form>

        <div className="flex  flex-col text-left ml-3 mt-5  font-extrabold text-5xl">
          <div className="flex gap-2">
            <p className="text-violet-500">{age} </p>
            <p>years</p>
          </div>
          <div className="flex gap-2">
            <p className="text-violet-500"> {months} </p> <p>months</p>
          </div>
          <div className="flex gap-2">
            <p className="text-violet-500"> {days} </p> <p>days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
