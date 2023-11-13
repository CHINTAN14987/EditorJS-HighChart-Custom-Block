import { ReactElement } from "react";

export interface ChartI {
  type: string;
  id: string;
  data: IData;
}

export interface SeriesI {
  name: string;
  data: (number | null)[];
}

export interface IData {
  options: IOptions;
}

export interface IOptions {
  chart: {
    type: string;
  };
  title: {
    text: string;
  };
  xAxis: {
    categories: (number | string)[];
  };
  yAxis: {
    title: {
      text: string;
    };
  };
  series: SeriesI[];
}

export interface SearchI {
  displayIcon: ReactElement;
  title: string;
  forward: ReactElement;
}
