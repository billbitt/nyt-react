// Include React
var React = require("react");

// define the component 
var Search = React.createClass({
    // lifecycle events 
    getInitialState: function() {
        return {
            term: "",
            startDate: "",
            endDate: ""
        };
    },

    handleTermChange: function(event) {
        this.setState({ term: event.target.value });
    },

    handleStartDateChange: function(event) {
        this.setState({ startDate: event.target.value });
    },

    handleEndDateChange: function(event) {
        this.setState({ endDate: event.target.value });
    },

    handleSubmit: function(event) {
        event.preventDefault();

        this.props.searchArticles(this.state.term, this.state.startDate, this.state.endDate); 

        this.setState({ 
            term: "",
            startDate: "",
            endDate: ""
        });

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
                                onChange={this.handleTermChange}
                                type="text" 
                                className="form-control text-center" 
                                id="term"
                                required
                            />
                            <label>Start Year (YYYYMMDD)</label>
                            <input 
                                value={this.state.startDate}
                                onChange={this.handleStartDateChange}
                                type="text" 
                                className="form-control text-center" 
                            />
                            <label>End Year (YYYYMMDD)</label>
                            <input 
                                value={this.state.endDate}
                                onChange={this.handleEndDateChange}
                                type="text" 
                                name="endYear" 
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
