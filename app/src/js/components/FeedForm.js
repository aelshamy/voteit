var React = require('react');
var ReactDOM = require('react-dom');

var FeedForm = React.createClass({
    handleForm: function(e) {
        e.preventDefault();
        var newItem = {
            title: ReactDOM.findDOMNode(this.refs.title).value,
            description: ReactDOM.findDOMNode(this.refs.desc).value,
            voteCount: 0
        };
        ReactDOM.findDOMNode(this.refs.feedForm).reset();
        this.props.onNewItem(newItem);
    },
    render: function() {
        var display = this.props.displayed ? 'block': 'none',
            style = {display: display};
        return (
            <form id="feedForm" ref="feedForm" action="#" className="container" style={style} onSubmit={this.handleForm}>
                <div className="form-group">
                    <input ref='title' type="text" className="form-control" placeholder="Title" />
                    <input ref='desc' type="text" className="form-control" placeholder="Description"/>
                    <button type="submit" className="btn btn-block btn-primary">Add</button>
                </div>
            </form>
        );
    }

});

module.exports = FeedForm;
