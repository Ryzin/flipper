/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {FlipperServer, FlipperServerConfig} from 'flipper-common';

export function initializeRenderHost(
  flipperServer: FlipperServer,
  flipperServerConfig: FlipperServerConfig,
) {
  window.FlipperRenderHostInstance = {
    processId: 0,
    isProduction: window.flipperConfig.debug !== true,
    readTextFromClipboard() {
      // TODO:
      return undefined;
    },
    writeTextToClipboard(_text: string) {
      // TODO:
    },
    async importFile() {
      throw new Error('Not implemented');
    },
    async exportFile() {
      throw new Error('Not implemented');
    },
    openLink(url: string) {
      window.open(url, '_blank');
    },
    registerShortcut(_shortcut, _callback) {
      // TODO:
      return () => {};
    },
    hasFocus() {
      return document.hasFocus();
    },
    onIpcEvent(event) {
      console.warn('onIpcEvent not available', event);
    },
    sendIpcEvent(event, ..._args: any[]) {
      console.warn('sendIpcEvent not available', event);
    },
    shouldUseDarkColors() {
      return !!(
        window.flipperConfig.theme === 'dark' ||
        (window.flipperConfig.theme === 'system' &&
          window.matchMedia?.('(prefers-color-scheme: dark)'))
      );
    },
    restartFlipper() {
      // TODO: restart server as well
      window.location.reload();
    },
    loadDefaultPlugins: getDefaultPluginsIndex,
    serverConfig: flipperServerConfig,
    GK(gatekeeper) {
      return flipperServerConfig.gatekeepers[gatekeeper] ?? false;
    },
    flipperServer,
  };
}

function getDefaultPluginsIndex() {
  // TODO:
  return {};
  // eslint-disable-next-line import/no-unresolved
  // const index = require('../defaultPlugins');
  // return index.default || index;
}