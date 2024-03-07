import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllReceipesComponent } from './all-receipes/all-receipes.component';
import { SearchPipe } from './receipePipe/search.pipe';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SingleViewComponent } from './single-view/single-view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './receipePipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllReceipesComponent,
    SearchPipe,
    SingleViewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
