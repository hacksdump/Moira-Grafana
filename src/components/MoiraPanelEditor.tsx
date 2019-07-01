import React, { PureComponent } from 'react';
import { PanelEditorProps, FormField, PanelOptionsGroup, PanelOptionsGrid, Button } from '@grafana/ui';

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
          <Button />
        </PanelOptionsGroup>
        <PanelOptionsGrid>
          <FormField label="graph" />
        </PanelOptionsGrid>
      </div>
    );
  }
}
