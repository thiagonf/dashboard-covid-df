import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
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
        colors: ["#77B6EA", "#545454"],
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
    var dead = this.state.data.results.map(function (item) {
      return item.deaths;
    });
    var infected = this.state.data.results.map(function (item) {
      return item.confirmed;
    });
    const series = [
      {
        name: "Infectados",
        data: infected.reverse(),
      },
      {
        name: "Mortos",
        data: dead.reverse(),
      },
    ];

    return series;
  }

  set_axis() {
    var axis = this.state.data.results.map(function (item) {
      return item.date.slice(-5);
    });

    return axis.reverse();
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://brasil.io/api/dataset/covid19/caso/data/?city=Luzi%C3%A2nia"
      );
      const json = await response.json();
      this.setState({ data: json });
      const xaxis = this.set_axis();
      const series = this.set_series();
      this.setState({ series: series });
      const newxAxis = { ...this.state.options.xaxis, categories: xaxis };
      const newOptions = { ...this.state.options, xaxis: newxAxis };
      this.setState({ options: newOptions });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
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

export default ChartAll;
