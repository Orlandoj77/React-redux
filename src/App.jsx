import { Component, ReactNode, useState } from 'react';
import Sidebar from './components/sidebar';
import Video from './components/video';
import {Provider} from 'react-redux';
import store from "store";


class App extends Component {
  render(){
    return (
    <div>
    <Provider store={store}>  
    <Video />
    <Sidebar />
    </Provider>
    </div>
  )
}
}

 

export default App
