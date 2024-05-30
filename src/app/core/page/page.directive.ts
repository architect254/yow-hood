import { Directive, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Directive({
  standalone: true,
})
export abstract class PageDirective implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  setTitle(title: string){
    this.title.setTitle(title);
  }

  setMeta(meta:MetaDefinition[]){
    this.meta.addTags(meta)
  }

  applyMetaTags(){
    this.setDefaultMetaAndTitle();
    this.setTwitterCardMeta();
    this.setFacebookOpenGraphMeta();
  }

  abstract setDefaultMetaAndTitle(): void;
  abstract setTwitterCardMeta(): void;
  abstract setFacebookOpenGraphMeta(): void;

  ngOnInit(): void {
    this.applyMetaTags();
  }
}
