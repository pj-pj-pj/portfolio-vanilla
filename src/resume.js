import totoroGif from './assets/totoro.gif';
import resumePdf from './assets/paula-joyce-ucol-resume.pdf';
import downloadPng from './assets/download.png';

export default function resumeInit() {
  document.querySelector('p#active-title').textContent = 'RESUME.md';

  const intro = document.querySelector('main #content #container');
  intro.className = 'dynamic-page';

  const bmo = document.createElement('img');
  bmo.className = 'gif';
  bmo.src = totoroGif;

  const tagline = document.createElement('h1');
  tagline.textContent = 'Um.';

  intro.append(bmo, tagline);

  intro.appendChild(document.createElement('h3')).textContent =
    "This section is ⚒️ under construction ⚒️ (since I don't have a resume). But here's a pdf (no preview on mobile 🙈).";

  const resumeDiv = document.createElement('div');
  resumeDiv.id = 'resume-container';
  resumeDiv.objectFit = 'contain';
  const resumeContainer = document.createElement('embed');
  resumeContainer.src = resumePdf;

  resumeDiv.append(resumeContainer);
  intro.append(resumeDiv);

  const downloadBtn = intro.appendChild(document.createElement('button'));
  downloadBtn.className = 'download-btn';
  downloadBtn.appendChild(document.createElement('img')).src = downloadPng;
  const resumeLink = document.createElement('a');
  resumeLink.textContent = 'Download Resume';
  resumeLink.href = resumePdf;
  resumeLink.download = 'paula-ucol-resume.pdf';
  downloadBtn.appendChild(resumeLink);

  downloadBtn.addEventListener('click', () => {
    resumeLink.click();
  });
}
