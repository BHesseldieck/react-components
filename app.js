var groceries = ['Lobster', 'Cheese', 'Bananas', 'Rice', 'Beer'];

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {

    var style = {
      fontWeight: this.state.hover ? 'bold' : 'none'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}> {this.props.item} </li>
    );
  }
}


var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);


var App = (props) => (
  <div>
    <h1>Grocery List</h1>
    <GroceryList items={groceries} />
  </div>
  );

ReactDOM.render(<App />, document.getElementById('app'));


