import { Component, Inject, OnInit } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'yh-grid',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ScrollingModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  gridHeight: number = 0;
  gridWidth: number = 0;

  items = Array.from({ length: 10000 }).map((_, i) => `Item #${i}`);

  scrolledIndex: number = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    const toolbarHeight = this.document.getElementById('toolbar')?.offsetHeight;
    const headerHeight = this.document.getElementById('header')?.offsetHeight;
    const containerWidth = this.document.getElementById('container')?.offsetWidth;

    if (toolbarHeight && headerHeight && containerWidth) {
      this.gridHeight = window.innerHeight - (toolbarHeight + headerHeight);
      this.gridWidth = containerWidth;
    }
    console.log(
      'gh',
      this.gridHeight,
      'th',
      toolbarHeight,
      'hh',
      headerHeight,
      'cw',
      containerWidth
    );
  }

  onScrolledIndexChange(index: number) {
    this.scrolledIndex = index;
    console.log('scrolled', this.scrolledIndex);
  }
}
