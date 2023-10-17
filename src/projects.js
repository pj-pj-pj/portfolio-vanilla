import dogGif from './assets/dog.gif';
import codePng from './assets/code.png';
import visitPng from './assets/external-link.png';
import { projects } from './assets/projects.js';

export default function projInit() {
  document.querySelector('p#active-title').textContent = 'PROJECTS.md';

  const intro = document.querySelector('main #content #container');
  intro.className = 'dynamic-page';

  const dog = document.createElement('img');
  dog.className = 'gif';
  dog.src = dogGif;

  const tagline = document.createElement('h1');
  tagline.textContent = '<///>';

  intro.append(dog, tagline);
  intro.appendChild(document.createElement('hr'));

  loadProjects();
}

async function loadProjects() {
  projects.forEach((project) => {
    const intro = document.querySelector('main #content #container');

    const container = document.createElement('div');
    container.className = 'project-container';

    const name = document.createElement('h2');
    name.className = 'project-title';
    name.textContent = project.name;
    const description = document.createElement('p');
    description.textContent = project.description;

    const detailsContainer = document.createElement('div');

    const githubLinkBtn = document.createElement('div');
    githubLinkBtn.className = 'github-btn';
    githubLinkBtn.appendChild(document.createElement('img')).src = codePng;
    const githubLink = document.createElement('a');
    githubLink.textContent = 'Github Repository';
    githubLink.href = project.githubrepo;
    githubLink.target = '_blank';
    githubLinkBtn.appendChild(githubLink);

    const siteBtn = document.createElement('button');
    siteBtn.className = 'site-btn';
    siteBtn.appendChild(document.createElement('img')).src = visitPng;
    const siteLink = document.createElement('a');
    siteLink.textContent = 'Visit live site';
    siteLink.href = project.siteurl;
    siteLink.target = '_blank';
    siteBtn.appendChild(siteLink);

    const projhr = document.createElement('hr');
    projhr.className = 'project-hr';
    detailsContainer.append(description, githubLinkBtn);
    container.append(detailsContainer, siteBtn);

    siteBtn.addEventListener('click', () => {
      siteLink.click();
    });

    githubLinkBtn.addEventListener('click', () => {
      githubLink.click();
    });

    intro.append(name, container, projhr);
  });
}
