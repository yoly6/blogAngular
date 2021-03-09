import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Blogs } from 'app/interfaz/blogs.interface';
<<<<<<< HEAD
import { Categories } from 'app/interfaz/categories';
=======
>>>>>>> 9748634f761244c409cd67986a1c1bc243c5b6ad
import { WebService } from 'app/web.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'] ,
  providers: [NgbModalConfig, NgbModal],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class BlogsComponent implements OnInit {

  ngOnInit(): void {
    this.createForm();
    this.getData();
<<<<<<< HEAD
    this.getCategoria();
    
  }
  url: string = 'blogs';
  urlCategoria: string = 'categories';
  title = 'Laravel';
  usersList: Array<Blogs>
  blogs: Blogs = undefined
  categoriaList: Array<Categories>
  categories: Categories = undefined
=======
    
  }
  url: string = 'blogs';
  title = 'Laravel';
  usersList: Array<Blogs>
  blogs: Blogs = undefined
>>>>>>> 9748634f761244c409cd67986a1c1bc243c5b6ad
  myForm: FormGroup;

  constructor(private webService: WebService, private formBuilder: FormBuilder,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }


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
<<<<<<< HEAD
  
  private editForm(data: FormGroup) {
    if (data.valid)
      this.editBlogs(data.value)
  }
=======
>>>>>>> 9748634f761244c409cd67986a1c1bc243c5b6ad

  getData(): void {
    this.webService.get(this.url).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.usersList = response.data
    })
  }

<<<<<<< HEAD
  getCategoria(): void {
    this.webService.getCategoria(this.urlCategoria).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.categoriaList = response.data
    })
  }

=======
>>>>>>> 9748634f761244c409cd67986a1c1bc243c5b6ad
  open(content) {
    this.modalService.open(content);
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

<<<<<<< HEAD
  editBlogs(blogs: Blogs): void {
    if(confirm('Esta editado correctamente')){
    if (this.blogs)
      blogs.id = this.blogs.id
    this.webService.put(this.url, blogs).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.getData()
      this.myForm.reset()
      this.blogs = undefined
    }, error => {
    })
  }
  }

=======
>>>>>>> 9748634f761244c409cd67986a1c1bc243c5b6ad
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

<<<<<<< HEAD
  openEditLg(Editcontent) {
    this.modalService.open(Editcontent, { size: 'lg' });
  }

=======
>>>>>>> 9748634f761244c409cd67986a1c1bc243c5b6ad
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
