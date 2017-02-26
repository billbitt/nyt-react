var React = require("react");

var Result = require("./miniComponents/result.js");

var RESULTS_LIST = [
    {
        title: "test title",
        link: "test link"
    }
];
// need to import results list.  probably as a prop from the parent.  will need to push up with sudo from search and then back down to results as a prop 

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
                            {RESULTS_LIST.map(function(item, index){
                                return (
                                    <Result 
                                        key={index}
                                        title={item.title}
                                        link={item.link}
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