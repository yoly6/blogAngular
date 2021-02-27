import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './examples/login/login.component';
import { RegistrarComponent} from "./examples/registrar/registrar.component";
import { ContactanosComponent } from './examples/contactanos/contactanos.component';
import { NosotrosComponent } from './examples/nosotros/nosotros.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'examples/contactanos',     component: ContactanosComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/nosotros',     component: NosotrosComponent },
    { path: 'examples/registrar',     component: RegistrarComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
