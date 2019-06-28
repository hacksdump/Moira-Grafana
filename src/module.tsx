import _ from 'lodash';
import React, { PureComponent } from 'react';
import { PanelProps, ReactPanelPlugin, PanelEditorProps, PanelOptionsGroup, FormField } from '@grafana/ui';

function MoiraConfigItem(props) {
  const targets = props.targets.map(target => <li>{target}</li>);
  return (
    <div>
      <div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
      <div>
        <h4>Targets: </h4>
        <ul>{targets}</ul>
      </div>
      <div>
        <h4>Warn Value:</h4>
        <span>{props.warn_value}</span>
      </div>
    </div>
  );
}

function MoiraConfigBox(props) {
  const configItems = props.items.map(item => <MoiraConfigItem target={item}></MoiraConfigItem>);
  return <div>{configItems}</div>;
}

export class MyPanel extends PureComponent<PanelProps<MyPanelOptions>> {
  constructor(props) {
    super(props);
    this.state = {
      triggers: null,
    };
  }
  componentDidMount() {
    fetch('http://moira.local/api/trigger/search?onlyProblems=false&p=0&size=20&text=').then(result => {
      result.json().then(data => {
        this.setState({ triggers: data.list });
      });
    });
  }
  render() {
    const triggers = this.state.triggers;

    return <MoiraConfigBox items={triggers} />;
  }
}

interface MyPanelOptions {
  bigText: string;
}

export class MyPanelEditorProps extends PureComponent<PanelEditorProps<MyPanelOptions>> {
  onBigTextChanged = evt => {
    this.props.onChange({
      ...this.props.options,
      bigText: evt.target.value,
    });
  };

  render() {
    const { bigText } = this.props.options;

    return (
      <PanelOptionsGroup title="My options">
        <FormField label="Big text" onChange={this.onBigTextChanged} value={bigText} />
      </PanelOptionsGroup>
    );
  }
}

export const reactPanel = new ReactPanelPlugin<MyPanelOptions>(MyPanel);
reactPanel.setEditor(MyPanelEditorProps);
reactPanel.setDefaults({ bigText: 'GrafanaCon' });
