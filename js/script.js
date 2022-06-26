"use strict";

const ball = document.querySelector('.ball');
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('mousedown', (event) => {
   let ballCoordTop = event.clientY - ball.clientWidth;
   let ballCoordLeft = event.clientX - ball.clientWidth;
   
   if (ballCoordTop < 0) {ballCoordTop = 0;} 
   if (ballCoordLeft < 0) {ballCoordLeft = 0;}
   if (ballCoordLeft + ball.clientWidth > wrapper.clientWidth) {
     ballCoordLeft = wrapper.clientWidth - ball.clientWidth;
   }
   if (ballCoordTop + ball.clientWidth > wrapper.clientHeight) {
     ballCoordTop = wrapper.clientHeight - ball.clientWidth;
   }

   ball.style.left = ballCoordLeft + 'px';
   ball.style.top = ballCoordTop + 'px';
 });


      


