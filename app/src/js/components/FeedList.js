var React = require('react');
var PropTypes = React.PropTypes;
var FeedItem = require('./FeedItem');

var FeedList = React.createClass({
    render: function() {
        var feedItems = this.props.items.map(function(item, index) {
            return (<FeedItem itemKey={item.key} key={index} title={item.title} desc={item.description} voteCount={item.voteCount} onVote={this.props.onVote} />)
        }.bind(this));
        return (
            <ul className="list-group container">
                {feedItems}
            </ul>
        );
    }

});

module.exports = FeedList;
