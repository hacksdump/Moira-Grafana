import _ from 'lodash';
import React, { PureComponent } from 'react';
import { PanelProps, Gauge } from '@grafana/ui';
import { MoiraOptions } from '../types';

function MoiraConfigItem(props) {
  const targets = props.target.targets.map(target => <li key={target}>{target}</li>);
  return (
    <div>
      <div>
        <h3>{props.target.name}</h3>
        <p>{props.target.desc}</p>
      </div>
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
  return <div>{configItems}</div>;
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
    const latestValue = this.props.data.series[0].rows[0][0];

    return (
      <div>
        <div>
          <h3>Latest Stat: </h3>
          {latestValue}
        </div>
        {this.props.options.someText}
        <MoiraConfigBox triggers={triggers} />
      </div>
    );
  }
}
