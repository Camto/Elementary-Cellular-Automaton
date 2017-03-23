class Rule {
	
	constructor(rules, size) {
		
		this.rules = rules;
		this.size = size;
		this.ppl = [];
		for(var count = 0; count < Math.floor(size); count++) {
			
			this.ppl.push(0);
			
		}
		this.ppl.push(1);
		for(var count = 0; count < Math.ceil(size); count++) {
			
			this.ppl.push(0);
			
		}
		
		this.history = [this.ppl];
		
	}
	
	generation(canvas) {
		
		var next = [];
		
		for(var count = 0; count < this.ppl.length; count++) {
			
			var first = this.person(count - 1);
			var second = this.person(count    );
			var third = this.person(count + 1);
			
			var neighbors = first.toString() + second.toString() + third.toString();
			
			switch(neighbors) {
				
				case "111": next.push(this.rules[0]); break;
				
				case "110": next.push(this.rules[1]); break;
				
				case "101": next.push(this.rules[2]); break;
				
				case "100": next.push(this.rules[3]); break;
				
				case "011": next.push(this.rules[4]); break;
				
				case "010": next.push(this.rules[5]); break;
				
				case "001": next.push(this.rules[6]); break;
				
				case "000": next.push(this.rules[7]); break;
				
			}
			
		}
		
		this.ppl = next;
		this.history.push(this.ppl);
		if(this.history.length > canvas.height / 10 + 3) {
			
			this.history.shift();
			
		}
		
		return this.ppl;
		
	}
	
	person(index) {
		
		if(!(index < 0 || index > (this.ppl.length - 1))) {
			
			return this.ppl[index];
			
		} else {
			
			if(index < 0) {
				
				return this.ppl[this.ppl.length - 1];
				
			} else {
				
				return this.ppl[0];
				
			}
			
		}
		
	}
	
	draw(offset, canvas) {
		
		for(var y = 0; y < this.history.length; y++) {
			
			for(var x = 0; x < this.history[y].length; x++) {
				
				if(this.history[y][x]) {
					
					canvas.rect(x * 10, canvas.height + ((y - this.history.length) * 10) - offset + 20, 10, 10, "black");
					
				}
				
			}
			
		}
		
	}
	
}