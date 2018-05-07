import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageViewerModule } from './image-viewer/image-viewer.module';
import { ImageOverviewModule } from './image-overview/image-overview.module';

import { AppComponent } from './app.component';
import { ImagesService } from './images.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {path: 'overview', component: AppComponent},
  // {path: '', redirectTo: '/overview', pathMatch: 'full'},
  // {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageViewerModule,
    ImageOverviewModule,
    HttpClientModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ AppEffects ]),
    RouterModule.forRoot(routes)
  ],
  providers: [ ImagesService, HttpClient ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
