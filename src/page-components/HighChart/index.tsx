import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import editorData from "../../util/block-data.json";
import { IOptions } from "../../util/types";
export default () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={editorData.data.options as IOptions}
    />
  );
};
