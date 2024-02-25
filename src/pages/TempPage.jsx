// import React from "react";
// import {
//   GridComponent,
//   ColumnDirective,
//   ColumnsDirective,
//   Page,
//   Inject,
//   Filter,
//   Group,
//   Edit,
//   Sort,
//   Toolbar,
//   ToolbarItems,
//   rowDataBound,
//   actionBegin,
//   CommandColumn,
// } from "@syncfusion/ej2-react-grids";
// import { getValue } from "@syncfusion/ej2-base";
// import { Ajax } from "@syncfusion/ej2-base";
// import { DataManager, UrlAdaptor, Query } from "@syncfusion/ej2-data";

// import { baseUrl } from "../constants/Navigation";

// import afterDelete from "../api/afterDeleteEvent";

// const data = new DataManager({
//   adaptor: new UrlAdaptor(),
//   insertUrl: baseUrl + "/prihodi/insert",
//   removeUrl: baseUrl + "/prihodi/delete",
//   updateUrl: baseUrl + "/prihodi/update",
//   url: baseUrl + "/prihodi",
// });
// const PrihodiDatagrid = ({ year }) => {
//   async function actionComplete(args) {
//     if (args.type === "actionComplete" && args.requestType === "save") {
//       // console.log(args.data);
//       const response = await afterDelete(args.data);
//       console.log(response);
//     }
//   }

//   const editOptions = {
//     allowEditing: true,
//     allowAdding: true,
//     allowDeleting: true,
//   };
//   const toolbarOptions = ["Add", "Edit", "Delete", "Update", "Cancel"];

//   const query = new Query().addParams("year", year);

//   console.log(year);

//   const commands = [
//     {
//       buttonOption: {
//         content: "Details",
//         cssClass: "e-flat",
//       },
//     },
//   ];

//   const commandClick = (args) => {
//     alert(JSON.stringify(args.rowData));
//   };

//   return (
//     <div className="w-fit rounded-xl">
//       <GridComponent
//         commandClick={commandClick}
//         actionComplete={actionComplete}
//         dataSourceChanged={() => console.log("event called")}
//         height="600px"
//         dataSource={data}
//         query={query}
//         // allowPaging={true}
//         // pageSettings={{ pageSize: 3 }}
//         toolbar={toolbarOptions}
//         editSettings={editOptions}
//         // allowFiltering={true}
//         allowGrouping={true}
//         // allowSorting={true}
//       >
//         <ColumnsDirective>
//           {/* <ColumnDirective field="_id" headerText="Id" width="100" /> */}
//           <ColumnDirective
//             field="datum"
//             headerText="Datum"
//             type="Date"
//             format="d/MMM/y"
//             width="120"
//             editType="datepickeredit"
//             textAlign="right"
//           />
//           <ColumnDirective
//             field="kategorija"
//             headerText="Kategorija"
//             width="120"
//           />
//           <ColumnDirective field="artikal" headerText="Artikal" width="150" />
//           <ColumnDirective field="kupac" headerText="Kupac" width="150" />
//           <ColumnDirective
//             field="kolicina"
//             textAlign="right"
//             headerText="Kolicina"
//             width="150"
//             format=""
//             editType="numericedit"
//           />
//           <ColumnDirective
//             field="cena"
//             headerText="Cena"
//             textAlign="right"
//             width="150"
//             format=""
//             editType="numericedit"
//           />
//           <ColumnDirective
//             field="iznos"
//             allowEditing={false}
//             textAlign="right"
//             headerText="Iznos"
//             width="150"
//             editType="numericedit"
//             format=""
//           />
//           <ColumnDirective
//             field="completed"
//             headerText="Completed"
//             width="150"
//             displayAsCheckBox={true}
//             editType="booleanedit"
//             textAlign="center"
//           />
//           <ColumnDirective field="detalji" headerText="Detalji" />
//           <ColumnDirective
//             headerText="Commands"
//             width="120"
//             commands={commands}
//           />
//           {/* <ColumnDirective field="OrderID" headerText="Invoice Id" textAlign="Right" width="100" /> */}
//           {/* <ColumnDirective field="CustomerID" headerText="Customer Id" width="150" />
//                         <ColumnDirective field="ShipCountry" headerText="Ship Country" />
//                         <ColumnDirective field="ShipName" headerText="Ship Name" />
//                         <ColumnDirective field="Freight" textAlign="Right" width="100" />
//                         <ColumnDirective
//                             field="OrderDate"
//                             type="Date"
//                             width="150"
//                             editType="datepickeredit"
//                             format="yMd"
//                         /> */}
//         </ColumnsDirective>
//         <Inject services={[Edit, Toolbar, Group, CommandColumn]} />
//       </GridComponent>
//     </div>
//   );
// };

// export default PrihodiDatagrid;
