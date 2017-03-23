function Init() {
	
	rule_num = Math.min(Math.max(parseInt(prompt("Rule?", "73")), 0), 255);
	rule = rule_num.toString(2).split("").map(function(num) {return parseInt(num)});
	while(rule.length < 8) {
		
		rule.unshift(0);
		
	}
	
	document.getElementsByTagName("title")[0].innerHTML = "Rule " + rule_num;
	
	pattern = new Rule(rule, parseInt(prompt("How big should be the world?", "40")));
	
	screen = new Canvas(Math.min(pattern.ppl.length * 10, window.innerWidth), Math.min(pattern.ppl.length * 15, window.innerHeight));
	
	frame = 0;
	
}

function Begin() {
	
	Init();
	
	window.requestAnimationFrame(Game);
	
}
function Game() {
	
	frame++
	if(frame > 6) {
		
		frame = 0;
		
		pattern.generation(screen);
		
	}
	
	screen.clear_screen();
	pattern.draw((frame / 7) * 10, screen);
	
	window.requestAnimationFrame(Game);
	
}

Begin();