import React, { PureComponent } from 'react';
import { PanelEditorProps, FormField, PanelOptionsGroup, PanelOptionsGrid } from '@grafana/ui';

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
export class MoiraPanelEditor extends PureComponent<PanelEditorProps<MoiraOptions>> {
  onTextChanged = event => {
    this.props.onOptionsChange({
      ...this.props.options,
      someText: event.target.value,
    });
  };
  render() {
    const triggers = this.props.options.triggers;
    return (
      <div>
        <PanelOptionsGroup title="Trigger Choices">
          <MoiraConfigBox triggers={triggers} />
        </PanelOptionsGroup>
        <PanelOptionsGrid>
          <FormField label="graphite" onChange={this.onTextChanged} />
        </PanelOptionsGrid>
      </div>
    );
  }
}
