import overviewInit from './overview';

const container = document.querySelector('main #content #container');
document.querySelector('#overview-btn').addEventListener('click', () => {
  unchild(container);
  overviewInit();
});

document.querySelector('#projects-btn').addEventListener('click', () => {
  unchild(container);
});

document.querySelector('#resume-btn').addEventListener('click', () => {
  unchild(container);
});

document.querySelector('#contact-btn').addEventListener('click', () => {
  unchild(container);
});

function unchild(parent) {
  var child = parent.firstChild;
  while (child) {
    child.remove();
    child = parent.firstChild;
  }
}

overviewInit();
