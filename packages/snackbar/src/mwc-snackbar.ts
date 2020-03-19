/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {customElement} from 'lit-element';

import {SnackbarBase} from './mwc-snackbar-base.js';
import {style} from './mwc-snackbar-css.js';
import {withStyles} from '@material/mwc-base/base-element.js';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-snackbar': Snackbar;
  }
}

@customElement('mwc-snackbar')
export class Snackbar extends SnackbarBase {
  static styles = style;
}

export const snackbarWithStyles = (userStyles: string) =>
  withStyles(Snackbar, 'm-snackbar', userStyles, style);
