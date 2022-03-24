import { Component, HostListener, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Film } from 'src/app/others/interfaces';

@Component({
  selector: 'halo-showmovies',
  templateUrl: './showmovies.component.html',
  styleUrls: ['./showmovies.component.scss']
})
export class ShowmoviesComponent implements OnInit {

  constructor(
    private _http:HttpClient
  ) {}

  films:Film[] = []

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if ((window.innerHeight + window.scrollY) === document.body.offsetHeight) {
      let film_temp = this.films;
      film_temp.forEach(film => {
        this.films.push(film);
      });
    }
  }

  ngOnInit(): void{
    this._http.get("http://localhost:3000/movies", {"responseType":"json"} )
    .subscribe((data:any) => {
      this.films = data;
    }, (err:HttpErrorResponse) => {
        console.log("An error occurred")
        console.log(err.message)
        console.log(err.status)
      }
    )

    
  }

}
