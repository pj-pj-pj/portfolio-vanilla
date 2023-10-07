import totoroGif from './assets/totoro.gif';
import resumePdf from './assets/paula-joyce-ucol-resume.pdf';
import PDFObject from 'pdfobject';

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
    "This section is ⚒️ under construction ⚒️ (since I don't have a resume). But here's a pdf.";

  const resumeDiv = document.createElement('div');
  resumeDiv.id = 'resume-container';
  const resumeContainer = document.createElement('iframe');
  resumeContainer.src = resumePdf;
  resumeContainer.objectFit = 'contain';
  resumeContainer.type = 'application/pdf';
  resumeDiv.append(resumeContainer);
  intro.append(resumeDiv);
}
