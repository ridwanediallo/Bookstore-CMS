import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const percentage = 66;

const progressBar = () => {
  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 0.25,

          strokeLinecap: 'butt',

          // Text size
          textSize: '16px',

          pathTransitionDuration: 0.5,


          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          textColor: '#f88',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
      ;
    </div>
  );
}

export default progressBar
