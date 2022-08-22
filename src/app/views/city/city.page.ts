import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  id: any;
  cities: any = [];
  name: string;
  image: string;
  description: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCities().subscribe(res => {
      this.cities = res[this.id-1];
      this.name = this.cities.name;
      this.image = this.cities.image;
      this.description = this.cities.description;
      console.log(this.cities);
    });
  }

  getCities() {
    return this.http
      .get('assets/files/cities.json')
      .pipe(
        map( (res: any) => res.data )
      );
  }

}
