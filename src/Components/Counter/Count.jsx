import React from 'react';
import "./Count.css";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Count = ({ icon, number, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <div className='count' ref={ref}>
      <div className="count-icon">
        <img src={icon} alt="" />
      </div>
      <div className="count-up">
        {inView ? <CountUp end={number} duration={4} separator="" /> : null}
      </div>
      <div className="count-text">{text}</div>
    </div>
  );
}

export default Count;
