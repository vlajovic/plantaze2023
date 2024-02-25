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

import afterDeleteEvent from "../api/afterDeleteEvent";
import defaultRequest from "../api/defaultRequest";
// import { baseUrl } from "../constants/Navigation";
const baseUrl = process.env.REACT_APP_BASE_URL;

const data = new DataManager({
  adaptor: new UrlAdaptor(),
  insertUrl: baseUrl + "/prihodi/insert",
  removeUrl: baseUrl + "/prihodi/delete",
  updateUrl: baseUrl + "/prihodi/update",
  url: baseUrl + "/prihodi",
});

const PrihodiDatagrid = ({ year }) => {
  const [artikliKategorije, setArtikliKategorije] = useState([]);

  useLayoutEffect(() => {
    defaultRequest("artikliKategorije").then((data) => {
      setArtikliKategorije(data);
    });
  }, []);

  async function actionComplete(args) {
    if (args.type === "actionComplete" && args.requestType === "delete") {
      console.log(args);
      await afterDeleteEvent("Prihodi", args.data[0]);
    }
  }

  const autoCompleteData = [
    {
      artikal: "lepotica",
    },
    {
      artikal: "ajdared",
    },
    {
      artikal: "lozovaca",
    },
    {
      artikal: "vino sardone",
    },
    {
      artikal: "ostalo",
    },
    {
      artikal: "zlatni delises",
    },
    {
      artikal: "vranac",
    },
    {
      artikal: "rajnski rizling",
    },
    {
      artikal: "vino roze",
    },
    {
      artikal: "cacanska rodna",
    },
    {
      artikal: "granny smith",
    },
    {
      artikal: "vino rizling",
    },
    {
      artikal: "jabukovaca",
    },
    {
      artikal: "vino vranac",
    },
    {
      artikal: "sardone",
    },
    {
      artikal: "stanley",
    },
    {
      artikal: "sljivovica",
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

  let inpuEle;
  let autoCompleteIns;

  const createArtikliFn = () => {
    inpuEle = document.createElement("input");
    return inpuEle;
  };
  const destroyArtikliFn = () => {
    autoCompleteIns.destroy();
  };
  const readArtikliFn = () => {
    return autoCompleteIns.value;
  };
  const writeArtikliFn = (args) => {
    autoCompleteIns = new AutoComplete({
      allowCustom: true,
      value: args.rowData[args.column.field],
      dataSource: autoCompleteData,
      fields: { value: "artikal", text: "artikal" },
    });
    autoCompleteIns.appendTo(inpuEle);
  };

  const daParams = {
    create: createArtikliFn,
    destroy: destroyArtikliFn,
    read: readArtikliFn,
    write: writeArtikliFn,
  };

  const artikliFn = (args) => {
    return artikli.includes(getValue("value", args));
  };

  const artikliRules = {
    okValue: [artikliFn, "Unesite postojeci artikal"],
    required: true,
  };

  const footerSum = (props) => {
    const value = props.Sum.toLocaleString();
    return <span>Ukupno: {value}</span>;
  };

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
            field="kategorija"
            headerText="Kategorija"
            width="120"
            allowEditing={false}
          />
          <ColumnDirective
            field="artikal"
            headerText="Artikal"
            width="150"
            edit={daParams}
            validationRules={artikliRules}
          />
          <ColumnDirective field="kupac" headerText="Kupac" width="150" />

          <ColumnDirective
            field="kolicina"
            textAlign="right"
            headerText="Kolicina"
            width="150"
            format=""
            editType="numericedit"
            validationRules={minValueValidation}
          />
          <ColumnDirective
            field="cena"
            headerText="Cena"
            textAlign="right"
            width="150"
            format=""
            editType="numericedit"
            validationRules={minValueValidation}
          />
          <ColumnDirective
            field="iznos"
            allowEditing={false}
            textAlign="right"
            headerText="Iznos"
            width="150"
            editType="numericedit"
            format=""
          />
          <ColumnDirective
            field="completed"
            headerText="Completed"
            width="150"
            displayAsCheckBox={true}
            editType="booleanedit"
            textAlign="center"
          />
          <ColumnDirective field="detalji" headerText="Detalji" />
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

export default PrihodiDatagrid;
