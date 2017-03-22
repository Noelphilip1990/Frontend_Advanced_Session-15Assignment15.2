import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  log: string[]=[];
  constructor() {
  }
  LogDetails(section: string) {
    let sec = "Now the user has logged in :" + section;
    this.log.push(sec);
	console.log("section:" + this.log);

  }
}
