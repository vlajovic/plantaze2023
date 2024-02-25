import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Edit,
  Toolbar,
  CommandColumn,
} from "@syncfusion/ej2-react-grids";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";

import retrieveDeleted from "../api/retrieveDeleted";
// import { baseUrl } from "../constants/Navigation";
const baseUrl = process.env.REACT_APP_BASE_URL;

const data = new DataManager({
  adaptor: new UrlAdaptor(),
  removeUrl: baseUrl + "/deletedRashodi/delete",
  url: baseUrl + "/deletedRashodi",
});

const RashodiDatagrid = () => {
  let grid;
  const commands = [
    {
      buttonOption: {
        content: "Vrati u rashode",
        cssClass: "e-flat",
      },
    },
  ];

  async function commandClick(args) {
    await retrieveDeleted("Rashodi", args.rowData).then((resp) =>
      console.log(resp)
    );
    grid.refresh();
  }

  const editOptions = {
    allowDeleting: true,
  };
  const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel"];

  return (
    <div className="w-fit rounded-xl">
      <GridComponent
        ref={(g) => (grid = g)}
        height="250px"
        dataSource={data}
        commandClick={commandClick}
        toolbar={toolbarOptions}
        editSettings={editOptions}
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
          />
          <ColumnDirective
            field="kategorija"
            headerText="Kategorija"
            width="120"
            allowEditing={false}
          />
          <ColumnDirective field="opis" headerText="Opis" width="150" />
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
          <ColumnDirective
            headerText="Commands"
            width="200"
            commands={commands}
          />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, CommandColumn]} />
      </GridComponent>
    </div>
  );
};

export default RashodiDatagrid;
