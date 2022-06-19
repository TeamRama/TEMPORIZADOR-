import React from 'react';
import './Reloj.css';

const Reloj = () => {

    const countdown = () => {

        const countDate = new Date("12 25, 2022 00:00:00").getTime();

        const now = new Date().getTime();

        const gap = countDate - now;


        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);


        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour;
        document.querySelector(".minute").innerText = textMinute;
        document.querySelector(".second").innerText = textSecond;

    };
setInterval(countdown, 1000);




    return (
 <div className='temporizador'>


<div className="cd-box">
        <p className="numbers day">Time</p><br/>
        <p className="strings ">Dias</p>
      </div>
      <div className="cd-box">
        <p className="numbers hour">Time</p><br/>
        <p className="strings">Horas</p>
      </div>
      <div className="cd-box">
        <p className="numbers minute">Time</p><br/>
        <p className="strings ">Minutos</p>
      </div>
      <div className="cd-box">
        <p className="numbers second">Time</p><br/>
        <p className="strings ">Segundos</p>
      </div>
    </div>
 


);

};



export default Reloj;