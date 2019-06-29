import React, { PureComponent } from 'react';
import { PanelEditorProps, FormField, PanelOptionsGroup } from '@grafana/ui';

import { MoiraOptions } from '../types';

export class MoiraPanelEditor extends PureComponent<PanelEditorProps<MoiraOptions>> {
  onTextChanged = event => {
    this.props.onOptionsChange({
      ...this.props.options,
      someText: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <PanelOptionsGroup title="Trigger Choices">
          <FormField label="graphite" onChange={this.onTextChanged} />
        </PanelOptionsGroup>
        <PanelOptionsGroup title="Graph Options">
          <FormField label="graph" />
        </PanelOptionsGroup>
      </div>
    );
  }
}
