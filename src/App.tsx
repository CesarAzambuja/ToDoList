

import './App.css'
import './global.css'
import { Header } from './components/Header'
import { InputNewItem } from './components/InputNewItem'
import { Item } from './components/Item'

function App() {


  return (
    <div>
      <Header />
      <div className="container">
        <InputNewItem />

        <main className="totals">
          <div className="created">
            <h3>Tarefas criadas <span>0</span></h3>
          </div>
          <div className="finalized">
            <h3>Concluídas <span>0</span></h3>
          </div>
        </main>
        <div className="itemCollection">
          <ul>
            <Item />
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App
