import scrollama from 'scrollama';

const scroller = scrollama();

export const movement = scroller
  .setup({
    step: '.step',
    offset: 0.6,
    debug: false,
  })
  .onStepEnter((response) => {
    console.log(response);
    response.element.classList.add('active');
    response.element.classList.remove('inactive');
  })
  .onStepExit((response) => {
    console.log(response);
    response.element.classList.add('inactive');
    response.element.classList.remove('active');
  });
window.addEventListener('resize', scroller.resize);
