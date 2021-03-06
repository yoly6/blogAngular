import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Blogs } from 'app/interfaz/blogs.interface';
import { WebService } from 'app/web.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  ngOnInit(): void {
    this.createForm();
    this.getData();
    
  }
  url: string = 'blogs';
  title = 'Laravel';
  usersList: Array<Blogs>
  blogs: Blogs = undefined
  myForm: FormGroup;

  constructor(private webService: WebService, private formBuilder: FormBuilder) { }


  private createForm() {
    this.myForm = this.formBuilder.group({
      tittle: new FormControl(this.blogs ? this.blogs.tittle : '', Validators.required),
      summary: new FormControl(this.blogs ? this.blogs.summary : '', Validators.required),
      content: new FormControl(this.blogs ? this.blogs.content : '', Validators.required),
      url: new FormControl(this.blogs ? this.blogs.url : '', Validators.required),
      user_id: new FormControl(this.blogs ? this.blogs.user_id : '', Validators.required),
      category_id: new FormControl(this.blogs ? this.blogs.category_id : '', Validators.required),
    });
  }
  private submitForm(data: FormGroup) {
    if (data.valid)
      this.addBlogs(data.value)
  }

  getData(): void {
    this.webService.get(this.url).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.usersList = response.data
    })
  }

  addBlogs(blogs: Blogs): void {
    if(confirm('Esta guardo correctamente')){
    if (this.blogs)
      blogs.id = this.blogs.id
    this.webService.post(this.url, blogs).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.getData()
      this.myForm.reset()
      this.blogs = undefined
    }, error => {
    })
  }
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
