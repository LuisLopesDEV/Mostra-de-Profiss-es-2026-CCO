import './style.css'
import './corte.css'
import gaguinhoUrl from './assets/gaguinho.png'
import { GameView } from './game-view.js'
import { MatchController } from './match-controller.js'

const view = new GameView()
const gaguinho = new Image()
gaguinho.src = gaguinhoUrl
const debug = new URLSearchParams(location.search).get('debug') === '1'
if (debug) {
  const { addTrackingDiagnostics } = await import('./tracking-debug.js')
  new MatchController(view, gaguinho, addTrackingDiagnostics()).start()
} else {
  new MatchController(view, gaguinho).start()
}
