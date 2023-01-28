import { green } from '../colors/green';
import { red } from '../colors/red';
import { blue } from '../colors/blue';
import { teal } from '../colors/teal';
import { orange } from '../colors/orange';

export const success = green[200];
export const error = red[300];
export const primary = blue[300];
export const secondary = teal[200];
export const warning = orange[200];

export const palette = {
  primary: blue[300],
  info: blue[200],
  secondary: teal[200],
  success: green[200],
  error: red[300],
  warning: orange[200],
} as const;
