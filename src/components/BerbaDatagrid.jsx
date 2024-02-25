import React, { useLayoutEffect, useState } from "react";

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Group,
  Edit,
  Toolbar,
  Aggregate,
  AggregatesDirective,
  AggregateDirective,
  AggregateColumnsDirective,
  AggregateColumnDirective,
} from "@syncfusion/ej2-react-grids";

import { getValue } from "@syncfusion/ej2-base";
import { DataManager, UrlAdaptor, Query } from "@syncfusion/ej2-data";
import { AutoComplete } from "@syncfusion/ej2-dropdowns";

import defaultRequest from "../api/defaultRequest";
import afterDeleteEvent from "../api/afterDeleteEvent";
// import { baseUrl } from "../constants/Navigation";
const baseUrl = process.env.REACT_APP_BASE_URL;

const data = new DataManager({
  adaptor: new UrlAdaptor(),
  insertUrl: baseUrl + "/berba/insert",
  removeUrl: baseUrl + "/berba/delete",
  updateUrl: baseUrl + "/berba/update",
  url: baseUrl + "/berba",
});

const BerbaDatagrid = ({ year }) => {
  const [artikliKategorije, setArtikliKategorije] = useState([]);

  useLayoutEffect(() => {
    defaultRequest("artikliKategorije").then((data) => {
      setArtikliKategorije(data);
    });
  }, []);

  async function actionComplete(args) {
    if (args.type === "actionComplete" && args.requestType === "delete") {
      console.log(args);
      await afterDeleteEvent("Berba", args.data[0]);
    }
  }

  const autoCompleteData = [
    {
      artikal: "ajdared",
    },
    {
      artikal: "zlatni delises",
    },
    {
      artikal: "granny smith",
    },
  ];

  const artikli = artikliKategorije.map((item) =>
    item["artikal"].toLowerCase()
  );

  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
  };
  const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel"];

  const query = new Query().addParams("year", year);

  const minValueValidation = { min: 0 };

  let inputEle;
  let autoCompleteIns;

  const createKategorijeFn = () => {
    inputEle = document.createElement("input");
    return inputEle;
  };
  const destroyKategorijeFn = () => {
    autoCompleteIns.destroy();
  };
  const readKategorijeFn = () => {
    return autoCompleteIns.value;
  };
  const writeKategorijeFn = (args) => {
    autoCompleteIns = new AutoComplete({
      allowCustom: true,
      value: args.rowData[args.column.field],
      dataSource: autoCompleteData,
      fields: { value: "artikal", text: "artikal" },
    });
    autoCompleteIns.appendTo(inputEle);
  };

  const daParams = {
    create: createKategorijeFn,
    destroy: destroyKategorijeFn,
    read: readKategorijeFn,
    write: writeKategorijeFn,
  };

  const kategorijeFn = (args) => {
    return artikli.includes(getValue("value", args));
  };

  const kategorijeRules = {
    okValue: [kategorijeFn, "Unesite postojeci artikal"],
    required: true,
  };

  const footerSum = (props) => {
    const value = props.Sum.toLocaleString();
    return <span>Ukupno: {value}</span>;
  };

  const numericParams = { params: { decimals: 2, step: 0.1 } };

  return (
    <div className="w-fit rounded-xl">
      <GridComponent
        actionComplete={actionComplete}
        dataSourceChanged={() => console.log("event called")}
        height="600px"
        dataSource={data}
        query={query}
        toolbar={toolbarOptions}
        editSettings={editOptions}
        allowGrouping={true}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="datum"
            headerText="Datum"
            type="Date"
            format="d/M/y"
            width="170"
            editType="datepickeredit"
            textAlign="right"
            defaultValue={new Date(Date.now()).toLocaleDateString()}
          />
          <ColumnDirective
            field="artikal"
            headerText="Artikal"
            width="120"
            edit={daParams}
            validationRules={kategorijeRules}
          />
          <ColumnDirective
            field="kolicina"
            textAlign="right"
            headerText="Kolicina"
            width="150"
            editType="numericedit"
            format=""
            // edit={numericParams}
          />
          <ColumnDirective field="opis" headerText="Opis" />
        </ColumnsDirective>
        <AggregatesDirective>
          <AggregateDirective>
            <AggregateColumnsDirective>
              <AggregateColumnDirective
                field="iznos"
                type="Sum"
                // format="C2"
                groupCaptionTemplate={footerSum}
              />
            </AggregateColumnsDirective>
          </AggregateDirective>
        </AggregatesDirective>
        <Inject services={[Edit, Toolbar, Group, Aggregate]} />
      </GridComponent>
    </div>
  );
};

export default BerbaDatagrid;
