var SvgElement = (function(){

   function SvgElement(){

      this.element = null;
      this.svgns = "http://www.w3.org/2000/svg";

   }

   SvgElement.prototype.getWidth = function() {
      return this.element.getAttribute('width');
   };

   SvgElement.prototype.getHeight = function() {
      return this.element.getAttribute('height');
   };

   SvgElement.prototype.getTop = function(){
      return Number(this.element.getAttribute('y'));
   };

   SvgElement.prototype.getBottom = function(){
      return Number(this.element.getAttribute('y')) + this.getHeight();
   };

   SvgElement.prototype.getLeft = function(){
      return Number(this.element.getAttribute('x'));
   };

   SvgElement.prototype.getRight = function(){
      return Number(this.element.getAttribute('x')) + this.getWidth();
   };

   SvgElement.prototype.remove = function() {
      if(this.element){ this.element.parentNode.removeChild(this.element); }
   };

   SvgElement.prototype.getElement = function() {
      return this.element;
   };

   SvgElement.prototype.getSize = function() {
      return {
         width: this.getWidth(),
         height: this.getHeight()
      };
   };

   SvgElement.prototype.getPosition = function() {
      return {
         top: this.getTop(),
         left: this.getLeft(),
         bottom: this.getBottom(),
         right: this.getRight()
      }
   };

   return SvgElement;

});