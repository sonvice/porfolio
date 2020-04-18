"use strict";

var floatMenu = document.querySelector('.header__float-menu');
var barMenu = document.querySelector('.header__bar');
var menu = document.querySelector('.header__hamburguer-menu').addEventListener('click', function () {
  floatMenu.classList.toggle('active');
  barMenu.classList.toggle('toggle');
});