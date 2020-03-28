var WaveForm = (function(){
	
	/* This is responsable for creatin gthe waveform svg and modifing it and getting the
	audio data */

	function WaveForm(data, color){
		
		this.data = data;
		this.color = color;

		this.thickness = 2;

	}

	WaveForm.prototype.getXml = function() {
		
		var xml = [];

		for(var i=0;i<this.data.length;i++){
			var height = this.data[i] * 100;
			var x = 100 + (i * this.thickness);
			var node = new WaveNode(this.thickness, x, height, '#456');
			xml.push(node.getElement());
		}

		return xml;

	};

	return WaveForm;

})();