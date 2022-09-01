import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface slide {
  image: string,
  title: string,
  subTitle: string,
}

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() slides: number = 10;

  @Input() infinite: boolean = true;

  url: string = 'http://localhost:3600/api/carousel';

  public slidesData: slide[] = [];

  public currentIndex: number = 0;

  constructor(private http: HttpClient) { }

  public leftClick() {
    if( this.currentIndex > 0 ) {
      this.currentIndex--;     
    } else {
      if( this.infinite ) {
        this.currentIndex = this.slides - 1;
      }
    }
  }

  public rightClick() {
    console.log("rightClick");
    if( this.currentIndex < this.slides ) {
      this.currentIndex++;
    } else {
      if( this.infinite ) {
        this.currentIndex = 0;
      }
    }
    
  }

  ngOnInit(): void {
    this.getSlides().subscribe();
  }

  getSlides() {
    return this.http.get<any>(`${this.url}?slides=${this.slides}`).pipe(
      map( (data: any) => {
        this.slidesData = data.slides;
        console.log(this.slidesData);
      })
    );
  }

}
