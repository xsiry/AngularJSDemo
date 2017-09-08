import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

import { Hero } from '../hero';

import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
	constructor(
		private heroservice: HeroService,
		private route: ActivatedRoute,
		private location: Location
	){}

	ngOnInit(): void {
		this.route.params
				.switchMap((params: Params) => this.heroservice.getHero(+params['id']))
				.subscribe(hero => this.hero = hero)

	};

	goBack() {
		this.location.back();
	}

	@Input() hero: Hero;
}
