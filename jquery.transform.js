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


/** @fileoverview jQuery Transform - A jQuery plugin for 3D and 2D transformations.
 *  @author  Phillip J. Whisenhunt
 *  @version 1.0
 *  @requires jQuery 1.6 +
 */
(function( $ ){
	/** @class jQuery.Transform
	*/
	var methods = {		
		/** Decrease the height of the given element.
 		* @param {int} value The amount in pixels to decrease height of the element.
		* @return {void} none
		* @name decreaseHeight
		* @function
 		*/
		decreaseHeight : function( value ) {
    	return this.each(function(){
				$(this).data({ 'height' : ($(this).data("height") - value) });
				$(this).animate({ height:  $(this).data("height") }, $(this).data('animationDuration') * 1000);	//multiply by 1000 since animationDuration is in secs.
			});
		},
		
		/** Decrease the width of the given element.
 		* @param {int} value The amount in pixels to decrease the width of the element.
		* @return {void} none
		* @name decreaseWidth
		* @function
 		*/
		decreaseWidth : function( value ) {
    	return this.each(function(){
				$(this).data({ 'width' : ($(this).data("width") - value) });
				$(this).animate({ width:  $(this).data("width") }, $(this).data('animationDuration') * 1000);	//multiply by 1000 since animationDuration is in secs.
			});
		},
		
		/** Returns the x-axis position of the element
		* @return {int} x-axis value
		* @name getX
		* @function
		 */
		getX : function() { if(!isNaN($(this).data('x'))){ return $(this).data('x'); } else{ init(this); return 0; }; },
		/** Returns the y-axis position of the element 
		* @return {int} y-axis value
		* @name getY
		* @function
		*/
		getY : function() { if(!isNaN($(this).data('y'))){ return $(this).data('y'); } else{ init(this); return 0; }; },
		/** Returns the z-axis position of the element 
		* @return {int} z-axis value
		* @name getZ
		* @function
		*/
		getZ : function() { if(!isNaN($(this).data('z'))){ return $(this).data('z'); } else{ init(this); return 0; }; },
		/** Returns the scale of the element 
		* @return {int} scale value
		* @name getScale
		* @function
		*/
		getScale : function() { if(!isNaN($(this).data('scale'))){ return $(this).data('scale'); } else{ init(this); return 0; }; },
		/** Returns the animation duration of the element 
		* @return {float} animation duration value
		* @name getAnimationDuration
		* @function
		*/
		getAnimationDuration : function() { if(!isNaN($(this).data('animationDuration'))){ return $(this).data('animationDuration'); } else{ init(this); return 0; }; },
		/** Returns the width of the element 
		* @return {int} width value
		* @name getWidth
		* @function
		*/
		getWidth : function() { if(!isNaN($(this).data('width'))){ return $(this).data('width'); } else{ init(this); return $(this).outerWidth(); }; },
		/** Returns the height of the element 
		* @return {int} height value
		* @name getHeight
		* @function
		*/
		getHeight : function() { if(!isNaN($(this).data('width'))){ return $(this).data('width'); } else{ init(this); return $(this).outerHeight(); }; },
		/** Returns the elements amount of rotation about the x-axis 
		* @return {int} x rotation value
		* @name getRotationX
		* @function
		*/
		getRotationX : function() { if(!isNaN($(this).data('rotationX'))){ return $(this).data('rotationX'); } else{ init(this); return 0; }; },
		/** Returns the elements amount of rotation about the y-axis 
		* @return {int} y rotation value
		* @name getRotationY
		* @function
		*/
		getRotationY : function() { if(!isNaN($(this).data('rotationY'))){ return $(this).data('rotationY'); } else{ init(this); return 0; }; },
		/** Returns the elements amount of rotation about the z-axis 
		* @return {int} z rotation value
		* @name getRotationZ
		* @function
		*/
		getRotationZ : function() { if(!isNaN($(this).data('rotationZ'))){ return $(this).data('rotationZ'); } else{ init(this); return 0; }; },
	
		/**
 		* Increases the height of the given element.
 		* @param {int} value The amount in pixels to increase the height of the element.
		* @return {void} none
		* @name increaseHeight
		* @function
 		*/
		increaseHeight : function( value ) {
    	return this.each(function(){
				$(this).data({ 'height' : (value + $(this).data("height")) });
				$(this).animate({ height:  $(this).data("height") }, $(this).data('animationDuration') * 1000);	//multiply by 1000 since animationDuration is in secs.
			});
		},
		
		/**
 		* Increases the width of the given element.
 		* @param {int} value The amount in pixels to increase the width of the element.
		* @return {void} none
		* @name increaseWidth
		* @function
 		*/
		increaseWidth : function( value ) {
    	return this.each(function(){
				$(this).data({ 'width' : (value + $(this).data("width")) });
				$(this).animate({ width:  $(this).data("width") }, $(this).data('animationDuration') * 1000);	//multiply by 1000 since animationDuration is in secs.
			});
		},

		/**
	 	* Rotates the element along the x axis in addition to the current rotation.
	 	* @param {int} value The degree of rotation along the x-axis
		* @return {int} none
		* @name rotateX
		* @function
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
	 	* @param {int} value The degree of rotation along the y-axis
		* @return {int} none
		* @name rotateY
		* @function
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
	 	* @param {int} value The degree of rotation along the z-axis
		* @return {int} none
		* @name rotateZ
		* @function
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
	 	* @param {int} y The amount of rotation along x-axis.
	 	* @param {int} x The amount of rotation along y-axis.
	 	* @param {int} z The amount of rotation along z-axis.
		* @return {void} none
		* @name rotateXYZ
		* @function
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
	 	* @param {int} value The animation duration for the given element.
		* @return {void} none
		* @name setAnimationDuration
		* @function
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
 		* @param {int} value The height of the element.
		* @return {void} none
		* @name setHeight
		* @function
 		*/
		setHeight : function( value ){
			return this.each(function(){
				$(this).animate({ height: value }, $(this).data('animationDuration') * 1000);		//multiply by 1000 since animationDuration is in secs.
				$(this).data({ 'height' : value });
			});
		},
		
		/**
 		* Sets the width of the given element.
 		* @param {int} value The width of the element.
		* @return {void} none
		* @name setWidth
		* @function
 		*/
		setWidth : function( value ) {
    	return this.each(function(){
				$(this).animate({ width: value }, $(this).data('animationDuration') * 1000);	//multiply by 1000 since animationDuration is in secs.
				$(this).data({ 'width' : value });
			});
		},

		/**
 		* Sets the scale of the given element.
 		* @param {int} value The scale of the given element.
		* @return {void} none
		* @name setScale
		* @function
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
 		* @param {int} value The position along the x-axis to set the element.
		* @return {void} none
		* @name setX
		* @function
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
	 	* @param {int} value The position along the y-axis to set the element.
		* @return {void} none
		* @name setY
		* @function
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
	 	* @param {int} value The position along the z-axis to set the element.
		* @return {void} none
		* @name setZ
		* @function
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

		/** Sets the amount of rotation of the x-axis.
	 	* @param {int} value The amount of rotation along the x-axis.
		* @return {void} none
		* @name setRotationX
		* @function
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
	 	* @param {int} x The amount of rotation along the x-axis.
	 	* @param {int} y The amount of rotation along the y-axis.
	 	* @param {int} z The amount of rotation along the z-axis.	
		* @return {void} none
		* @name setRotationXYZ
		* @function
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
	 	* @param {int} value The amount of rotation along the y-axis.
		* @return {void} none
		* @name setRotationY
		* @function
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
	 	* @param {int} value The amount of rotation along the z-axis.
		* @return {void} none
		* @name setRotationZ
		* @function
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
	 	* @param {int} value The amount to translate on the x-axis
		* @return {void} none
		* @name translateX
		* @function
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
	 	* @param {int} x The amount of translation along x-axis.
	 	* @param {int} y The amount of translation along y-axis.
	 	* @param {int} z The amount of translation along z-axis.
		* @return {void} none
		* @name translateXYZ
		* @function
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
	 	* @param {int} value The amount to translate on the y-axis
		* @return {void} none
		* @name translateY
		* @function
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
	 	* @param {int} value The amount to translate on the z-axis
		* @return {void} none
		* @name translateZ
		* @function
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
 	* @param {DOM element} element The element to transform.
	* @return {void} none
	* @name updateTransform
	* @function
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
	* @param {element} element the element to update.
 	* @param {int} rotationX
 	* @param {int} rotationY
 	* @param {int} rotationZ
 	* @param {int} x
 	* @param {int} y
 	* @param {int} z
 	* @param {int} scale
 	* @param {int} animationDuration
 	* @param {int} width
 	* @param {int} height
	* @return {void} none
	* @name init
	* @function
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
 	* @param {string} method The method to call.
	* @return {void} none
	* @name $.fn.tranform
	* @function
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