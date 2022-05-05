import React, { Component } from 'react';

class Counter extends React.Component {
  // //Remove the Local State
  // state = {
  //   value: this.props.counter.value,
  //   tags: ['tag1', 'tag2', 'tag3'],
  //   // ImageUrl: 'https://picsum.photos/200',
  // };

  // for RenderTag();
  // state = {
  //   count: 0,
  //   tags: [],
  //   // ImageUrl: 'https://picsum.photos/200',
  // };

  // //oop style
  // styles = {
  //   fontSize: 10,
  //   fontWeight: 'bold',
  // };

  render() {
    // let classes = 'badge m-2 badge-';
    // classes += this.state.count === 0 ? 'warning' : 'primary';

    console.log(this.props);
    console.log('Counters-Rendered');
    return (
      <React.Fragment>
        {/* <img src={this.state.ImageUrl} alt="" /> */}

        <div>
          <h1>{this.props.children}</h1>
          <span
            style={{ fontSize: 10, fontWeight: 'bold' }}
            //   className="badge badge-primary m-2"
            className={this.getBadgeClasses()}
          >
            {this.formatCount()}
          </span>
          <button
            // //Remove the Local State
            // onClick={() => this.handleIncrement({ id: this.state.value })}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
          {/* <ul>
            {this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul> */}
        </div>
        {/* for RenderTag()
        <div>
          {this.state.tags.length === 0 && 'Please Create new Tag!'}
          {this.RenderTags()}
        </div> */}
      </React.Fragment>
    );
  }

  // RenderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }
  componentWillUnmount() {
    console.log('Counter-Unmount');
  }
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    // //Remove the Local State
    // classes += this.state.value === 0 ? 'warning' : 'primary';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount() {
    // //Remove the Local State
    // const { value: count } = this.state;
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
    // return count === 0 ? <h1>Zero</h1> : count;
  }

  // handleIncrement = () => {
  //   console.log('Increment Clicked', this);
  //   this.setState({ count: this.state.count + 1 });
  // };

  // //passing event arguments
  // //Remove the Local State
  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // handleDelete = () => {
  //   console.log('Event Handler Called');
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
}

export default Counter;
