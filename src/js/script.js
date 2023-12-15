'use strict';

$("#menu-btn").click(() => $("#menu").fadeToggle("hidden"));

$("#startBtn").click(() => $("#start")?.scrollIntoView({behavior : "smooth"}));
