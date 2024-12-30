import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationServiceService {

  constructor() { }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showpath');
        }
    });
  });

  const svgObject = document.querySelectorAll('.svgdesmos');
  svgObject.forEach((svgQuery) => {
      const svgelm = svgQuery.contentDocument.querySelectorAll('path');
      var noPaths = svgelm.length;
      var count = 0;
      svgelm.forEach((path) => {
          const length = path.getTotalLength();
          path.style["stroke-dashoffset"] = `${length}px`;
          path.style["stroke-dasharray"] = `${length}px`;
          path.style["animation-delay"] = `${count / (noPaths)}s`;
          count += 1;
          observer.observe(path);
      });
  });


  const desmosButton = document.getElementById('svgdesmosbutton');
  observer.observe(desmosButton);
}
