import { Component, Inject, OnInit } from '@angular/core';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'grid',
  standalone: true,
  imports: [ScrollingModule],
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
    const containerWidth =
      this.document.getElementById('container')?.offsetWidth;

    if (toolbarHeight && headerHeight && containerWidth) {
      this.gridHeight = window.innerHeight - (toolbarHeight + headerHeight);
      this.gridWidth = containerWidth;
    }
  }

  onScrolledIndexChange(index: any) {
    this.scrolledIndex = index;
  }
}
