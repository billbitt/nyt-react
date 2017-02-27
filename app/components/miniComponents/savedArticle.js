var React = require("react");
//require("./savedArticle.css");

var helpers = require("../utils/helpers");

var SavedArticle = React.createClass({

    handleDelete: function(event) {
        event.preventDefault();

        helpers.deleteArticle(this.props.articleId);  // save this article to the database 
    },

    handleUpdate: function(event) {
        event.preventDefault();

        helpers.updateArticle(this.props.articleId);  // save this article to the database 
    },

    render: function(){
        return (
            <div className="col-lg-12">
                <div className="panel panel-default saved-article">
                    <a href={this.props.link}>{this.props.title}</a>
                    <p>{this.props.articleId}</p>
                    <p>{this.props.dateCreated}</p>
                    <form onSubmit={this.handleDelete}>
                        <button className="btn btn-danger pull-right">Delete</button>
                    </form>
                    <form onSubmit={this.handleUpdate}>
                        <textarea defaultValue={this.props.notes}></textarea>
                    </form>
                </div>
            </div>
        );
    }
}) 

module.exports = SavedArticle;