##jQuery Transform Plugin

jQuery Transform is a jQuery plugin that provides 3D transforms using CSS3.

* Continuous animation is possible.
* Support for FF, Chrome, and Safari.

Requirements
-----------
jQuery 1.6 +

Getting Started
-----------

Download the plugin and include it your HTML markup.

```console
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script src="../jquery.transform.js" type="text/javascript"></script>
```

Any HTML element can now be manipulated using the plugin.

```console
$("element").transform(method, value);
```

Example transforming a div with id "example".

```console
$("#example").transform("setAnimationDuration", 1).transform("rotateX", 300);
```