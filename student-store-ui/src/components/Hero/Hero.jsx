import * as React from 'react';
import './Hero.css';

export default function Hero() {

  return (
    <div className="hero">
      <div className="content">
        <div className="intro">
          <h1>Hello!</h1>
          <p>hi welcome</p>
        </div>
        <div className="media">
          <img
            src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
            alt="hero"
            class="hero-img"
          />
        </div>
      </div>
    </div>
  );
}