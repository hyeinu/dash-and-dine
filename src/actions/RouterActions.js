import { browserHistory } from 'react-router'

const RouterActions = {
  route(path){
    browserHistory.push(path);
  }
}

export default RouterActions
