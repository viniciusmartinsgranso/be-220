import { Component, Input, OnInit } from '@angular/core';
import { HomeCardInterface } from "../../models/interfaces/home-card-interface";

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent  implements OnInit {

  constructor() { }

  @Input({ required: true })
  public card!: HomeCardInterface;

  @Input()
  public isCreate: boolean = false;

  ngOnInit() {}

}
