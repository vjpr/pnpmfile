// @foo/bar -> @foo--bar
export function escape(packageName) {
  return packageName.replace('/', '--')
}

// @foo--bar -> @foo/bar
export function unescape(folder) {
  // TODO(vjpr): Brittle.
  return folder.replace('--', '/')
}
