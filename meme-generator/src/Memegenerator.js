import React, { Component } from 'react';

class Memegenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      // We now have to initialize state so that it saves a top text, a
      // bottom text and a random image, which is already supplied
      topText: '',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: [],
    };
    //We need to remember to bind the method in the constructor — a common gotcha for React developers.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   Next, we make an API call to the provided URL and save the data returned
  //   (which is an array found in response.data.memes) to a new state property called allMemeImgs.
  // When we need to load data from an endpoint to use in our component,
  // a good place to make the request is the componentDidMount() lifecycle method. As soon as the component mounts,
  // we use the native fetch() function to call to the provided URL.

  componentDidMount() {
    //ensure that data is fetched at the beginning
    fetch('https://api.imgflip.com/get_memes') //call to URL
      .then((response) => response.json()) //turn promise into JS object
      .then((response) => {
        const { memes } = response.data; //pull memes array from response.data
        // console.log(memes[0]); // check data is present
        this.setState({ allMemeImgs: memes }); // set allMemeImgs state
      });
  }

  //   Now, we create the onChange handler, which will update the corresponding
  //  state on every change of the input field.
  // First, we create a handleChange() function which receives an event.

  handleChange(event) {
    console.log('Working!');
    // We will now use these to update state. As we are not interested in what the previous state was,
    // we can just provide an object in which we set the [name] to the value typed into the input field.
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length); // get a random int (index in the array)
    const randMemeImg = this.state.allMemeImgs[randNum].url; // get the meme from that index
    this.setState({ randomImg: randMemeImg }); // set `randomImg` to the `.url` of the random item I grabbed
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          {/* We create two input fields which both have the type text and appropriate name attributes 
        (topText and bottomText). 
        Rather than using labels, we use placeholders: 'Top Text' and 'Bottom Text'.
        
        Lastly, in order to make this a controlled form, 
        we set the value as equal to the current value in state with
        {this.state.topText} and {this.state.bottomText}. */}

          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        {/* Displaying a meme image alongside the top and bottom text */}
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default Memegenerator;
