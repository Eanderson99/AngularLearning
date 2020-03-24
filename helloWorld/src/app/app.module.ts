import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyCompComponent } from './my-comp/my-comp.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DirectivesComponent } from './directives/directives.component';
import { ContentComponent } from './content/content.component';
import { HostlistenerdemoComponent } from './hostlistenerdemo/hostlistenerdemo.component';
import { GreenDirective } from './directive/green.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    FooterComponent,
    HeaderComponent,
    DirectivesComponent,
    ContentComponent,
    HostlistenerdemoComponent,
    GreenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }