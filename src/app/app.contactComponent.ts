import { Component } from '@angular/core';
import { LogService } from './wiki.service'
@Component({
	selector: 'contact',
	template: `<h2>Contact Section</h2>`,
})
export class ContactComponent {
	constructor(log: LogService) {
		log.LogDetails("Contact");
	}
}