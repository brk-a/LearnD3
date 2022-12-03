import vega from 'vega';
import vegalite from 'vega-lite';
import vl from 'vega-lite-api';
// import {vl} from '@vega/vega-lite-api-v5'
import {Handler} from 'vega-tooltip';
import {config} from './config'
import {getData} from './getData'
import {viz} from './viz'

vl.register(vega, vegalite, {
  view: {renderer: 'svg'},
  init: view => {view.tooltip(new Handler().call)}
})

const App = () =>  {
  const run = async () => {
    const marks = viz.data(await getData())
      .width(window.innerWidth)
      .height(window.innerHeight)
      .autosize({type: 'fit', contains: 'padding'})
      .config(config)
    
    document.body.appendChild(await marks.render())
  }
  return (
    <>
    {run}
    </>
  )
}

export default App
