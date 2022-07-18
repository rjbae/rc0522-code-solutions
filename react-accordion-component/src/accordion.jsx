import React from 'react';

const accordionData = [
  {
    name: 'HTML',
    description: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.'
  },
  {
    name: 'CSS',
    description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    name: 'JS',
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

  // handleClick(event) {
  // }

  render() {
    const accordionInfo = accordionData.map(language => {
      return <p key={language.name} className='accordion-text'>{language.description}</p>;
    });

    return (
    <div className='container'>
      <div>
        <button className='HTML'>Hypertext Markup Language</button>
        {accordionInfo}
      </div>
      <div>
        <button className='CSS'>Cascading Style Sheet</button>
        {accordionInfo}
      </div>
      <div>
        <button className='JS'>JavaScript</button>
        {accordionInfo}
      </div>
    </div>
    );
  }
}

export default Accordion;
