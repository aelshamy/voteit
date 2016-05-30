var React = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm = require('./FeedForm'),
    FeedList = require('./FeedList'),
    _ = require('lodash'),
    firebase = require('firebase'),
    config = {
        apiKey: "AIzaSyCfd3_2ZIw94RzObOb0CHbphNMBKftb2fM",
        authDomain: "feeditems.firebaseapp.com",
        databaseURL: "https://feeditems.firebaseio.com/",
        storageBucket: "project-8405197902243064027.appspot.com",
  };
  firebase.initializeApp(config);


var Feed = React.createClass({
    loadData:function(){
        var ref = firebase.database().ref();
        ref.on('value', function(snapshot){
            var items = [], sorted = [];

            snapshot.forEach(function(itemSnap){
                var item = itemSnap.val();
                item.key = itemSnap.key;
                items.push(item);
            });


            sorted = _.sortBy(items, function(item){
                return -item.voteCount;
            });
            console.log(this);
            this.setState({
                items:sorted
            });
        }.bind(this));
    },
    componentDidMount: function(){
            this.loadData();
    },
    getInitialState:function () {
        return {
            items:[],
            formDisplayed:false
        }
    },
    onNewItem: function(newItem) {

        var ref = firebase.database().ref();
        ref.push(newItem);
    },
    onVote: function(item) {
        var ref = firebase.database().ref().child(item.key);
        ref.update(item);
    },
    onToggleForm: function() {
        this.setState({
            formDisplayed : !this.state.formDisplayed
        });
    },
    render: function() {
        return (
            <div>
                <div className="container">
                    <ShowAddButton onToggleForm={this.onToggleForm} displayed={this.state.formDisplayed}/>
                </div>
                <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem}/>
                <br/>
                <br/>
                <FeedList items={this.state.items} onVote={this.onVote}/>
            </div>
        );
    }

});

module.exports = Feed;
