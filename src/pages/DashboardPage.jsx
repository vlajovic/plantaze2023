import React from "react";
import { useEffect, useState } from "react";
import defaultRequest from "../api/defaultRequest";
import PrihodiRashodiPoGodinama from "../components/PrihodiRashodiPoGodinama";
import PrihodiRashodiGreenRed from "../components/PrihodiRashodiGreenRed";
import PrihodiRashodiKumulativno from "../components/PrihodiRashodiKumulativno";
import RadTotalTreeChart from "../components/RadTotalTreeChart";
import RadPoGodinamaChart from "../components/RadPoGodinamChart";
import { useOutletContext } from "react-router-dom";
import KupciTreeChart from "../components/KupciTreeChart";
import KupacPoGodinama from "../components/KupacPoGodinama";

const DashboardPage = () => {
  const [minYear, setMinYear, maxYear, setMaxYear, year, setYear] =
    useOutletContext();

  const [prihodiRashodi, setPrihodiRashodi] = useState([]);
  const [kupac, setKupac] = useState(undefined);
  // const [radTreeData, setRadTreeData] = useState([]);

  useEffect(() => {
    defaultRequest("PrihodiRashodiPoGodinama").then((data) => {
      setPrihodiRashodi(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col w-full py-6 px-4">
        <PrihodiRashodiPoGodinama prihodiRashodi={prihodiRashodi} />
      </div>

      <div className="flex gap-3 py-12 px-4  bg-slate-300">
        <div className="w-1/2">
          <PrihodiRashodiGreenRed chartData={prihodiRashodi} />
        </div>

        <div className="w-1/2">
          <PrihodiRashodiKumulativno chartData={prihodiRashodi} />
        </div>
      </div>

      <div className="py-12 flex gap-3 px-4">
        <div className="w-1/2">
          <RadPoGodinamaChart />
        </div>

        <div className="w-1/2">
          <RadTotalTreeChart />
        </div>
      </div>

      <div className="py-12 flex gap-3 px-4 bg-slate-300">
        <div className="w-1/2">
          <KupacPoGodinama kupac={kupac} />
        </div>

        <div className="w-1/2">
          <KupciTreeChart kupac={kupac} setKupac={setKupac} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
