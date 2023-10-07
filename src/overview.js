//about section
import bmoGif from './assets/bmo.gif';
import nodeSvg from './assets/nodejs-original.svg';
import jsSvg from './assets/javascript-original.svg';
import javaSvg from './assets/java-original.svg';
import htmlSvg from './assets/html5-original.svg';
import cssSvg from './assets/css3-original.svg';
import npmSvg from './assets/npm-original-wordmark.svg';
import ubuntuSvg from './assets/ubuntu-plain.svg';
import vscSvg from './assets/vscode-original.svg';

export default function overviewInit() {
  const intro = document.querySelector('main #content #container');
  intro.className = 'dynamic-page';
  document.querySelector('p#active-title').textContent = 'OVERVIEW.md';

  const bmo = document.createElement('img');
  bmo.className = 'gif';
  bmo.src = bmoGif;

  const tagline = document.createElement('h1');
  tagline.textContent = 'Yes. Hi.';

  intro.append(bmo, tagline);
  intro.appendChild(document.createElement('hr'));

  const abtTt = document.createElement('h2');
  abtTt.className = 'sub-title';
  abtTt.textContent = '👾 About Me:';
  intro.append(abtTt);
  intro.appendChild(document.createElement('h3')).textContent =
    "I'm a Web Developer ⚒️ in progress ⚒️";
  intro.appendChild(document.createElement('p')).textContent =
    '- 👟 pursuing a Computer Science degree';
  intro.appendChild(document.createElement('p')).textContent =
    '- 🧭 crafting webdev experiences and soaking up knowledge along the way';
  intro.appendChild(document.createElement('p')).textContent =
    '- 🫱🏼‍🫲🏼 interning at Codsoft';

  const bmoQuote = document.createElement('div');
  bmoQuote.id = 'bmo-quote';
  bmoQuote.appendChild(document.createElement('h2')).textContent =
    '"Sometimes life is scary and dark.';
  bmoQuote.appendChild(document.createElement('h2')).textContent =
    'That is why we must find the light."';
  bmoQuote.appendChild(document.createElement('h3')).textContent = '- BMO';
  intro.append(bmoQuote);

  const skillsTt = document.createElement('h2');
  skillsTt.className = 'sub-title';
  skillsTt.textContent = '⚙️ Skills and Tools:';
  intro.append(skillsTt);
  intro.appendChild(document.createElement('p')).textContent =
    '- 🏛️ proficient in structuring web content using HTMl, and always striving to improve my markup for better semantics and accessibility.';
  intro.appendChild(document.createElement('p')).textContent =
    '- 🎨 actively learning new CSS techniques to style web pages creatively';
  intro.appendChild(document.createElement('p')).textContent =
    '- 🤹🏻‍♀️ dedicated to expanding my skills to create interactive and dynamic web interfaces with Javascript.';

  const icons = document.createElement('div');
  icons.id = 'tools-container';
  icons.appendChild(document.createElement('img')).src = nodeSvg;
  icons.appendChild(document.createElement('img')).src = jsSvg;
  icons.appendChild(document.createElement('img')).src = javaSvg;
  icons.appendChild(document.createElement('img')).src = htmlSvg;
  icons.appendChild(document.createElement('img')).src = cssSvg;
  icons.appendChild(document.createElement('img')).src = npmSvg;
  icons.appendChild(document.createElement('img')).src = ubuntuSvg;
  icons.appendChild(document.createElement('img')).src = vscSvg;
  intro.append(icons);
}
