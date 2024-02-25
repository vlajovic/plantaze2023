import React, { useLayoutEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Cards from "../components/Cards";
import defaultRequest from "../api/defaultRequest";
import PrihodRashodZaGodinuChart from "../components/PrihodRashodZaGodinuChart";
import PrihodiTreeChart from "../components/PrihodiTreeChart";
import RadYearBarChart from "../components/RadYearBarChart";
import RadYearTreeChart from "../components/RadYearTreeChart";

const PregledGodinePage = () => {
  const [year, setYear] = useOutletContext();

  const [kategorije, setKategorije] = useState([]);
  const [artKat, setArtKat] = useState([]);

  useLayoutEffect(() => {
    async function getKategorije() {
      let kategorije = [];
      const res = await fetch(
        `https://eu-central-1.aws.data.mongodb-api.com/app/plantaze2023-ofelf/endpoint/artikliKategorije`
      );
      const response = await res.json();
      setArtKat(response);
      response.forEach((i) => kategorije.push(i.kategorija));
      kategorije = [...new Set(kategorije)];
      kategorije.sort((first, second) => {
        if (first === "grozdje") return -1;
      });
      kategorije.sort((first, second) => {
        if (first === "jabuka") return -1;
      });
      kategorije.sort((first, second) => {
        if (first === "sljiva") return -1;
      });
      setKategorije(kategorije);
    }
    getKategorije();
  }, [year]);

  return (
    <div className="flex w-full flex-col">
      <div className="py-12 px-6 bg-slate-300">
        <Cards year={year} kategorije={kategorije} />
      </div>

      <div className="flex flex-col gap-8 p-12 px-6 bg-slate-100">
        <div className="text-2xl font-semibold">Prihodi</div>
        <div className="flex gap-8 pb-10">
          <div className="w-1/2">
            <PrihodRashodZaGodinuChart
              year={year}
              kategorije={kategorije}
              artKat={artKat}
            />
          </div>

          <div className="w-1/2 border rounded-xl p-4 shadow-md bg-white">
            <PrihodiTreeChart year={year} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 p-12 px-6 bg-slate-300">
        <div className="text-2xl font-semibold">Rad</div>
        <div className="flex gap-8 pb-10">
          <div className="w-1/2 border rounded-xl p-4 shadow-md bg-white">
            <RadYearBarChart
              year={year}
              kategorije={kategorije}
              artKat={artKat}
            />
          </div>

          <div className="w-1/2 border rounded-xl p-4 shadow-md bg-white">
            <RadYearTreeChart
              year={year}
              kategorije={kategorije}
              artKat={artKat}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PregledGodinePage;
