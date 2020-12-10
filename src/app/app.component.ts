import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private sanitized: DomSanitizer) {}
  title = 'angular-v11-codelab';
  article = {
    shortDescription: 'shortDescription',
    text: this.sanitized.bypassSecurityTrustHtml(
      "<button type='button'>test button</button>"
    ),
  };

  fetchArticles = of({
    articles: [
      { text: 'text 1', shortDescription: 'shortDescription 1' },
      { text: 'text 2', shortDescription: 'shortDescription 2' },
      { text: 'text 3', shortDescription: 'shortDescription 3' },
    ],
    message: 'ok',
    count: 1,
    status: 200,
  });

  fetchFAQArticles = of({
    articles: [
      { text: 'text 1', shortDescription: 'shortDescription 1' },
      { text: 'text 2', shortDescription: 'shortDescription 2' },
      { text: 'text 3', shortDescription: 'shortDescription 3' },
    ],
    message: 'ok',
    count: 1,
    status: 200,
  });
  config = {
    status: 'submitted',
    data: {
      createIncident: {
        incident: {
          incidentNumber: 123,
        },
      },
    },
    categoryName: 'react',
    subtitle: 'subtitle test',
    sections: ['contact', 'suggestions', 'faqs', 'knowledgeBase', 'glossary'],
  };

  fetchSuggestedArticles = of({
    articles: [
      {
        text: 'text 1',
        shortDescription: 'suggested article shortDescription 1',
      },
      {
        text: 'text 2',
        shortDescription: 'suggested article shortDescription 2',
      },
      {
        text: 'text 3',
        shortDescription: 'suggested article shortDescription 3',
      },
    ],
    message: 'ok',
    count: 1,
    status: 200,
  });
}
