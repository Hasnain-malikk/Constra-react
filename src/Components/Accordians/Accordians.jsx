import Accordion from 'react-bootstrap/Accordion';
import "./Accordians.css"

function Accordians() {
  return (
    <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header id='heade' >SAFETY</Accordion.Header>
        <Accordion.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>CUSTOMER SERVICE</Accordion.Header>
        <Accordion.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>INTEGRITY</Accordion.Header>
        <Accordion.Body>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default Accordians;