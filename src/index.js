import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, RaisedButton } from 'material-ui';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return (
          <div className='container'>
            <MuiThemeProvider>
              <RaisedButton label="Whatever" primary={true} />
            </MuiThemeProvider>
          </div>
        )
    }
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'))
