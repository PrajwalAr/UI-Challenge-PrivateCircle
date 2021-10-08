import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content/content-detail/content-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { ContentTableComponent } from './content/content-table/content-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ContentComponent,
    ContentDetailComponent,
    FilterPipe,
    ContentTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
