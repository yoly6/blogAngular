import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Blogs } from 'app/interfaz/blogs.interface';
import { WebService } from 'app/web.service';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit{
   
  ngOnInit(): void {
    this.getData();
    
  }
  url: string = 'blogs';
  title = 'Laravel';
  usersList: Array<Blogs>
  blogs: Blogs = undefined
  myForm: FormGroup;

  constructor(private webService: WebService) { }

  getData(): void {
    this.webService.get(this.url).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.usersList = response.data
    })
  }

  edit(blogs: Blogs): void {
    this.blogs = blogs
    this.myForm.controls['tittle'].setValue(this.blogs.tittle)
    this.myForm.controls['summary'].setValue(this.blogs.summary)
    this.myForm.controls['content'].setValue(this.blogs.content)
    this.myForm.controls['url'].setValue(this.blogs.url)
    this.myForm.controls['user_id'].setValue(this.blogs.user_id)
    this.myForm.controls['category_id'].setValue(this.blogs.category_id)
   
  }

  delete(blogs: Blogs): void {
    if(confirm('Esta seguro que quiere eliminarlo?')){
    this.webService.delete(this.url, blogs).subscribe(res => {
      let data = JSON.parse(JSON.stringify(res))
      this.getData()
    }, error => {
    })
  }
}
}
