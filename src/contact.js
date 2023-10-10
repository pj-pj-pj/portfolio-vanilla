import pandaGif from './assets/panda.gif';
import githubPng from './assets/socials-icons/github-sign.png';
import instagramPng from './assets/socials-icons/instagram.png';
import linkedinPng from './assets/socials-icons/linkedin.png';

export default function contactInit() {
  document.querySelector('p#active-title').textContent = 'CONTACT.md';

  const intro = document.querySelector('main #content #container');
  intro.className = 'dynamic-page';

  const panda = document.createElement('img');
  panda.className = 'gif';
  panda.src = pandaGif;

  const tagline = document.createElement('h1');
  tagline.textContent = 'Get in touch.';

  intro.append(panda, tagline, document.createElement('hr'));

  const containerGrid = document.createElement('div');
  containerGrid.id = 'contact-container';
  const form = document.createElement('form');
  form.action = '';
  form.id = 'contact-form';
  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'name';
  nameLabel.textContent = '🏷️ Name';
  const name = document.createElement('input');
  name.placeholder = 'Your name';
  name.id = 'name';
  nameLabel.append(name);
  const emailLabel = document.createElement('label');
  emailLabel.htmlFor = 'email';
  emailLabel.textContent = '📮 Email';
  const email = document.createElement('input');
  email.placeholder = 'Email';
  email.type = 'email';
  email.id = 'email';
  emailLabel.append(email);
  const msgLabel = document.createElement('label');
  msgLabel.htmlFor = 'msg';
  msgLabel.textContent = '💭 Message';
  const msg = document.createElement('textarea');
  msg.placeholder = 'Message';
  msg.id = 'msg';
  msg.rows = '7';
  msgLabel.append(msg);
  const send = document.createElement('button');
  send.textContent = '🖖🏻 Send';
  form.append(nameLabel, emailLabel, msgLabel);

  const socials = document.createElement('div');
  socials.id = 'socials';
  const linkedin = document.createElement('span');
  const linkedinIcon = document.createElement('img');
  linkedinIcon.src = linkedinPng;
  const linkedinLabel = document.createElement('a');
  linkedinLabel.href = 'https://www.linkedin.com/in/paula-joyce-ucol-876958291';
  linkedinLabel.target = '_blank';
  linkedinLabel.textContent = 'linkedin.com/paula-joyce-ucol';
  linkedin.append(linkedinIcon, linkedinLabel);

  const github = document.createElement('span');
  const githubIcon = document.createElement('img');
  githubIcon.src = githubPng;
  const githubLabel = document.createElement('a');
  githubLabel.target = '_blank';
  githubLabel.href = 'https://github.com/pj-pj-pj';
  githubLabel.textContent = 'github.com/pj-pj-pj';
  github.append(githubIcon, githubLabel);

  const instagram = document.createElement('span');
  const instagramIcon = document.createElement('img');
  instagramIcon.src = instagramPng;
  const instagramLabel = document.createElement('a');
  instagramLabel.target = '_blank';
  instagramLabel.href = 'instagram.com/paula-joyce-ucol';
  instagramLabel.textContent = 'instagram.com/paula-joyce-ucol';
  instagram.append(instagramIcon, instagramLabel);

  socials.append(linkedin, github, instagram);

  containerGrid.append(form, send, socials);
  intro.appendChild(containerGrid);
}
