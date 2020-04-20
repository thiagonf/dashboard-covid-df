import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chart_All extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#77B6EA", "#545454", "#9BFF75"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Covid-19 Luziânia",
          align: "center",
          offsetY: 10,
          style: {
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: undefined,
          },
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: [],
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
      series: [],
    };
  }

  set_series() {
    const series = [
      {
        name: "Infectados",
        data: [28, 29, 33, 36, 32, 32, 33],
      },
      {
        name: "Mortos",
        data: [12, 11, 14, 18, 17, 13, 13],
      },
      {
        name: "Curados",
        data: [2, 1, 4, 8, 7, 1, 3],
      },
    ];

    return series;
  }

  set_axis() {
    const axis = [
      "19/04",
      "20/04",
      "21/04",
      "22/04",
      "23/04",
      "24/04",
      "25/04",
      "26/04",
    ];

    return axis;
  }

  render() {
    this.state.series = this.set_series();
    this.state.options.xaxis.categories = this.set_axis();
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
        />
      </div>
    );
  }
}

export default Chart_All;
