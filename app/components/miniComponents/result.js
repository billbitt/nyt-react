var React = require("react");
//require("./result.css");

var Result = React.createClass({
    render: function(){
        return (
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <a className="result-link" href={this.props.link}>{this.props.title}</a>
                    <button className="btn btn-success save-btn">Save</button>
                </div>
            </div>
        );
    }
})

module.exports = Result;