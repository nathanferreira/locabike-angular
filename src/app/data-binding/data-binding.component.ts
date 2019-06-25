import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"]
})
export class DataBindingComponent implements OnInit {
  foto: string = "favicon.ico";
  texto: string = "Texto";

  constructor() {}

  ngOnInit() {}

  msgAlerta(): void {
    alert("Mensagem de alerta - Exemplo de Event Binding");
  }
}
