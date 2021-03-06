import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RockCardModule } from '@bedrock';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
    fas,
    faArrowDown,
    faArrowLeft,
    faArrowRight,
    faArrowUp,
    faEnvelope,
    faSpinner,
    faSquare,
} from '@fortawesome/free-solid-svg-icons';

import {
    fab,
    faAngular,
} from '@fortawesome/free-brands-svg-icons';

import { CodeModule } from '../../components/code/code.module';

import { GuidesComponent } from './guides.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { IconsComponent } from './icons/icons.component';
import { LandingComponent } from './landing.component';

import { GuidesRoutingModule } from './guides-routing.module';

@NgModule({
    declarations: [
        GuidesComponent,
        GettingStartedComponent,
        IconsComponent,
        LandingComponent,
    ],
    imports: [
        GuidesRoutingModule,
        ReactiveFormsModule,
        CodeModule,
        RockCardModule,
        FontAwesomeModule,
    ],
    exports: [
        GuidesComponent,
    ],
})
export class GuidesModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas, fab);
        library.addIcons(
            faArrowDown,
            faArrowLeft,
            faArrowRight,
            faArrowUp,
            faEnvelope,
            faSpinner,
            faSquare,
            faAngular,
        );
    }
}
