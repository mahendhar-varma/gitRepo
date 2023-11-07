import './App.css'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import SpecificDetails from './components/SpecificDetails/index'
import Page from './components/Page'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/page2" component={Page} />
      <Route path="/details/:title/:repo" component={SpecificDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
