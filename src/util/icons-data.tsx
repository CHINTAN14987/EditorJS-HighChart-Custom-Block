import BackupTableIcon from "@mui/icons-material/BackupTable";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { SearchI } from "./types/index";
import ShareIcon from "@mui/icons-material/Share";
import ImportExportIcon from "@mui/icons-material/ImportExport";
export const searchData: SearchI[] = [
  {
    displayIcon: <DashboardIcon />,
    title: "Layout",
    forward: <KeyboardArrowRightIcon />,
  },
  {
    displayIcon: <TextFieldsIcon />,
    title: "Text & Media",
    forward: <KeyboardArrowRightIcon />,
  },
  {
    displayIcon: <BackupTableIcon />,
    title: "Tables",
    forward: <KeyboardArrowRightIcon />,
  },
];

export const navData: Omit<SearchI, "forward">[] = [
  { title: "Export", displayIcon: <ImportExportIcon /> },
  { title: "Share", displayIcon: <ShareIcon /> },
];
