var React = require("react");

var SavedArticle = require("./miniComponents/savedArticle.js");

// NOTE: need to import articles using Axio and helpers

var Saved = React.createClass({

    render: function() {
        return (
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">Saved Articles</h2>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            {this.props.saved.map(function(item, index){
                                return (
                                    <SavedArticle 
                                        key={index}
                                        articleId={item._id}
                                        title={item.title}
                                        link={item.link}
                                        dateCreated={item.dateCreated}
                                        notes={item.notes}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})

module.exports = Saved;