// Include React
var React = require("react");

var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");

var Main = React.createClass({

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
                        <Search />
                        <Results />
                        <Saved />
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
