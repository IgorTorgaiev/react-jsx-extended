import React from 'react';
import ReactDOM from 'react-dom';

const element = <h2>I enjoy programming</h2>;
ReactDOM.render(element, document.getElementById('one'));

// Other way to use the coding: createElement()

const myelement = React.createElement('h2', {}, 'I love programming');
ReactDOM.render(myelement, document.getElementById('two'));

const sentence = <p>Totally, I have spent over {1+3} years to programming studies. But, the time period I spent for my hard work over programming skills is {3+3} months</p>;
ReactDOM.render(sentence, document.getElementById('three'));

const equation = <h4>How much is 20 + 20? - Well, my answer is {30+10}.</h4>;
ReactDOM.render(equation, document.getElementById('four'));