import { Component } from '@angular/core';
import { LogService } from './wiki.service'
@Component({
	selector: 'service',
	template: `<h2>Service Section</h2>`,
})
export class ServiceComponent {
	
	constructor(log: LogService) {
		log.LogDetails("Service");
	}
}