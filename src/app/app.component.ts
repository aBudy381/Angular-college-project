import { Component } from '@angular/core';
import {JSONPlaceholderService} from './services/jsonplaceholder.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  data:Array<any>

  constructor(private jsonplaceholder:JSONPlaceholderService){

    this.data=new Array<any>()
  }
  getDataFromAPI(val: string) {
    this.jsonplaceholder.getData().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        Object.keys(data[i]).forEach((key) => {
          if (data[i][key] === val) {
            Object.keys(data[i]).forEach((key) => {
              document.write(
                data[i][key]
              );
            });
            document.write('<br>');
            document.write('<br>');
            this.data.push(data[i]);
          }
        });
      }
      if (this.data.length === 0) {
        document.write('user not found');
      }
      console.log(this.data);
    });
  }
  
}
