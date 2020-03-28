var WaveNode = (function(){

	console.log(SvgElement);

	function WaveNode(width, x, height, fill){
		this.svgns = 'http://www.w3.org/2000/svg';
		SvgElement.call(this, arguments);
		this.create(width, x, height, fill);
	}

	WaveNode.prototype = Object.create(SvgElement.prototype);
	WaveNode.prototype.constructor = WaveNode;

	WaveNode.prototype.create = function(width, x, height, fill) {
		var node = document.createElementNS(this.svgns, 'path');
		node.setAttributeNS(null, "stroke", fill);
		node.setAttributeNS(null, "stroke-width", width);
		node.setAttributeNS(null, "fill", "none");
		node.setAttributeNS(null, "d", "M" + x + " 0 L" + x + " " + height);
		this.element = node;
	};

	WaveNode.prototype.getElement = function() {
		return this.element;
	};

	WaveNode.prototype.setX = function(x) {
		this.element.setAttributeNS(null, 'x', x);
	};

	WaveNode.prototype.setY = function(y) {
		this.element.setAttributeNS(null, 'y', y);
	};

	return WaveNode;

})()