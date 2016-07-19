import { Component, OnInit } from '@angular/core'
import { FormsComponent } from './../forms'
import { LookupFormService } from './shared/index'

@Component({
  moduleId: module.id,
  selector: 'app-character-lookup',
  templateUrl: 'character-lookup.component.html',
  styleUrls: ['character-lookup.component.css'],
  directives: [
    FormsComponent
  ],
  providers: [
    LookupFormService
  ]
})
export class CharacterLookupComponent implements OnInit {
  title = 'Character Lookup';
  questions: any[];
  error: string;
  constructor(private lookUpSvc: LookupFormService) {
    this.questions = lookUpSvc.formInit();
  }

  ngOnInit() {
    
  }
  public lookUpCharacter(payLoad: string){
    console.log(JSON.parse(payLoad));
  }
}
