import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
