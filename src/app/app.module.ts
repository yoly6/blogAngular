import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContactanosComponent } from './examples/contactanos/contactanos.component';
import { NosotrosComponent } from './examples/nosotros/nosotros.component';

import { HttpClientModule } from "@angular/common/http";
import { WebService } from './web.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ContactanosComponent,
        NosotrosComponent,
       

    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        HttpClientModule,
    ],
    providers: [WebService],
    bootstrap: [AppComponent]
})
export class AppModule { }
