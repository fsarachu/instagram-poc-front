import React, {Component} from 'react';

import './App.css';
import FbSdkProvider from "../FbSdkProvider/FbSdkProvider";

class App extends Component {
    render() {
        return (
            <FbSdkProvider>
                <div className="App">
                    <h1>Hello World</h1>
                </div>
            </FbSdkProvider>
        );
    }
}

export default App;
