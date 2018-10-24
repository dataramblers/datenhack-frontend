import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { ImagesOverviewModule } from '../images-overview/images-overview.module';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { RouterModule } from '@angular/router';

const Components = [
  FooterComponent,
  HeaderComponent,
  MainComponent,
  PageNotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    ImagesOverviewModule,
    RouterModule
  ],
  declarations: Components,
  exports: Components
})
export class CoreModule {
}
