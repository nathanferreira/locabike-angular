import { Component, OnInit } from "@angular/core";
import { Pessoa } from "../pessoa";

@Component({
  selector: "app-ng-for",
  templateUrl: "./ng-for.component.html",
  styleUrls: ["./ng-for.component.css"]
})
export class NgForComponent implements OnInit {
  nomes: string[] = ["João", "Maria", "Thiago", "José"];

  pessoas: Pessoa[] = [
    new Pessoa("Fulano", "de Tal"),
    new Pessoa("Sincrano", "da Silva")
  ];

  constructor() {}

  ngOnInit() {}
}
