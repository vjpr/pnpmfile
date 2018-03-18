'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escape = escape;
exports.unescape = unescape;
// @foo/bar -> @foo--bar
function escape(packageName) {
  return packageName.replace('/', '--');
}

// @foo--bar -> @foo/bar
function unescape(folder) {
  // TODO(vjpr): Brittle.
  return folder.replace('--', '/');
}
//# sourceMappingURL=escape-package-name.js.map