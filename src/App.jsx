import './App.css'
import LineChart from './componints/LineChart/LineChart'
import Nabver from './componints/Nabver/Nabver'
import Phones from './componints/Phones/Phones'
import PriceOptions from './componints/PriceOptions/PriceOptions'

function App() {
  

  return (
    <>
    <Nabver></Nabver>
    <PriceOptions></PriceOptions>

    <div className='md:ml-72'>
    <LineChart></LineChart>
    </div>
    <Phones></Phones>
    </>
  )
}

export default App
