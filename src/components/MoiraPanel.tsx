import _ from 'lodash';
import React, { PureComponent } from 'react';
import { PanelProps, GraphWithLegend, LegendDisplayMode } from '@grafana/ui';
import { MoiraOptions } from '../types';

function MoiraConfigItem(props) {
  const targets = props.target.targets.map(target => <li key={target}>{target}</li>);
  return (
    <div style={{ border: '1px solid #555', borderRadius: '5px', padding: '5px', margin: '5px', width: '50%' }}>
      <div>
        <h4>Warn Value:</h4>
        <span>{props.target.warn_value}</span>
      </div>
      <div>
        <h4>Targets: </h4>
        <ul>{targets}</ul>
      </div>
    </div>
  );
}

function MoiraConfigBox(props) {
  const configItems = props.triggers.map(item => <MoiraConfigItem key={item.id} target={item} />);
  return <div style={{ display: 'flex' }}>{configItems}</div>;
}

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
    const triggers = this.props.options.triggers;
    if (this.props.data.series) {
      return (
        <div>
          <GraphWithLegend
            timeRange={this.props.timeRange}
            width={200}
            height={200}
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

          <MoiraConfigBox triggers={triggers} />
        </div>
      );
    } else {
      return <div>No datasource added</div>;
    }
  }
}
