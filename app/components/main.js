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
            startDate: "",
            endDate: "",
            results: [], 
            saved: []
        }
    },

    componenetDidMount: function() {  // when component lrenders... 
        helpers.getArticles()
            .then(function(response) {
                console.log(response);
                if (response !== this.state.saved) {
                    console.log("Saved", response.data);
                    this.setState({ saved: response.data});
                };
            }.bind(this));
    },

    componentDidUpdate: function() {  // if the component changes...
        
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
                            <Results results={this.state.results} />
                            <Saved saved={this.state.saved} />
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
