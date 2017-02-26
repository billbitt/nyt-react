// Include React
var React = require("react");

// define the component 
var Search = React.createClass({

  // render the component
  render: function() {

    return (
        <div className="col-lg-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">Search</h2>
                </div>
                <div className="panel-body">
                    <form action="/action_page.php">
                        <label>Topic</label>
                        <input type="text" name="topic" placeholder="Topic"></input>
                        <label>Start Year</label>
                        <input type="text" name="startYear" placeholder="MM/DD/YYYY"></input>
                        <label>End Year</label>
                        <input type="text" name="endYear" placeholder="MM/DD/YYYY"></input>
                        <button className="btn btn-default" type="submit" value="Submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
});

// Export the component out for use in other files
module.exports = Search;
