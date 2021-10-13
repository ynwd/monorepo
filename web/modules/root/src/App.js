import './App.css'
import { Header, Button } from "@fstr/components"

function App() {
  return (
    <div className="App">
      <Header text="from root" />
      <Button
        label="Button"
        onClick={() => { }}
      />
    </div>
  )
}

export default App