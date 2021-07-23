import LandingPage from './landing';
import { Provider } from 'react-redux';
import ResultsContainer from './results_container';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';

function Root({ store }) {
  return (
    <Provider store={ store }>
      <HashRouter>
        <div className="page-content">
          <header>
            <Link to="/"><h1>The Duckfeeding Project</h1></Link>
            <strong><Link to="/results">Results</Link></strong> 
          </header> 

          <div>
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/results" component={ResultsContainer}/>
            </Switch>
          </div>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default Root;
