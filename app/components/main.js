// Include React
var React = require("react");

var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");

var helpers = require("./utils/helpers");

var Main = React.createClass({

    // lifecycle methods 
    getInitialState: function() {
        return {
            results: [], 
            saved: []
        }
    },

    componentDidMount: function() {  // when component lrenders... 
        // load all the saved articles 
        helpers.getArticles()
            .then(function(response) {
                console.log("get response received");
                if (response !== this.state.saved) {
                    console.log("Saved", response.data);
                    this.setState({ saved: response.data});
                };
            }.bind(this));
    },

    updateSavedList: function() {  // 
        console.log("updating saved list");
        // reload all the saved articles 
        helpers.getArticles()
            .then(function(response) {
                console.log("get response received");
                if (response !== this.state.saved) {
                    console.log("Saved", response.data);
                    this.setState({ saved: response.data});
                };
            }.bind(this));
    },

    setTerm: function(term) {

        helpers.runQuery(term, this.state.startDate, this.state.endDate)
            .then(function(data) {
                if (data !== this.state.results) {

                    console.log("New results:", data);

                    this.setState({ results: data });

                };
            }.bind(this));
    },

    // Here we render the component
    render: function() {

        return (
            <div className="container">
                <div className="jumbotron">
                    <h2>NYT Article Saver</h2>
                    <p><em>Search for articles.  Save your favorites.</em></p>
                </div>

                <div className="row">

                    <div className="col-lg-2"></div>

                    <div className="col-lg-8">
                        <div className="row">
                            <Search setTerm={this.setTerm} />
                            <Results 
                                results={this.state.results} 
                                updateSavedList={this.updateSavedList}
                            />
                            <Saved 
                                saved={this.state.saved} 
                                updateSavedList={this.updateSavedList}
                            />
                        </div>
                    </div>
                    
                    <div className="col-lg-2"></div>

                </div>
            </div>
        ); 
    }
});

// Export the component back for use in other files
module.exports = Main;
