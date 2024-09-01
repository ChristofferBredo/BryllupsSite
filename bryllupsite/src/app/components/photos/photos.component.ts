import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  uploadUrl: string = "https://drive.google.com/drive/folders/1H4Ka12ktCAPFSdfD6PHSnkLwOhFPI-fg?usp=sharing";
  photographerUrl : string = "https://www.instagram.com/lifelikesalla/";
  weddingPhotosUrl: string = "https://photographybysarinjasvendsen.pic-time.com/3iMnoXPJPtEPY";
  selfieBoothUrl: string = "https://drive.google.com/drive/folders/1nqpLq8Tg8XCFfTrm9lJDayEuewr1rNLj?usp=sharing";
}
