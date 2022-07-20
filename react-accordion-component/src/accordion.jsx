import React from 'react';

const accordionData = [
  {
    id: '1',
    name: 'Hypertext Markup Language',
    description: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
  },
  {
    id: '2',
    name: 'Cascading Style Sheet',
    description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    id: '3',
    name: 'JavaScript',
    description: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.'
  }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === accordionData.id) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  }

  render() {
    const accordionInfo = accordionData.map((language, index) => {
      return (
        <React.Fragment key={language.id}>
          <button onClick={this.handleClick} className={language.id}>{language.name}</button>
          <p className='accordion-text'>{language.description}</p>
        </React.Fragment>
      );
    });

    return (
    <div className='container'>
      {accordionInfo}
    </div>
    );
  }
}

export default Accordion;
