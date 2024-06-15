import { series, parallel } from 'gulp'
import { clean, buildModules, buildFull } from './task'

// export default series(clean, parallel(buildModules, buildFull))
export default parallel(buildModules, buildFull)
