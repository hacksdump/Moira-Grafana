import _ from 'lodash';
import React, { PureComponent } from 'react';
import { PanelProps, GraphWithLegend, LegendDisplayMode } from '@grafana/ui';
import { MoiraOptions } from '../types';

export class MoiraPanel extends PureComponent<PanelProps<MoiraOptions>> {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    fetch('http://moira.local/api/trigger/search?onlyProblems=false&p=0&size=20&text=', {
      mode: 'cors',
    }).then(result => {
      result.json().then(data => {
        this.props.onOptionsChange({
          ...this.props.options,
          triggers: data.list,
        });
      });
    });
  }
  render() {
    const avg = Math.round(_.meanBy(this.props.data.series[0].rows, point => point[0]) * 100) / 100;
    const current = Math.round(this.props.data.series[0].rows.slice(-1)[0][0] * 100) / 100;
    if (this.props.data.series) {
      return (
        <div style={{ display: 'flex' }}>
          <div style={{ width: '85%' }}>
            <GraphWithLegend
              timeRange={this.props.timeRange}
              width={200}
              height={this.props.height + 1}
              series={[
                {
                  yAxis: 1,
                  label: this.props.data.series[0].name,
                  color: 'green',
                  isVisible: true,
                  data: this.props.data.series[0].rows,
                },
              ]}
              isLegendVisible={true}
              displayMode={LegendDisplayMode.List}
              onSeriesColorChange={() => console.log('seriescolorchange')}
              onToggleSort={() => console.log('togglesort')}
              placement={'right'}
            />
          </div>
          <div style={{ width: '15%', marginLeft: '5%' }}>
            <table>
              <tbody>
                <tr>
                  <th>Avg</th>
                  <th>Current</th>
                </tr>
                <tr>
                  <td>{avg}</td>
                  <td>{current}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return <div>No datasource added</div>;
    }
  }
}
