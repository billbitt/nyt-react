// Include React
var React = require("react");

// define the component 
var Search = React.createClass({
    // lifecycle events 
    getInitialState: function() {
        return {term: ""};
    },

    handleChange: function(event) {
        this.setState({ term: event.target.value });
    },

    handleSubmit: function(event) {
        event.preventDefault();

        this.props.setTerm(this.state.term);  // so this updates the parent?
        this.setState({ term: "" });
    },

    // render the component
    render: function() {
        return (
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">Search</h2>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <label>Search Term</label>
                            <input 
                                value={this.state.term}
                                type="text" 
                                className="form-control text-center" 
                                id="term"
                                onChange={this.handleChange}
                                required
                            />
                            <label>Start Year</label>
                            <input 
                                type="text" 
                                name="startYear" 
                                placeholder="YYYYMMDD"
                                className="form-control text-center" 
                            />
                            <label>End Year</label>
                            <input 
                                type="text" 
                                name="endYear" 
                                placeholder="YYYYMMDD"
                                className="form-control text-center" 
                            />
                            <p></p>
                            <button 
                                className="btn btn-primary" 
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
  }
});

// Export the component out for use in other files
module.exports = Search;
