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
    const accordionId = accordionData.id;
    if (event.target.key === accordionId) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }

  render() {
    const accordionInfo = accordionData.map(language => {
      return (
        <div key={language.id}>
          <button>{language.name}</button>
          <p className='accordion-text'>{language.description}</p>
        </div>
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
