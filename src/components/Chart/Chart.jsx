import React, { Component } from 'react';
import c3 from 'c3';
import './Chart.css';
import PropTypes from 'prop-types';

class Chart extends Component {
    static propTypes = {
      columns: PropTypes.arrayOf([PropTypes.string, PropTypes.number]),
      chartType: PropTypes.string,
    };

    componentDidMount() {
    // When the component mounts the first time we update
    // the chart.
      this.updateChart();
    }

    componentDidUpdate() {
    // When we receive a new prop then we update the chart again.
      this.updateChart();
    }

    updateChart() {
      const { columns, chartType } = this.props;
      c3.generate({
        bindto: '#chart',
        data: {
          columns,
          type: chartType
        }
      });
    }

    render() {
      return <div id="chart" />;
    }
}

export default Chart;
