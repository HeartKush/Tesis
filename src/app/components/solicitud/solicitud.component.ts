import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {

  elCalendar;
  id:string = 'calendar';
  
  constructor() {   
   /* this.hola('calendar');*/
   /*this.queptas();*/
   


  }

  changeclass() {
    var element = document.getElementById("cambio");
    element.classList.toggle("grid_cell-selected");
    element.classList.toggle("grid_cell-selected");
  }
  queptas(){
    console.log("asdfasdfasdfasdf");
    
  }
  more(){
    this.elCalendar = document.getElementById('more');
    this.showTemplatemore();
  }
  showTemplatemore(){
    this.elCalendar.innerHTML += `<label for="elemento_secundario">Seleccione un elemento secundario.</label>
    <select class="form-control" id="elemento_secundario">
        <option>SELECCIONAR..</option>
        <option>COMPUTADOR</option>
        <option>GAFAS VR</option>
        <option>JUMANJI</option>
        <option>SMART TV</option>
        <option>MESA DE ESTUDIO</option>
    </select>`;
  }
  


  /*hola(id){
    this.elCalendar = document.getElementById(this.id);
    this.showTemplate();
  }
  showTemplate(){
    this.elCalendar.innerHTML= this.getTemplate();
  }

  getTemplate(){
    let Template = `<div class="calendar_header">
    <button type="button" class="control carousel--control--prev">&lt;</button>
    <span class="month-name">octubre</span>
    <button type="button" class="control carousel--control--next">&gt;</button>
</div>
<div class="calendar_body ">
    <div class="grid">
        <div class="grid_header">
            <span class="grid_cell grid_cell-gh">Lun</span>
            <span class="grid_cell grid_cell-gh">Mar</span>
            <span class="grid_cell grid_cell-gh">Mie</span>
            <span class="grid_cell grid_cell-gh">Jue</span>
            <span class="grid_cell grid_cell-gh">Vie</span>
            <span class="grid_cell grid_cell-gh">Sab</span>
            <span class="grid_cell grid_cell-gh">Dom</span>
        </div>
        <div class="grid_body">
            <span class="grid_cell grid_cell-gd">1</span>
            <span class="grid_cell grid_cell-gd">2</span>
            <span class="grid_cell grid_cell-gd">3</span>
            <span class="grid_cell grid_cell-gd">4</span>
            <span class="grid_cell grid_cell-gd">5</span>
            <span class="grid_cell grid_cell-gd">6</span>
            <span class="grid_cell grid_cell-gd">7</span>
            <span class="grid_cell grid_cell-gd">8</span>
            <span class="grid_cell grid_cell-gd">9</span>
            <span class="grid_cell grid_cell-gd">10</span>
            <span class="grid_cell grid_cell-gd">11</span>
            <span class="grid_cell grid_cell-gd">12</span>
            <span class="grid_cell grid_cell-gd">13</span>
            <span class="grid_cell grid_cell-gd">14</span>
            <span class="grid_cell grid_cell-gd">15</span>
            <span class="grid_cell grid_cell-gd">16</span>
            <span class="grid_cell grid_cell-gd">17</span>
            <span class="grid_cell grid_cell-gd">18</span>
            <span class="grid_cell grid_cell-gd">19</span>
            <span class="grid_cell grid_cell-gd">20</span>
            <span class="grid_cell grid_cell-gd">21</span>
            <span class="grid_cell grid_cell-gd">22</span>
            <span class="grid_cell grid_cell-gd">23</span>
            <span class="grid_cell grid_cell-gd">24</span>
            <span class="grid_cell grid_cell-gd">25</span>
            <span class="grid_cell grid_cell-gd">26</span>
            <span class="grid_cell grid_cell-gd">27</span>
            <span class="grid_cell grid_cell-gd">28</span>
            <span class="grid_cell grid_cell-gd">29</span>
            <span class="grid_cell grid_cell-gd">30</span>
            <span class="grid_cell grid_cell-gd">31</span>
            <span class="grid_cell grid_cell-gd">32</span>
            <span class="grid_cell grid_cell-gd">33</span>
            <span class="grid_cell grid_cell-gd">34</span>
            <span class="grid_cell grid_cell-gd">35</span>
        </div>
    </div>
</div>`;
    return Template;
  }*/

  ngOnInit() {
  }

}
