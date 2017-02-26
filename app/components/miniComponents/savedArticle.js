var React = require("react");
//require("./savedArticle.css");

var SavedArticle = React.createClass({
    render: function(){
        return (
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <a className="article-link" href={this.props.link}>{this.props.title}</a>
                    <p>{this.props.dateCreated}</p>
                    <button className="btn btn-danger delete-btn">Delete</button>
                    <form>
                        <textarea placeholder="Enter Comments Here" defaultValue={this.props.notes}></textarea>
                    </form>
                </div>
            </div>
        );
    }
})

module.exports = SavedArticle;