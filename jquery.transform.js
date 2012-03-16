/*
* jquery.transform.js
* Visit the internets for documentation, updates and examples.
* https://github.com/pwhisenhunt/jquery.transform.js
*
*
* Copyright (c) 2010 Phillip J. Whisenhunt phillip.whisenhunt@gmail.com http://phillipwhisenhunt.com
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

(function( $ ){
	var methods = {		
		/**
 		* Decrease the height of the given element.
 		* @param {value} px The amount in pixels to decrease height of the element.
 		*/
		decreaseHeight : function( value ) {
    	return this.each(function(){
				$(this).data({ 'height' : ($(this).data("height") - value) });
				$(this).animate({ height:  $(this).data("height") }, $(this).data('animationDuration') * 1000);	//multiply by 1000 since animationDuration is in secs.
			});
		},
		
		/**
 		* Decrease the width of the given element.
 		* @param {value} px The amount in pixels to decrease the width of the element.
 		*/
		decreaseWidth : function( value ) {
    	return this.each(function(){
				$(this).data({ 'width' : ($(this).data("width") - value) });
				$(this).animate({ width:  $(this).data("width") }, $(this).data('animationDuration') * 1000);	//multiply by 1000 since animationDuration is in secs.
			});
		},
		
		/** Returns the x-axis position of the element */
		getX : function() { if(!isNaN($(this).data('x'))){ return $(this).data('x'); } else{ init(this); return 0; }; },
		/** Returns the y-axis position of the element */
		getY : function() { if(!isNaN($(this).data('y'))){ return $(this).data('y'); } else{ init(this); return 0; }; },
		/** Returns the z-axis position of the element */
		getZ : function() { if(!isNaN($(this).data('z'))){ return $(this).data('z'); } else{ init(this); return 0; }; },
		/** Returns the scale of the element */
		getScale : function() { if(!isNaN($(this).data('scale'))){ return $(this).data('scale'); } else{ init(this); return 0; }; },
		/** Returns the animation duration of the element */
		getAnimationDuration : function() { if(!isNaN($(this).data('animationDuration'))){ return $(this).data('animationDuration'); } else{ init(this); return 0; }; },
		/** Returns the width of the element */
		getWidth : function() { if(!isNaN($(this).data('width'))){ return $(this).data('width'); } else{ init(this); return $(this).outerWidth(); }; },
		/** Returns the height of the element */
		getHeight : function() { if(!isNaN($(this).data('width'))){ return $(this).data('width'); } else{ init(this); return $(this).outerHeight(); }; },
		/** Returns the elements amount of rotation about the x-axis */
		getRotationX : function() { if(!isNaN($(this).data('rotationX'))){ return $(this).data('rotationX'); } else{ init(this); return 0; }; },
		/** Returns the elements amount of rotation about the y-axis */
		getRotationY : function() { if(!isNaN($(this).data('rotationY'))){ return $(this).data('rotationY'); } else{ init(this); return 0; }; },
		/** Returns the elements amount of rotation about the z-axis */
		getRotationZ : function() { if(!isNaN($(this).data('rotationZ'))){ return $(this).data('rotationZ'); } else{ init(this); return 0; }; },
	
		/**
 		* Increases the height of the given element.
 		* @param {value} px The amount in pixels to increase the height of the element.
 		*/
		increaseHeight : function( value ) {
    	return this.each(function(){
				$(this).data({ 'height' : (value + $(this).data("height")) });
				$(this).animate({ height:  $(this).data("height") }, $(this).data('animationDuration') * 1000);	//multiply by 1000 since animationDuration is in secs.
			});
		},
		
		/**
 		* Increases the width of the given element.
 		* @param {value} px The amount in pixels to increase the width of the element.
 		*/
		increaseWidth : function( value ) {
    	return this.each(function(){
				$(this).data({ 'width' : (value + $(this).data("width")) });
				$(this).animate({ width:  $(this).data("width") }, $(this).data('animationDuration') * 1000);	//multiply by 1000 since animationDuration is in secs.
			});
		},

		/**
	 	* Rotates the element along the x axis in addition to the current rotation.
	 	* @param {value} deg The degree of rotation along the x-axis
	 */
		rotateX : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('rotationX'))){
					init(this);
					$(this).transform('rotateX', value);
				}
				else{
					$(this).data( { 'rotationX' : $(this).data('rotationX') + value } );
					updateTransform(this);
				}
			});
		},
		
		/**
	 	* Rotates the element along the y axis in addition to the current rotation.
	 	* @param {value} deg The degree of rotation along the y-axis
	 */
		rotateY : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('rotationY'))){
					init(this);
					$(this).transform('rotateY', value);
				}
				else{
					$(this).data( { 'rotationY' : $(this).data('rotationY') + value } );
					updateTransform(this);
				}
			});
		},
		
		/**
	 	* Rotates the element along the z axis in addition to the current rotation.
	 	* @param {value} deg The degree of rotation along the z-axis
	 */
		rotateZ : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('rotationZ'))){
					init(this);
					$(this).transform('rotateZ', value);
				}
				else{
					$(this).data( { 'rotationZ' : $(this).data('rotationZ') + value } );
					updateTransform(this);
				}
			});
		},
		
		/**
	 	* Rotates the element along the x, y, and z-axis.
	 	* @param {x} deg The amount of rotation along x-axis.
	 	* @param {y} deg The amount of rotation along y-axis.
	 	* @param {z} deg The amount of rotation along z-axis.
	 */
		rotateXYZ : function( x, y, z ){
			return this.each(function(){
				if(isNaN($(this).data('rotationX')) || isNaN($(this).data('rotationY')) || isNaN($(this).data('rotationZ'))){
					init(this);
					$(this).transform('rotateXYZ', x, y, z);
				}
				else{
					$(this).data( { 'rotationX' : $(this).data('rotationX') + x } );
					$(this).data( { 'rotationY' : $(this).data('rotationY') + y } );
					$(this).data( { 'rotationZ' : $(this).data('rotationZ') + z } );
					updateTransform(this);
				}
			});
		},
		
		/**
	 	* Sets the animation duration of the given element.
	 	* @param {value} The animation duration for the given element.
	 */
		setAnimationDuration : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('animationDuration'))){
					init(this);
					$(this).transform('setAnimationDuration', value);
				}
				else{
					$(this).data({ 'animationDuration' : value });
					updateTransform(this);
				}
			});
		},

		/**
 		* Sets the height of the given element.
 		* @param {value} px The height of the element.
 		*/
		setHeight : function( value ){
			return this.each(function(){
				$(this).animate({ height: value }, $(this).data('animationDuration') * 1000);		//multiply by 1000 since animationDuration is in secs.
				$(this).data({ 'height' : value });
			});
		},
		
		/**
 		* Sets the width of the given element.
 		* @param {value} px The width of the element.
 		*/
		setWidth : function( value ) {
    	return this.each(function(){
				$(this).animate({ width: value }, $(this).data('animationDuration') * 1000);	//multiply by 1000 since animationDuration is in secs.
				$(this).data({ 'width' : value });
			});
		},

		/**
 		* Sets the scale of the given element.
 		* @param {value} The scale of the given element.
 		*/
		setScale : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('scale'))){
					init(this);
					$(this).transform('setScale', value);
				}
				else{
					$(this).data({ 'scale' : value });
					updateTransform(this);
				}
			});
		},

		/**
 		* Sets the elements x position.
 		* @param {value} px The position along the x-axis to set the element.
 		*/
		setX : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('x'))){
					init(this);
					$(this).transform('setX', value);
				}
				else{
					$(this).data({ 'x' : value });
					updateTransform(this);
				}
			});
		},
		
		/**
	 	* Sets the elements y position.
	 	* @param {value} px The position along the y-axis to set the element.
	 */
		setY : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('y'))){
					init(this);
					$(this).transform('setY', value);
				}
				else{
					$(this).data({ 'y' : value });
					updateTransform(this);
				}
			});			
		},
		
		/**
	 	* Sets the elements z position.
	 	* @param {value} px The position along the z-axis to set the element.
	 */
		setZ : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('z'))){
					init(this);
					$(this).transform('setZ', value);
				}
				else{
					$(this).data({ 'z' : value });
					updateTransform(this);
				}
			});
		},

		/**
	 	* Sets the amount of rotation of the x-axis.
	 	* @param {value} deg The amount of rotation along the x-axis.
	 */
		setRotationX : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('rotationX'))){
					init(this);
					$(this).transform('setRotationX', value);
				}
				else{
					$(this).data({ 'rotationX' : value });
					updateTransform(this);
				}
			});
		},
		
		/**
	 	* Sets the amount of rotation along the x, y, and z-axis.
	 	* @param {x} deg The amount of rotation along the x-axis.
	 	* @param {y} deg The amount of rotation along the y-axis.
	 	* @param {z} deg The amount of rotation along the z-axis.	
	 */
		setRotationXYZ : function( x, y, z ){
			return this.each(function(){
				if(isNaN($(this).data('rotationX')) || isNaN($(this).data('rotationY')) || isNaN($(this).data('rotationZ'))){
					init(this);
					$(this).transform('setRotationXYZ', x, y, z);
				}
				else{
					$(this).data( { 'rotationX' : x } );
					$(this).data( { 'rotationY' : y } );
					$(this).data( { 'rotationZ' : z } );
					updateTransform(this);
				}
			});
		},
		
		/**
	 	* Sets the amount of rotation of the y-axis.
	 	* @param {value} deg The amount of rotation along the y-axis.
	 */
		setRotationY : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('rotationY'))){
					init(this);
					$(this).transform('setRotationY', value);
				}
				else{
					$(this).data({ 'rotationY' : value });
					updateTransform(this);
				}
			});	
		},
		
		/**
	 	* Sets the amount of rotation of the z-axis.
	 	* @param {value} deg The amount of rotation along the z-axis.
	 */
		setRotationZ : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('rotationZ'))){
					init(this);
					$(this).transform('setRotationZ', value);
				}
				else{
					$(this).data({ 'rotationZ' : value });
					updateTransform(this);
				}
			});
		},
				
		/**
	 	* Translates the element along the x axis.
	 	* @param {value} px The amount to translate on the x-axis
	 */
		translateX : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('x'))){
					init(this);
					$(this).transform('translateX', value);
				}
				else{
					$(this).data({ 'x' : $(this).data('x') + value });
					updateTransform(this);
				}
			});
		},
		
		/**
	 	* Translates the element along the x, y, and z-axis.
	 	* @param {x} px The amount of translation along x-axis.
	 	* @param {y} px The amount of translation along y-axis.
	 	* @param {z} px The amount of translation along z-axis.
	 */
		translateXYZ : function( x, y, z ){
			return this.each(function(){
				if(isNaN($(this).data('x')) || isNaN($(this).data('y')) || isNaN($(this).data('z'))){
					init(this);
					$(this).transform('translateXYZ', x, y, z);
				}
				else{
					$(this).data({ 'x' : $(this).data('x') + x });
					$(this).data({ 'y' : $(this).data('y') + y });
					$(this).data({ 'z' : $(this).data('z') + z });
					updateTransform(this);
				}
			});			
		},
		
		/**
	 	* Translates the element along the y axis.
	 	* @param {value} px The amount to translate on the y-axis
	 */
		translateY : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('y'))){
					init(this);
					$(this).transform('translateY', value);
				}
				else{
					$(this).data({ 'y' : $(this).data('y') + value });
					updateTransform(this);
				}
			});
		},
		
		/**
	 	* Translates the element along the z axis.
	 	* @param {value} px The amount to translate on the z-axis
	 */
		translateZ : function( value ){
			return this.each(function(){
				if(isNaN($(this).data('z'))){
					init(this);
					$(this).transform('translateZ', value);
				}
				else{
					$(this).data({ 'z' : $(this).data('z') + value });
					updateTransform(this);
				}
			});
		}
	};
	
	/**
 	* Updates the webkit, moz, and transform transformation of the element based on stored data.
 	* @param {element} The element to transform.
 */
	function updateTransform(element){
		$(element).css({ "-webkit-transition": "-webkit-transform " + $(element).data('animationDuration') + "s",
		"-webkit-transform-style": "preserve-3d", 
		"-webkit-transform": "translateX(" + $(element).data('x') + "px)" + " translateY(" + $(element).data('y') + "px)" +  " translateZ(" + $(element).data('z') + "px)" + " scale(" + $(element).data('scale') + ")" + " rotateX(" + $(element).data('rotationX') + "deg)" + " rotateY(" + $(element).data('rotationY') + "deg)" + " rotateZ(" + $(element).data('rotationZ') + "deg)",
		"-moz-transform": "translateX(" + $(element).data('x') + "px)" + " translateY(" + $(element).data('y') + "px)" +  " translateZ(" + $(element).data('z') + "px)" + " scale(" + $(element).data('scale') + ")" + " rotateX(" + $(element).data('rotationX') + "deg)" + " rotateY(" + $(element).data('rotationY') + "deg)" + " rotateZ(" + $(element).data('rotationZ') + "deg)",
		"-moz-transition": "-moz-transform " + $(element).data('animationDuration') + "s",
		"-moz-transform-style": "preserve-3d",
		"transform": "translateX(" + $(element).data('x') + "px)" + " translateY(" + $(element).data('y') + "px)" +  " translateZ(" + $(element).data('z') + "px)" + " scale(" + $(element).data('scale') + ")" + " rotateX(" + $(element).data('rotationX') + "deg)" + " rotateY(" + $(element).data('rotationY') + "deg)" + " rotateZ(" + $(element).data('rotationZ') + "deg)",
		"transition": "transform " + $(element).data('animationDuration') + "s",
		"transform-style": "preserve-3d",
	  });
	}
	
	/**
 	* Sets 3D data corresponding to a DOM element.
	* @param {element} the element to update.
 	* @param {rotationX} deg.
 	* @param {rotationY} deg.
 	* @param {rotationZ} deg.
 	* @param {x} px.
 	* @param {y} px.
 	* @param {z} px.
 	* @param {scale} .
 	* @param {animationDuration} s.
 	* @param {width} px.
 	* @param {height} px.
 */
	function init(element, options){
		// default values
		defaults = {
			x: 0,
			y: 0,
			z: 0,
			rotationX: 0,
			rotationY: 0,
			rotationZ: 0,
			scale: 1,
			animationDuration: 0.01,
			width: $(element).outerWidth(),
			height: $(element).outerHeight()
		};
		// override defaults values with those passed in by the user
		options = $.extend(defaults, options);
		
		//trigger 3D hardware accelleration
		$(element).css({"-webkit-transition": "translateZ(0px) translateX(0px) translateY(0px)", "-webkit-transform-style": "preserve-3d", "-moz-transition": "translateZ(0px) translateX(0px) translateY(0px)", "-moz-transform-style": "preserve-3d", "transition": "translateZ(0px) translateX(0px) translateY(0px)", "transform-style": "preserve-3d",});
		
		//store the data associated with the dom element.
		$(element).data({
			"x" : options.x, 
			"y" : options.y, 
			"z" : options.z, 
			"rotationX" : options.rotationX, 
			"rotationY" : options.rotationY, 
			"rotationZ" : options.rotationX,
			"scale": 1,
			"animationDuration": options.animationDuration,
			"width" : options.width, 
			"height" : options.height
			});
	}

	/**
 	* Extending the jQuery namespace for the plugin.
 	* @param {method} The method to call.
 */
	$.fn.transform = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} 
		else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} 
		else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.transform' );
		}    
	};
})( jQuery );