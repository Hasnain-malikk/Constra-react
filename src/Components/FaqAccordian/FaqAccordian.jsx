import React from 'react'
import "./FaqAccordian.css"
import Accordion from 'react-bootstrap/Accordion';

const FaqAccordian = () => {
  return (
    <div className='faq-accordian'>
      <div className="faq-head1">CONSTRUCTION GENERAL</div>
      <div className="faq-accordian1">
      <Accordion defaultActiveKey="0" className='faq-acc'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>DOES THE LAW REQUIRE HEAD PROTECTION ON CONSTRUCTION SITES?</Accordion.Header>
        <Accordion.Body className='wwww'>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>WHAT ARE THE FIRST AID REQUIREMENTS FOR SITES?</Accordion.Header>
        <Accordion.Body>
        Anemi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid henderit in voluptate velit esse cillu oris nisi ut aliquip ex ea com matat.
        </Accordion.Body>       
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>WHAT IS AN APPOINTED PERSON?</Accordion.Header>
        <Accordion.Body>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Accordion.Body>
        
      </Accordion.Item>
    </Accordion>
      </div>
      <div className="faq-head2">SAFETY</div>
      <div className="faq-accordian2">
      <Accordion defaultActiveKey="0" className='faq-acc'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
                  MAURIS RHONCUS PRETIUM PORTTITOR CRAS SCELERCIUQUS COMMONDO ODIO ?
        </Accordion.Header>
        <Accordion.Body className='wwww'>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>WHAT ARE THE FIRST AID REQUIREMENTS FOR SITES?</Accordion.Header>
        <Accordion.Body>
        Anemi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid henderit in voluptate velit esse cillu oris nisi ut aliquip ex ea com matat.
        </Accordion.Body>
        
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>WHAT IS AN APPOINTED PERSON?</Accordion.Header>
        <Accordion.Body>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </div>
  )
}

export default FaqAccordian
