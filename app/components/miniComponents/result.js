var React = require("react");
//require("./result.css");

var helpers = require("../utils/helpers");

var Result = React.createClass({

    handleSubmit: function(event) {
        event.preventDefault();

        helpers.saveArticle(this.props.title, this.props.link);  // save this article to the database 

        this.props.updateSavedList();
    },


    render: function(){
        return (
            <div className="col-lg-12">
                <div className="panel panel-default result">
                    <a href={this.props.link}>{this.props.title}</a>
                    <form className="pull-right" onSubmit={this.handleSubmit}>
                        <button className="btn btn-success">Save</button>
                    </form>
                </div>
            </div>
        );
    }
})

module.exports = Result;