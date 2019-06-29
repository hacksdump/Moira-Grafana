import { TimeSeries, TimeRange, ValueMapping, Threshold } from '@grafana/ui';

export interface MoiraOptions {
  valueMappings: ValueMapping[];
  maxValue: number;
  minValue: number;
  showThresholdLabels: boolean;
  showThresholdMarkers: boolean;
  layout: string;
  thresholds: Threshold[];
  valueOptions: SingleStatValueOptions;
  showLines: boolean;
  showBars: boolean;
  showPoints: boolean;
  someText: string;
  triggers: any;
}

export interface SingleStatValueOptions {
  unit: string;
  suffix: string;
  stat: string;
  prefix: string;
  decimals?: number | null;
}

export interface GraphProps {
  timeSeries: TimeSeries;
  timeRange: TimeRange;
  width: number;
  height: number;
  options: MoiraOptions;
  onInterpolate: (value: string, format?: string) => string;
}

export const defaults: MoiraOptions = {
  minValue: 0,
  maxValue: 100,
  layout: 'biggauge',
  showThresholdMarkers: true,
  showThresholdLabels: false,
  showLines: true,
  showBars: false,
  showPoints: false,
  valueOptions: {
    prefix: '',
    suffix: '',
    decimals: null,
    stat: 'avg',
    unit: 'none',
  },
  valueMappings: [],
  thresholds: [{ index: 0, value: -Infinity, color: 'green' }],
  someText: 'Hello',
  triggers: [],
};
