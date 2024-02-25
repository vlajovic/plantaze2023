import React, { useEffect, useLayoutEffect, useState } from "react";

import defaultYearRequest from "../api/defaultYearRequest";
// import { Link } from "react-router-dom";

const Cards = ({ year, kategorije }) => {
  const [prihodi, setPrihodi] = useState([]);
  const [rashodi, setRashodi] = useState([]);

  useEffect(() => {
    async function getPrihodi() {
      defaultYearRequest("cardsPrihodi", year).then((prihodiData) => {
        let formattedData = [];
        prihodiData.forEach((item) => {
          let container = {};
          container.completed = item.completed;
          container.data = {};
          kategorije.forEach((opt) => {
            container.data[opt] = item.data[opt] ? item.data[opt] : 0;
          });
          formattedData.push(container);
        });
        setPrihodi(formattedData);
        // console.log(formattedData);
      });
    }
    getPrihodi();
  }, [year, kategorije]);

  useEffect(() => {
    async function getRashodi() {
      defaultYearRequest("cardsRashodi", year).then((rashodi) => {
        let formattedData = [];
        rashodi.forEach((item) => {
          let container = {};
          container.completed = item.completed;
          container.data = {};
          kategorije.forEach((opt) => {
            container.data[opt] = item.data[opt] ? item.data[opt] : 0;
          });
          formattedData.push(container);
        });
        setRashodi(formattedData);
        // console.log(formattedData);
      });
    }
    getRashodi();
  }, [year, kategorije]);

  const getValuePrihodi = function (completed, kategorija) {
    const completedTrue = prihodi.filter((d) => d.completed === completed);
    if (completedTrue.length === 0) {
      return 0;
    }
    return completedTrue[0].data[kategorija];
  };

  const getValueRashodi = function (completed, kategorija) {
    const completedTrue = rashodi.filter((d) => d.completed === completed);
    if (completedTrue.length === 0) {
      return 0;
    }
    return completedTrue[0].data[kategorija];
  };

  const allSum = function (completed) {
    let suma = 0;
    kategorije.forEach((kat) => {
      suma += getValuePrihodi(completed, kat);
    });
    return suma;
  };

  const allSumRashodi = function (completed) {
    let ukupno = 0;
    kategorije.forEach((kat) => {
      ukupno += getValueRashodi(completed, kat);
    });
    return ukupno;
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="my-12 text-blue-900 flex items-center justify-center bg-white px-8 p-8 rounded-xl shadow-lg shadow-blue-900">
        <div className="flex justify-center">
          <table className="table-fixed w-full border-separate border-spacing-y-1">
            <thead className="text-right text-lg">
              <tr>
                <th className="text-left w-1/4"></th>
                <th className="w-1/4">Prihod</th>
                <th className="w-1/4">Rashod</th>
                <th className="w-1/4">Stanje</th>
              </tr>
            </thead>

            <tbody className="text-right">
              {kategorije.map((kat) => {
                return (
                  <tr
                    key={kat}
                    className=" font-semibold text-2xl hover:bg-gradient-to-l hover:from-indigo-200"
                  >
                    <td>{kat}</td>
                    <td>{getValuePrihodi(true, kat)?.toLocaleString()}</td>
                    <td className="text-right">
                      {getValueRashodi(true, kat)?.toLocaleString()}
                    </td>
                    <td className="text-right bg-gradient-to-l from-blue-200">
                      {(
                        getValuePrihodi(true, kat) - getValueRashodi(true, kat)
                      )?.toLocaleString()}
                    </td>
                  </tr>
                );
              })}

              <tr className=" border-b-4  font-semibold text-3xl bg-gradient-to-l from-slate-300 to-slate-0">
                <td>ukupno</td>
                <td>{allSum(true).toLocaleString()}</td>
                <td className="text-right">
                  {allSumRashodi(true).toLocaleString()}
                </td>
                <td className="text-right">
                  {(allSum(true) - allSumRashodi(true)).toLocaleString()}
                </td>
              </tr>

              <tr className="text-sm text-slate-500 ">
                <td>neproknjizeno</td>
                <td>{allSum(false).toLocaleString()}</td>
                <td className="text-right">
                  {allSumRashodi(false).toLocaleString()}
                </td>
                <td className="text-right">
                  {(allSum(false) - allSumRashodi(false)).toLocaleString()}
                </td>
              </tr>

              <tr className="text-sm text-slate-500 ">
                <td>ukupno</td>
                <td className="text-right">
                  {(allSum(true) + allSum(false)).toLocaleString()}
                </td>
                <td className="text-right">
                  {(
                    allSumRashodi(true) + allSumRashodi(false)
                  ).toLocaleString()}
                </td>
                <td>
                  {(
                    allSum(true) +
                    allSum(false) -
                    allSumRashodi(true) -
                    allSumRashodi(false)
                  ).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  return <div>Ivan</div>;
};

export default Cards;
