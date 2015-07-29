import React from "react";
import DocumentTitle from "react-document-title";
import { APP_NAME } from "../constants/AppConstants";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <DocumentTitle title={APP_NAME}>
                <div>
                    <h1>{APP_NAME}</h1>
                </div>
            </DocumentTitle>
        );
    }
}

export default App;
