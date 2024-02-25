import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoomService } from './room.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-project';

  constructor(private roomService: RoomService) {
    this.roomService.getRooms().subscribe((val) => {
      console.log(val);
    });
  }
}
