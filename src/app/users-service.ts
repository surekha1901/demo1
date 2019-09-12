import{Injectable} from '@angular/core';
import{ CounterService} from './counter.service';
import { from } from 'rxjs';
@Injectable()
export class UsersServic {
    activeUsers = ['max' , 'anna'];
  inactiveUsers = ['chirsh' , 'manu'];

  constructor(private conuterService: CounterService) {}

  setToActive(id: number) {

  }

  setToInactive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.slice(id, 1);
      this.conuterService.incrementInactiveToActive();
      
  }

  setToInctive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.slice(id, 1);
      this.conuterService.incrementActiveToInactive();
  }

}