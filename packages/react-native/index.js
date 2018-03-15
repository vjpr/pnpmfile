import update from 'pnpmfile-read-package-json'
import def from './def'

export default function(pkg) {
  update(def)(pkg)
}
