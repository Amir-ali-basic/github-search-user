import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'bar2d',
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most forked',
        theme: 'fusion',
        bgImage: 'linear-gradient(to right, #2ec8be, #57d89f)',
        yAxisName: 'Forks',
        xAxisName: 'Repos',
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '18px',
        canvasbgColor: '#242733',
        canvasbgAlpha: '0',
        canvasBorderThickness: '0',
        showAlternateHGridColor: '0',
        canvasColor: '#FFFFFF',
        bgColor: '#242733',
        color: '#FFFFFF',
        outCnvBaseFontColor: 'black',
        baseFontColor: '#black',
        paletteColors: '#63E7DE',
        outCnvBaseFontColor: '#FFFFFF',
        baseFontColor: 'black',
        valueFontColor: '#FFFFFF',
        chartLeftMargin: '40',
        chartTopMargin: '40',
        chartRightMargin: '40',
        chartBottomMargin: '40',
        paletteColors: '#10A0A7',
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
