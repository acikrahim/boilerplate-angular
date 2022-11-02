import { Component } from "@angular/core";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";

// import { Local}

@Component({
    selector: 'app-translation',
    templateUrl: './translation.component.html',
    styleUrls: ['./translation.component.scss']
})

export class TranslationComponent {
    selectedLanguage: string = 'en';

    get currentSelectedLanguage() {
        return this.selectedLanguage;
    }

    constructor(
        private translate: TranslateService
    ) {
        this.selectedLanguage = translate.currentLang;
        this.translate.onLangChange.subscribe((languageObject: LangChangeEvent) => {
            this.selectedLanguage = languageObject.lang;
        })
    }

    setLanguage(language: string) {
        console.log(language)
        this.translate.use(language)
    }
}