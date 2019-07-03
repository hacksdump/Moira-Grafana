import React, { PureComponent } from 'react';
import { PanelEditorProps, PanelOptionsGroup, FormField } from '@grafana/ui';

import { MoiraOptions } from '../types';

interface Props {
  id: string;
  name: string;
  targets: string[];
  warn_value: number;
  error_value: number;
}

interface State {
  warn_value?: number;
  error_value?: number;
}

export class MoiraConfigItem extends PureComponent<Props, State> {
  static keypressTimeout: any = null;
  constructor(props) {
    super(props);
    this.state = {
      warn_value: this.props.warn_value,
      error_value: this.props.error_value,
    };
  }
  changedValue = (event, param: 'warn' | 'error') => {
    const id = this.props.id;
    const newLimit = parseInt(event.target.value);
    if (Number.isNaN(newLimit)) {
      return;
    }
    clearTimeout(MoiraConfigItem.keypressTimeout);
    let updatedData = Object.assign({}, this.props) as any;
    if (param === 'warn') {
      const newWarningLimit = !!newLimit ? newLimit : 0;
      this.setState({
        warn_value: newWarningLimit,
      });
      updatedData['warn_value'] = newWarningLimit;
    } else if (param === 'error') {
      const newErrorLimit = !!newLimit ? newLimit : 0;
      this.setState({
        error_value: newErrorLimit,
      });
      updatedData['error_value'] = newErrorLimit;
    }
    MoiraConfigItem.keypressTimeout = setTimeout(() => {
      fetch('http://localhost:8081/api/trigger/' + id, {
        method: 'PUT',
        body: JSON.stringify(updatedData),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() =>
        console.log('Moira trigger updated with value ' + updatedData['warn_value'] + ' ' + updatedData['error_value'])
      );
    }, 2000);
  };
  render() {
    const targets = this.props.targets.map(target => <li key={target}>{target}</li>);
    return (
      <PanelOptionsGroup title={this.props.name}>
        <div>
          <h4>Targets: </h4>
          <ul>{targets}</ul>
        </div>
        <div>
          <FormField
            label={'Warn'}
            value={this.state.warn_value}
            onChange={event => this.changedValue(event, 'warn')}
          ></FormField>
          <FormField
            label={'Error'}
            value={this.state.error_value}
            onChange={event => this.changedValue(event, 'error')}
          ></FormField>
        </div>
      </PanelOptionsGroup>
    );
  }
}

function MoiraConfigBox(props) {
  const configItems = props.triggers.map(item => <MoiraConfigItem key={item.id} {...item} />);
  return <div>{configItems}</div>;
}
export class MoiraPanelEditor extends PureComponent<PanelEditorProps<MoiraOptions>> {
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
    return (
      <div>
        <MoiraConfigBox triggers={triggers} />
      </div>
    );
  }
}
