var React = require("react");

var Result = require("./miniComponents/result.js");

var Results = React.createClass({

    render: function(){
        return (
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">Search Results</h2>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            {this.props.results.map(function(item, index){
                                return (
                                    <Result 
                                        key={index}
                                        title={item.headline.main}
                                        link={item.web_url}
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

module.exports = Results;