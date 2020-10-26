import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RrhhService} from '../services/rrhh.service';
import {Workers} from '../Classes/Workers';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
})
export class WorkerPage implements OnInit {
   worker: Workers ;
  constructor(private rrhhService: RrhhService,
              private route: ActivatedRoute) { }

  async ngOnInit() {
    // Get employe id form router
     this.route.params.subscribe( params => {
         // Get employe data by id
        this.getWorker(params.id);
   });
  }
  async getWorker(id: string){
  this.rrhhService.getWorkers()
       .subscribe(( response) => {
           // Find object in Objects Array from Api
          this.worker = response.find((item) => item.id === Number(id));
        });
  }

}
