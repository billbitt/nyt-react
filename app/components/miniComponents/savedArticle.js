var React = require("react");
//require("./savedArticle.css");

var helpers = require("../utils/helpers");

var SavedArticle = React.createClass({

    // lifecycle events 
    getInitialState: function() {
        return {notes: this.props.notes};
    },

    handleChange: function(event) {
        this.setState({ notes: event.target.value });
    },

    handleDelete: function(event) {
        event.preventDefault();

        helpers.deleteArticle(this.props.articleId);  // save this article to the database 

        this.props.updateSavedList();
    },

    handleUpdate: function(event) {
        event.preventDefault();

        helpers.updateArticle(this.props.articleId, this.state.notes);  // update this article to the database 
    },

    render: function(){
        return (
            <div className="col-lg-12">
                <div className="panel panel-default saved-article">
                    <div className="article-info">
                        <a href={this.props.link}>{this.props.title}</a>
                        <p>{this.props.dateCreated}</p>
                        <form onSubmit={this.handleDelete}>
                            <button className="btn btn-danger">Delete</button>
                        </form>
                        <p></p>
                    </div>
                    <div className="article-notes">
                        <form onSubmit={this.handleUpdate}>
                            <textarea 
                                value={this.state.notes}
                                onChange={this.handleChange}
                            ></textarea>
                            <button 
                                className="btn btn-default" 
                                type="submit"
                            >
                                Update
                            </button>
                        <p></p>    
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }
}) 

module.exports = SavedArticle;