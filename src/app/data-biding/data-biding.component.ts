import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {

  public nome:string = "Raziel";
  public idade:number = 23;

  public checkedDisabled: boolean =  true;
  public imgSrc: string = "https://sm.ign.com/t/ign_br/screenshot/default/haikyu-to-the-top_t43f.960.jpg"
  public imgTitle:string = "Imagem Haikyu utilizando property biding"

  public alertaInfo(valor: MouseEvent){
    console.log(valor)
  }
  public position:{x:number, y:number} = {x:0, y:0};

  public mouseMoveTest(valor: MouseEvent){
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }

}
