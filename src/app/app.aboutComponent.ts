import { Component } from '@angular/core';
import { LogService } from './wiki.service'
@Component({
	selector: 'about',
	template: `<h2>About Section</h2>`,
})
export class AboutComponent {
	constructor(log: LogService) {
		log.LogDetails("About");
	}
}