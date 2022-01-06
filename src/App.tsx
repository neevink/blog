import React from 'react';
import './App.css';
import Post from "./components/Post/Post"
import Page from "./components/Page/Page";

function App() {
    return (
        <div className="App">
            <Page>
                <Post/>
                <Post/>
                <Post/>
            </Page>
        </div>
    );
}

export default App;
