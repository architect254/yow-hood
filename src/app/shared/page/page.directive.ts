import { Directive, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Directive({
  standalone: true,
})
export abstract class PageDirective implements OnInit {
  constructor(private _title: Title, private _meta: Meta) {}

  setTitle(_title: string){
    this._title.setTitle(_title);
  }

  setMeta(_meta:MetaDefinition[]){
    this._meta.addTags(_meta)
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
