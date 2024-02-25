import React from "react";
import { useEffect, useState } from "react";
import defaultRequest from "../api/defaultRequest";
import PrihodiRashodiPoGodinama from "../components/PrihodiRashodiPoGodinama";
import PrihodiRashodiGreenRed from "../components/PrihodiRashodiGreenRed";
import PrihodiRashodiKumulativno from "../components/PrihodiRashodiKumulativno";
import RadTotalTreeChart from "../components/RadTotalTreeChart";
import RadPoGodinamaChart from "../components/RadPoGodinamChart";
import PrihodiDatagrid from "../components/PrihodiDatagrid";
import DeletedPrihodi from "../components/DeletedPrihodi";
import DeletedRashodi from "../components/DeletedRashodi";
import DeletedRad from "../components/DeletedRad";
import DeletedBerba from "../components/DeletedBerba";
import DeletedPrerada from "../components/DeletedPrerada";

const DeletedPage = () => {
  return (
    <div className="flex w-full flex-col p-4 bg-stone-500 text-slate-200">
      <div className="flex flex-col gap-1 text-xl">
        <div>Izbrisani prihodi</div>
        <DeletedPrihodi />
        <div className="mt-8">Izbrisani rashodi</div>
        <DeletedRashodi />
        <div className="mt-8">Izbrisan rad</div>
        <DeletedRad />
        <div className="mt-8">Izbrisana berba jabuke</div>
        <DeletedBerba />
        <div className="mt-8">Izbrisana prerada</div>
        <DeletedPrerada />
      </div>
    </div>
  );
};

export default DeletedPage;
