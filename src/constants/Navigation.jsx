import Plum from "../icons/plum.png";
import Apple from "../icons/apple.png";
import Grapes from "../icons/grapes.png";
import OrchardMain from "../icons/orchardMain.png";
import Income from "../icons/income.png";
import Exspense from "../icons/expense.png";
import Business from "../icons/business.png";
import Tractor from "../icons/tractor.png";
import Berba from "../icons/berba.png";
import BarChart from "../icons/bar-chart.png";
import Wine from "../icons/wine.png";
import MoneyTranactions from "../icons/money-transaction.png";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "pregled",
    label: "Pregled",
    path: "/",
    icon: <img src={MoneyTranactions} alt="" width="30" height="30" />,
    last: true,
  },
  {
    key: "prihodi",
    label: "Prihodi",
    path: "/prihodi",
    icon: <img src={Income} alt="" width="30" height="30" />,
    last: false,
  },
  {
    key: "rashodi",
    label: "Rashodi",
    path: "/rashodi",
    icon: <img src={Exspense} alt="" width="30" height="30" />,
    last: false,
  },
  {
    key: "rad",
    label: "Rad",
    path: "/rad",
    icon: <img src={Tractor} alt="" width="30" height="30" />,
    last: false,
  },
  {
    key: "berba",
    label: "Berba",
    path: "/berba",
    icon: <img src={Berba} alt="" width="30" height="30" />,
    last: false,
  },
  {
    key: "prerada",
    label: "Prerada",
    path: "/prerada",
    icon: <img src={Wine} alt="" width="30" height="30" />,
    last: true,
  },
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <img src={BarChart} alt="" width="30" height="30" />,
    last: true,
  },
  {
    key: "deleted",
    label: "Deleted",
    path: "/deleted",
    icon: <img src={Wine} alt="" width="30" height="30" />,
    last: true,
  },
];
