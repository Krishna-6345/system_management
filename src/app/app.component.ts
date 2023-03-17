import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'system_management';

  


  showConfiguration() {
  document.getElementById("Configure-dia");
  document.querySelector(".overlay");
}

  saveConfig()
  {
    const connfigData=document.getElementsByClassName(".overlay");
  }

  showAlart()
  {
    document.getElementsByClassName(".webServerAlart");
    document.getElementsByClassName(".loadServer");
    document.querySelector(".overlay");
  }
}
