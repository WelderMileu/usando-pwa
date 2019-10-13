'use strict'

const $ = (e) => document.querySelector(e);
const all = (e) => document.querySelectorAll(e);

$(".bars").addEventListener('click', function(){
	$(".navbar-nav").classList.toggle('expand');
});