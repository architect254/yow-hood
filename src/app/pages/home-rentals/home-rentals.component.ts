import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { GridComponent } from '../../feature/grid/grid.component';
import { PageDirective } from '../../shared/page/page.directive';
import { CardComponent } from '../../feature/card/card.component';
import { HomeRentalsService } from './home-rentals.service';
import { Home } from '../../model/home';
import { Title, Meta } from '@angular/platform-browser';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'home-rentals',
  standalone: true,
  imports: [ScrollingModule, GridComponent, CardComponent, AsyncPipe],
  templateUrl: './home-rentals.component.html',
  styleUrl: './home-rentals.component.scss',
})
export class HomeRentalsComponent extends PageDirective implements OnInit {
  homes$: Observable<Home[]> = this._homeRentalsService.homes$;
  constructor(
    private _title: Title,
    private _meta: Meta,
    private _homeRentalsService: HomeRentalsService
  ) {
    super(_title, _meta);
  }
  override ngOnInit(): void {}

  override setTwitterCardMeta(): void {
    this.setMeta([
      {
        name: `twitter:title`,
        content: `@LoremIpsum`,
      },
      {
        name: `twitter:description`,
        content: `@LoremIpsum`,
      },
      {
        name: `twitter:card`,
        content: `@LoremIpsum`,
      },
      {
        name: `twitter:image`,
        content: `@LoremIpsum`,
      },
      {
        name: `twitter:site`,
        content: `https://www.yowhood.com`,
      },
      {
        name: `twitter:creator`,
        content: `Jared Bada - Code Links Industries Ltd`,
      },
    ]);
  }

  override setFacebookOpenGraphMeta(): void {
    this.setMeta([
      {
        name: `og:type`,
        content: `website`,
      },
      {
        name: `og:title`,
        content: `@LoremIpsum`,
      },
      {
        name: `og:description`,
        content: `@LoremIpsum`,
      },
      {
        name: `og:url`,
        content: `https://www.yowhood.com`,
      },
      {
        name: `og:site_name`,
        content: `YowHood`,
      },
      {
        name: `og:locale`,
        content: `en_US`,
      },
      {
        name: `og:image`,
        content: `@LoremIpsum`,
      },
      {
        name: `og:image:type`,
        content: `image/png`,
      },
      {
        name: `og:image:width`,
        content: `1360`,
      },
      {
        name: `og:image:height`,
        content: `720`,
      },
      {
        name: `og:image:secure_url`,
        content: `@LoremIpsum`,
      },
    ]);
  }

  override setDefaultMetaAndTitle(): void {
    this.setTitle(`YowHood - Home Rentals | YowHood`);
    this.setMeta([
      {
        name: `description`,
        content: `@LoremIpsum`,
      },
      {
        name: `keywords`,
        content: `@LoremIpsum`,
      },
    ]);
  }
}
