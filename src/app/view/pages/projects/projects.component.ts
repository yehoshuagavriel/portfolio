import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
    `
      button {
        background-color: transparent;
        outline: none;
        border: none;
        padding: 0 0.5em;
      }

      #projects {
        height: 100vh;
        user-select: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        z-index: -1;
        padding-top: 7em;
      }

      .only-mobile {
        display: none;
      }

      .slide-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .slide-bottom-container {
        padding-top: 1em;
      }

      .title-slide-text {
        color: var(--white-off);
        font-size: 1.5em;
        padding: 0.5em;
      }

      .slider-title {
        font-family: 'Alumni Sans Pinstripe';
        font-size: 4em;
        color: var(--white_on);
        font-weight: bolder;
      }

      .slider-description {
        padding-bottom: 1em;
        font-size: 1.5em;
        color: var(--white-off);
      }

      .slider-techs {
        padding: 0.25em 0;
        font-size: 2em;
        color: var(--white-off);
      }

      .mySlides2 {
        display: none;
      }

      .slideshow-container {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .prev,
      .next {
        cursor: pointer;
        padding: 2.5em;
        color: var(--white-off);
        font-size: 3em;
        font-weight: bold;
        transition: 0.6s ease;
        border-radius: 0 0.1em 0.1em 0;
        user-select: none;
      }

      .prev {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .next {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .prev:hover,
      .next:hover {
        transition: 0.3s;
        font-size: 3em;
        color: var(--white-on);
      }

      .slider-img {
        width: 10em;
      }

      #deslizar-title {
        font-size: 2em;
        color: var(--white-off);
      }

      .slider-icons {
        font-size: 2em;
        cursor: pointer;
      }

      /* Mobile */
      @media (min-width: 15em) and (max-width: 39.9em) {
        .slideshow-container {
          display: none;
        }
        .only-mobile {
          display: block;
          padding-top: 90em;
        }
        .projects-mobile {
          padding: 3em 0;
        }
        .fa-chrome {
          font-size: 4em !important;
        }
        .fa-on-projects {
          font-size: 4.7em;
        }
      }
    `,
  ],
})
export class ProjectsComponent {
  josuehoenicka: any;
  project: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.languageData.subscribe((data) => {
      this.josuehoenicka = data;

      this.project = data.projects;
    });
  }
}
