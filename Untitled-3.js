(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Untitled_3_atlas_1", frames: [[1282,0,214,339],[1498,60,1,54],[1498,0,306,58],[1282,341,352,68],[0,0,1280,720]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Untitled_3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Untitled_3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Untitled_3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Untitled_3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.OuterEarth = function() {
	this.initialize(ss["Untitled_3_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Rocket_Wing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3C1B").s().p("AgZ2iQitUaI9OiIniKJQo95GKPz/g");
	this.shape.setTransform(37.5229,-0.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-144.2,75.1,288.5);


(lib.Rocket_Window = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#260600").s().p("AkNEMQhvhwABidQABieBwhuQBvhvCdABQBbABBLAlIAMAHIAHADQAqAXAqAqQBtBvAACdQgBCehvBvIgwAoIgOAKIgLAGIgLAHIgSAJQgUAKgUAHQgzARhMADQiegBhuhvg");
	this.shape.setTransform(50.0747,0.0246);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3C1B").s().p("AgCH1QjPgBiSiUQiSiUABjOQABjPCUiSQCTiSDPABQBYABBNAbIAMAFQBjAmBNBOQCSCTgBDPQgCDPiTCSQhLBLh1AtIgDABQhJAYhTAAIgDAAgAkKkNQhwBugBCeQgBCdBvBwQBuBvCeABQBMgDAzgRQAUgHAUgJIABgBIgBAAIASgJIALgHIALgGIAOgKIAwgoQBvhvABieQAAidhthvQgqgqgqgXIgHgDIgMgHQhLglhbgBIgCAAQicAAhuBug");
	this.shape_1.setTransform(50.0746,0.0252);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-50,100.2,100.1);


(lib.Flame_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBF00").s().p("AluzmILEAAQG1SssNUhQruznGCzmg");
	this.shape.setTransform(36.1899,0.0516,0.7286,0.6533,0.3158);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-82,72.7,164);


(lib.Flame_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3C1B").s().p("AluzmILEAAQG1SssNUhQruznGCzmg");
	this.shape.setTransform(66.8733,0.1444,1.3482,1.2088,0.3153);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-151.7,134.4,303.5);


(lib.launchbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// buttons
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(14.5,3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.launchbutton, new cjs.Rectangle(0,0,176,34), null);


(lib.Flames = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Flame_2
	this.instance = new lib.Flame_2("synched",0);
	this.instance.setTransform(67.15,-150.8,1,1,0,0,0,36.4,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-80.1,scaleX:0.9174,scaleY:1.0617,x:67.2,y:-150.95},0).wait(1).to({regX:36.5,regY:-80.2,scaleX:0.7792,scaleY:1.1049,x:67.25,y:-151},0).wait(1).to({regX:36.6,scaleX:0.9454,scaleY:0.9941,x:67.3},0).wait(1).to({scaleX:0.8627,scaleY:1.1111,y:-150.95},0).wait(1).to({regY:-80.3,scaleX:1.1128,scaleY:0.9447,x:67.35,y:-151.05},0).wait(1).to({regY:-80.4,scaleX:0.7809,scaleY:1.0186,y:-151.15},0).wait(1).to({regX:36.7,scaleX:0.6694,scaleY:1.117},0).wait(1).to({regX:36.8,regY:-80.5,scaleX:0.8915,scaleY:1.0613,x:67.45,y:-151.3},0).wait(1).to({scaleX:1.1138,scaleY:0.9626},0).wait(1).to({scaleX:0.8338,scaleY:1.0181,x:67.5},0).wait(1).to({startPosition:0},0).wait(1));

	// Flame_1
	this.instance_1 = new lib.Flame_1("synched",0);
	this.instance_1.setTransform(67.15,-150.9,1,1,0,0,0,67.2,-151.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:-151.7,scaleX:0.9405,scaleY:1.089,y:-150.85},0).wait(1).to({regX:67.1,scaleX:1.0741,scaleY:0.9438,x:67.1},0).wait(1).to({regY:-151.6,scaleX:0.9697,scaleY:1.0066},0).wait(1).to({scaleX:0.9249,scaleY:1.1153,y:-150.9},0).wait(1).to({regX:67.2,scaleX:0.9841,scaleY:0.8513,x:67.25,y:-150.8},0).wait(1).to({regY:-151.7,scaleX:0.91,scaleY:0.9702,y:-150.9},0).wait(1).to({regY:-151.8,scaleX:0.9994,scaleY:0.9042,x:67.2,y:-150.95},0).wait(1).to({regX:67.3,regY:-151.7,scaleX:0.8646,scaleY:1.0592,x:67.3,y:-150.9},0).wait(1).to({regX:67.4,regY:-151.8,scaleX:0.9247,scaleY:0.8218,x:67.35,y:-150.95},0).wait(1).to({scaleX:0.8501,scaleY:0.914},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-153,144.4,340.6);


(lib.RocketShip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("AkONPQFgvNlgrOIAAAAIAJgCIAJACQB1AWB4C8QAtBVAtBXQAeA8AbA8IACAGQBdDYAfDQIAHA7QANCegNBvQgEAogIAlQglDHhtCbg");
	this.shape.setTransform(96.4375,84.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(85));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An5DKQAah+Ath5QAehQAjhMILiAAIAaA3IACAHQBKCsAjCpg");
	mask.setTransform(70.15,65.075);

	// Rocket_Window
	this.instance = new lib.Rocket_Window("synched",0);
	this.instance.setTransform(11.75,65.5,0.2353,0.3457,0,0,0,50,-0.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({regX:50.1,regY:0,scaleX:0.2416,x:11.95},0).wait(1).to({scaleX:0.2478,x:12.35},0).wait(1).to({scaleX:0.2538,x:13},0).wait(1).to({scaleX:0.2597,x:14},0).wait(1).to({scaleX:0.2654,x:15.3},0).wait(1).to({scaleX:0.271,x:16.85},0).wait(1).to({scaleX:0.2764,x:18.65},0).wait(1).to({scaleX:0.2817,x:20.75},0).wait(1).to({scaleX:0.2869,x:23.1},0).wait(1).to({scaleX:0.2919,x:25.75},0).wait(1).to({scaleX:0.2967,x:28.75},0).wait(1).to({scaleX:0.3014,x:31.95},0).wait(1).to({scaleX:0.306,x:35.5},0).wait(1).to({scaleX:0.3104,x:39.25},0).wait(1).to({scaleX:0.3146,x:43.3},0).wait(1).to({scaleX:0.3187,x:47.65},0).wait(1).to({scaleX:0.3227,x:52.3},0).wait(1).to({scaleX:0.3265,x:57.2},0).wait(1).to({scaleX:0.3302,x:62.4},0).wait(1).to({regX:49.9,regY:-0.3,scaleX:0.3337,x:67.85,y:65.45},0).wait(1).to({regX:50.1,regY:0,scaleX:0.3296,x:73.45,y:65.55},0).wait(1).to({scaleX:0.3253,x:78.8},0).wait(1).to({scaleX:0.3209,x:83.85},0).wait(1).to({scaleX:0.3163,x:88.6},0).wait(1).to({scaleX:0.3116,x:93.05},0).wait(1).to({scaleX:0.3066,x:97.3},0).wait(1).to({scaleX:0.3016,x:101.25},0).wait(1).to({scaleX:0.2963,x:104.95},0).wait(1).to({scaleX:0.2909,x:108.3},0).wait(1).to({scaleX:0.2853,x:111.45},0).wait(1).to({scaleX:0.2796,x:114.3},0).wait(1).to({scaleX:0.2737,x:116.9},0).wait(1).to({scaleX:0.2676,x:119.2},0).wait(1).to({scaleX:0.2614,x:121.25},0).wait(1).to({scaleX:0.255,x:123},0).wait(1).to({scaleX:0.2484,x:124.55},0).wait(1).to({scaleX:0.2417,x:125.75},0).wait(1).to({scaleX:0.2348,x:126.7},0).wait(1).to({scaleX:0.2278,x:127.35},0).wait(1).to({scaleX:0.2205,x:127.8},0).wait(1).to({regX:50.2,regY:-0.3,scaleX:0.2132,x:127.9,y:65.45},0).to({_off:true},1).wait(38));

	// Fin
	this.instance_1 = new lib.Rocket_Wing("synched",0);
	this.instance_1.setTransform(64.8,140.9,0.0672,0.3457,0,0,0,73.7,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:74.7,scaleX:0.0288,x:69.3},0).wait(1).to({skewY:180,x:69.8},0).to({regX:73.5,scaleX:0.3455,x:108.15},15,cjs.Ease.get(1)).to({_off:true},1).wait(52).to({_off:false,regX:74.9,scaleX:0.3457,skewY:0,x:32.45},0).wait(1).to({regX:75,scaleX:0.3445,x:32.65},0).wait(1).to({regX:75.2,scaleX:0.3408,x:33.15},0).wait(1).to({regX:74.9,scaleX:0.3346,x:33.75},0).wait(1).to({scaleX:0.3259,x:34.8},0).wait(1).to({regX:75,scaleX:0.3148,x:36.1},0).wait(1).to({regX:74.9,scaleX:0.3012,x:37.65},0).wait(1).to({regX:74.7,scaleX:0.2851,x:39.5},0).wait(1).to({regX:75,scaleX:0.2665,x:41.7},0).wait(1).to({scaleX:0.2454,x:44.1},0).wait(1).to({regX:74.8,scaleX:0.2219,x:46.85},0).wait(1).to({scaleX:0.1959,x:49.9},0).wait(1).to({regX:74.7,scaleX:0.1674,x:53.15},0).wait(1).to({regX:74.8,scaleX:0.1365,x:56.8},0).wait(1).to({regX:74.7,scaleX:0.1031,x:60.65},0).wait(1));

	// Fin
	this.instance_2 = new lib.Rocket_Wing("synched",0);
	this.instance_2.setTransform(32.45,140.9,0.3457,0.3457,0,0,0,74.9,0.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({regX:74.7,scaleX:0.0288,x:69.3},16,cjs.Ease.get(-1)).wait(1).to({skewY:180,x:69.8},0).to({regX:73.5,scaleX:0.3455,x:108.15},15,cjs.Ease.get(1)).to({_off:true},1).wait(43));

	// Fin
	this.instance_3 = new lib.Rocket_Wing("synched",0);
	this.instance_3.setTransform(32.45,140.9,0.3457,0.3457,0,0,0,74.9,0.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46).to({_off:false},0).to({regX:74.7,scaleX:0.0288,x:69.3},16,cjs.Ease.get(-1)).wait(1).to({skewY:180,x:69.8},0).to({regX:73.5,scaleX:0.3455,x:108.15},15,cjs.Ease.get(1)).to({_off:true},1).wait(6));

	// Rocket_Body
	this.instance_4 = new lib.CachedBmp_2();
	this.instance_4.setTransform(16.6,0,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_1();
	this.instance_5.setTransform(122.95,99.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(85));

	// Bezel
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#260600").s().p("ANCCyI6GgHQhIAAgzg0QgygyAAhIQAAhJAzgyQA0gzBIAAIaGAGQBJABAyAzQAzAzAABIQgBBIg0AyQgyA0hHAAIgCAAg");
	this.shape_1.setTransform(69.8586,170.8761,0.3457,0.3457);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(85));

	// Flames
	this.instance_6 = new lib.Flames("synched",0);
	this.instance_6.setTransform(68.9,222.25,0.3457,0.3457,0,0,0,67,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(85));

	// Fin
	this.instance_7 = new lib.Rocket_Wing("synched",0);
	this.instance_7.setTransform(108.15,140.9,0.3455,0.3457,0,0,180,73.5,0.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).to({regX:73,scaleX:0.0452,x:71.1},17,cjs.Ease.get(-1)).to({_off:true},1).wait(19).to({_off:false,regX:75.1,scaleX:0.0546,skewY:0,x:69.3},0).to({regX:74.9,scaleX:0.3457,x:32.45},16,cjs.Ease.get(1)).to({_off:true},1).wait(15));

	// Fin
	this.instance_8 = new lib.Rocket_Wing("synched",0);
	this.instance_8.setTransform(103.55,140.9,0.3081,0.3457,0,0,180,73.5,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({scaleX:0.2946,x:101.9},0).wait(1).to({regX:73.7,scaleX:0.279,x:99.95},0).wait(1).to({regX:73.5,scaleX:0.2614,x:97.8},0).wait(1).to({regX:73.2,scaleX:0.2416,x:95.35},0).wait(1).to({regX:73.7,scaleX:0.2198,x:92.6},0).wait(1).to({regX:73.8,scaleX:0.1959,x:89.65},0).wait(1).to({regX:73.5,scaleX:0.1699,x:86.45},0).wait(1).to({regX:73,scaleX:0.1419,x:83.05},0).wait(1).to({scaleX:0.1117,x:79.3},0).wait(1).to({scaleX:0.0795,x:75.3},0).wait(1).to({scaleX:0.0452,x:71.1},0).to({_off:true},1).wait(17).to({_off:false,regX:75.1,scaleX:0.0546,skewY:0,x:69.3},0).to({regX:74.9,scaleX:0.3457,x:32.45},16,cjs.Ease.get(1)).to({_off:true},1).wait(33).to({_off:false,regX:73.5,scaleX:0.3455,skewY:180,x:108.15},0).wait(1).to({scaleX:0.3445,x:108.05},0).wait(1).to({scaleX:0.3414,x:107.65},0).wait(1).to({regX:73.6,scaleX:0.3362,x:106.95},0).wait(1).to({scaleX:0.3289,x:106.1},0).wait(1).to({regX:73.7,scaleX:0.3195,x:104.95},0).wait(1));

	// Fin
	this.instance_9 = new lib.Rocket_Wing("synched",0);
	this.instance_9.setTransform(41.7,140.9,0.2729,0.3457,0,0,0,75.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:74.9,scaleX:0.29,x:39.5},0).wait(1).to({regX:75,scaleX:0.3048,x:37.65},0).wait(1).to({regX:74.9,scaleX:0.3173,x:36.05},0).wait(1).to({regX:75.1,scaleX:0.3275,x:34.8},0).wait(1).to({regX:75,scaleX:0.3355,x:33.75},0).wait(1).to({scaleX:0.3412,x:33.05},0).wait(1).to({scaleX:0.3446,x:32.65},0).wait(1).to({regX:74.9,scaleX:0.3457,x:32.45},0).to({_off:true},1).wait(33).to({_off:false,regX:73.5,scaleX:0.3455,skewY:180,x:108.15},0).to({regX:73,scaleX:0.0452,x:71.1},17,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false,regX:75.1,scaleX:0.0546,skewY:0,x:69.3},0).wait(1).to({regX:74.6,scaleX:0.0898,x:64.8},0).wait(1).to({regX:74.9,scaleX:0.1228,x:60.65},0).wait(1).to({scaleX:0.1535,x:56.8},0).wait(1).to({regX:74.5,scaleX:0.182,x:53.15},0).wait(1).to({regX:75,scaleX:0.2081,x:49.9},0).wait(1).to({scaleX:0.232,x:46.85},0).wait(1).to({scaleX:0.2536,x:44.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,0,127.1,287);


(lib.RocketContainer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// Rocket_Ship
	this.instance = new lib.RocketShip("synched",0);
	this.instance.setTransform(-1.05,1.25,0.4813,0.4813,45,0,0,69.7,143.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:651.95,y:-504.7,startPosition:84},84).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-571.6,765.3000000000001,617.1);


// stage content:
(lib.Untitled3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var_this=this;
		_this.launch_btn.on('click',function(evt) {
			_this.rocket.gotoAndPlay(0);
			
		});
		this.rocket.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// launch_button
	this.launch_btn = new lib.launchbutton();
	this.launch_btn.name = "launch_btn";
	this.launch_btn.setTransform(395,379.05,1,1,0,0,0,88,17);

	this.timeline.addTween(cjs.Tween.get(this.launch_btn).wait(1));

	// Rocket_Container
	this.rocket = new lib.RocketContainer();
	this.rocket.name = "rocket";
	this.rocket.setTransform(-47.9,451.95);

	this.timeline.addTween(cjs.Tween.get(this.rocket).wait(1));

	// Outer_Earth
	this.instance = new lib.OuterEarth();
	this.instance.setTransform(-86,-17,0.5938,0.5938);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(173.3,183,500.7,322.5);
// library properties:
lib.properties = {
	id: '686404CD73A97047B675C720826B2244',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Untitled_3_atlas_1.png", id:"Untitled_3_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['686404CD73A97047B675C720826B2244'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;