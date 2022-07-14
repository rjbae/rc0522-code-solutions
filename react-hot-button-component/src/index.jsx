import React from 'react';
import ReactDOM from 'react-dom/client';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let count = this.state.clickCount;
    count++;
    this.setState({ clickCount: count });
  }

  render() {
    const count = this.state.clickCount;
    if (count <= 3) {
      return <button onClick={this.handleClick} className='btn'>Hot Button</button>;
    } else if (count <= 6) {
      return <button onClick={this.handleClick} className='btn btn-cool'>Hot Button</button>;
    } else if (count <= 9) {
      return <button onClick={this.handleClick} className='btn btn-neutral'>Hot Button</button>;
    } else if (count <= 12) {
      return <button onClick={this.handleClick} className='btn btn-warm'>Hot Button</button>;
    } else if (count <= 15) {
      return <button onClick={this.handleClick} className='btn btn-hot'>Hot Button</button>;
    } else if (count <= 18) {
      return <button onClick={this.handleClick} className='btn btn-fuego'>Hot Button</button>;
    }
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<HotButton />);
