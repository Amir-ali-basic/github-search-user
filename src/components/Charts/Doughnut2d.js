import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Staras per language',
        theme: 'fusion',
        showPercentValues: 0,
        bgImage: 'linear-gradient(to right, #2ec8be, #57d89f)',
        canvasbgColor: '#F6C43F',
        canvasbgAlpha: '100',
        canvasBorderThickness: '0',
        showAlternateHGridColor: '0',
        canvasColor: '#FFFFFF',
        bgColor: '#242733',
        color: '#FFFFFF',
        outCnvBaseFontColor: 'black',
        baseFontColor: '#black',
        paletteColors: '#10A0A7, #46BFA5, #C62057,#DC7075,#ABC8C9',
        outCnvBaseFontColor: '#FFFFFF',
        baseFontColor: 'black',
        valueFontColor: '#FFFFFF',
        chartLeftMargin: '40',
        chartTopMargin: '40',
        chartRightMargin: '40',
        chartBottomMargin: '40',
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
