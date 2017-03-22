import {Component} from '@angular/core';
import { LogService } from './wiki.service'
@Component({
	selector:'home',
	template:`<h2>Home Section</h2>`,
})
export class HomeComponent
{
	constructor(log:LogService)
	{
		log.LogDetails("Home");
	}
}