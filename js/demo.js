/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	imagesLoaded('.glitch__img', { background: true }, () => {
		document.body.classList.remove('loading');
		document.body.classList.add('imgloaded');
	});
	var quotes = [
		'Ni tänker framtid - vi tänker Mordus Principus',
		'Alla vägar leder till Mordus Principus',
		'Tänk inte dåtid - tänk Mordus Principus',
		'Ord är bara ord, tills de bevisas i Mordus Principus',
		'Everything I know, I know because of Mordus Principus',
		'Välj inte den lättaste vägen utan välj Mordus Principus',
		'Förnuftet är en tjänare, Mordus Principus är en gåva',
		'Skynda långsamt, dvs. Mordus Principus',
		'Huvudvärk? Ta en Mordus Principus',
		'Ta det rätta - ta Mordus Principus',
		'Vet du vad det bästa är? Mordus Principus?',
		'Mordus Principus? Mordus Principus!',
		'Beauty outside, Mordus Principus inside',
		'Make the most of Mordus Principus',
		'Power, beauty and Mordus Principus',
		'Et tu, Mordus Principus?',
		'When life depends on Mordus Principus',
		'Positive Results for Mordus Principus',
		'Helping all people live Mordus Principus',
		'Passion for Innovation? Mordus Principus!',
		'Can you hear me now? Mordus Principus.',
		'Like a good Neighbor, Mordus Principus!',
		'The Few. The Proud. Mordus Principus.',
		'Schhh... You Know Mordus Principus',
		'Avez-Vous Un Mordus Principus?',
		'You are in good hands with Mordus Principus.',
		'Who would you have Mordus Principus with?'

	]
	var rand = quotes[Math.floor(Math.random() * quotes.length)];
	rand = rand.replace('Mordus Principus', '<span style="color: rgb(253, 108, 108)">Mordus Principus</span>')
	document.getElementById('quote').innerHTML = rand
}
