import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MatSelectModule } from "@angular/material/select";

import { TranslationComponent } from "./translation.component";

@NgModule({
    imports: [
        CommonModule,
        MatSelectModule,
        TranslateModule
    ],
    exports: [TranslationComponent],
    declarations: [TranslationComponent],
    providers: []
})

export class TranslationModule {};