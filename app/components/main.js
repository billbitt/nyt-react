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
                if (response !== this.state.saved) {
                    
                    this.setState({ saved: response.data});
                };
            }.bind(this));
    },

    updateSavedList: function() {  // 
        
        // reload all the saved articles 
        helpers.getArticles()
            .then(function(response) {
                if (response !== this.state.saved) {
                    
                    this.setState({ saved: response.data});
                };
            }.bind(this));
    },

    searchArticles: function(term, startDate, endDate) {

        helpers.runQuery(term, startDate, endDate)
            .then(function(data) {
                if (data !== this.state.results) {

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
                            <Search searchArticles={this.searchArticles} />
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
