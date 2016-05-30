var React = require('react');
var PropTypes = React.PropTypes;

var ShowAddButton = React.createClass({

    render: function() {
        var classString, buttonText;
        if(this.props.displayed){
            classString = 'btn btn-block btn-default';
            buttonText = 'Cancel'
        }else{
            classString = 'btn btn-block btn-success';
            buttonText = 'Create New Item'
        }
        return (
            <button className={classString} onClick={this.props.onToggleForm}>{buttonText}</button>
        );
    }

});

module.exports = ShowAddButton;
