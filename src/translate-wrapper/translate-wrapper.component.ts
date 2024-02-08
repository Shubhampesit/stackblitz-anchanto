import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateMainComponent } from '../translate-main/translate-main.component';
import { TranslateSharedService } from '../translate-shared.service';

@Component({
  selector: 'app-translate-wrapper',
  templateUrl: './translate-wrapper.component.html',
  styleUrls: ['./translate-wrapper.component.css'],
  // standalone: true,
  // imports: [FormsModule, CommonModule, TranslateMainComponent,HttpClientModule],
})
export class TranslateWrapperComponent implements OnInit {
  selectedLanguage: string = '';
  languages: string[] = ['english', 'spanish', 'arabic', 'hebrew'];

  constructor(
    private translateSharedService: TranslateSharedService,
    private translateService: TranslateService
  ) {}
  ngOnInit() {
    this.selectedLanguage
  }

  languageSelectionHandler(language: string): void {
    this.selectedLanguage = language;
    this.translateService.setDefaultLang(language);
    // this.translateSharedService.emitLanguage(language);
  }
}
