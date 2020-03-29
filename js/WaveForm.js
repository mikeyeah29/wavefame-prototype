var WaveForm = (function(){
	
	/* This is responsable for creatin gthe waveform svg and modifing it and getting the
	audio data */

	function WaveForm(data, color){
		
		this.data = data;
		this.color = color;

		this.thickness = 1;
		this.amplitude = 70;
		this.yCenter = 250;

	}

	WaveForm.prototype.createNode = function(x, height){
		var node = new WaveNode(this.thickness, x, this.yCenter, height, this.color);
		return node;
	}

	WaveForm.prototype.getXml = function() {
		
		var xml = [];
		var count = 0;
		var artworkWidth = 500;

		var padding = 80;
		var width = 500;
		var innerWidth = width - (padding * 2);

		var nodesToSkip = (this.data.length / innerWidth);
		var cursor = padding;

		for(var i=0;i<this.data.length;i++){

			var remainder = i % Math.round( nodesToSkip );
			if (remainder == 0){
				
				var x = (cursor + this.thickness) - 1; 
			
				var top = this.createNode(x, this.yCenter - (this.data[i] * this.amplitude));
				var bottom = this.createNode(x, this.yCenter + (this.data[i] * this.amplitude));
				xml.push(top.getElement());
				xml.push(bottom.getElement());
				cursor++;

			}

		}

		return xml;

	};

	return WaveForm;

})();


/*

	10
	4

	10, 14, 18, 22

	cursor++
	cursor + thick - 1
	14
	18
	22



*/