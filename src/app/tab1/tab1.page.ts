import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreedsService} from '../services/breeds.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy{
  constructor(private breedsService: BreedsService) {}
  dogBreeds;
  breedSelected;
  categorySelected = '';
  subscriptionBreed: Subscription;
  subscriptionDog: Subscription;
  dogPhotos;
    ngOnInit() {
      // Get Dogs breed
     this.subscriptionBreed = this.breedsService.getDogsBreeds()
          .subscribe(
              response => {
              // returns an array whose elements are arrays corresponding to the enumerable property [key, value]
              this.dogBreeds = Object.entries(response.message);
              console.log(Object.entries(response.message));
          }, error => {console.log('Http Error' + error);
              });
  }
    selectedBreed(){
      // If there isn't category in the breed, search for results
      if (this.breedSelected[1] <= 0) {
          this.searchDog();
      }
    }
    searchDog(){
        // Api get returns photos of a Dog filtered by selectors
       this.subscriptionDog = this.breedsService.getDog(this.breedSelected[0], this.categorySelected)
            .subscribe(
                response => {
                console.log(response);
                this.dogPhotos = response.message;
            },
                error => {console.log('Http Error' + error);
            });
    }
    ngOnDestroy(){
    this.subscriptionBreed.unsubscribe();
    this.subscriptionDog.unsubscribe();
    }
}

