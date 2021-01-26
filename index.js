(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AVwinIAUgGAVwgeIAOgHATpCuIAqgIAXlASIAOgDA1rgeIAOgHA3yCuIAqgIAz2ASIAOgDA1rinIAUgG");
	this.shape.setTransform(258.375,162.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(7,1,1).p("AbOgNQA0g0g8gVQgSgHgcgCIgYgCIguAMIgCBCIA/ADQAfACAgABIALANQANAOAGAPQAUAwg5AXASGhbIicAAIAABmIAABlAW3gxQgdgqgpgPQhRgeg5CHIgBAbQABAgAOAVQAsBBCWhKARZAQIhvgFAZQgTIAAABIgEBwIBhAGAwNgNQA0g0g8gVQgSgHgcgCIgYgCIguAMIgCBCIAAABIgEBwIBhAGA7xALIAABlAyLgTIA/ADQAfACAgABIALANQANAOAGAPQAUAwg5AXA0kgxQgdgqgpgPQhRgeg5CHIgBAbQABAgAOAVQAsBBCWhKA5VhbIicAAIAABmA6CAQIhvgF");
	this.shape_1.setTransform(258.4002,106.0514);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AGuCeIEGgBIEQgBIEpgBIEQAAIEYgCIENAAIEMgBIAHBBQADBQgNBOQgtD8jLCPQh1BSioApQiCAfidAGQhJAChNgDQguADhEgDIgxgEQiHgKh1gfQgzgNgvgRQhkgkhOgyQhcg8g9hQQiLi5AkkdgAVvtBQAngBArgFIAcgEQADAAAEgBQAbgEAfgHQABAAAAAAQAwgLAwgQQABAAABAAQA2gSA2gXIAYAMQAhAOAnANQAzAQA0AKQA1AJA3AEQAiACAlAAQACAAADAAQBGABBIgKIgcA5QghBJgRBQQg2D9B3DbIiHACIhOABQgzAAg1ABQgzAAg0AAQgxABgxABIhkAAIhjABIhXAAIhbABQgDAAgDAAIkHABQiiAAiTgBQlGgDgKgLQAxhJAWh6IAFgiQARh1gZh2QgXhtg6htIBsAMQCDAHB4gZQBmgWBUgrIAbARQAlAVAsAQQB+AvCVgFIgCCzIgCD2IgDD2AVhEhQgPACgXAEQgtALgmAUIgUAMIgIBtQABBxAqAUQABABABAAQADADgMAKQgPALgXAKQg0AYgNgOAVhEhQgDADgFAFQgIAKgEALQgLAkAsAlQgFAFgGAIQgOARgGAQQgVA2A0AmQhMBGgpgSAV9IJQASgIAQgBQA0gDAQBEQAQBDiEA0QgqAQgzANATUFSQg6AngWA8QgbBLAcBqIAEAHIATAmQAeAtAtAaQAFADAGADQBtA5ClhBQA1gjAjg/QACgEADgEQAZgzAAg0QgBhJg1hNQgHgIgNgNQgbgYgegQQhNgshJAVAXyI+QASgBAQACQA2AHAXAsAWCGBQAagFAeAGQBeASBiB3A1stBQAngBArgFIAcgEQADAAAEgBQAbgEAfgHQABAAAAAAQAwgLAwgQQABAAABAAQA2gSA2gXIAYAMQAhAOAnANQAzAQA0AKQA1AJA3AEQAiACAlAAQACAAADAAQBGABBIgKIgcA5QghBJgRBQQg2D9B3DbIiHACIhOABQgzAAg1ABQgzAAg0AAQgxABgxABIhkAAIhjABIhXAAIhbABQgDAAgDAAIkHABQiiAAiTgBQlGgDgKgLQAxhJAWh6IAFgiQARh1gZh2QgXhtg6htIBsAMQCDAHB4gZQBmgWBUgrIAbARQAlAVAsAQQB+AvCVgFIgCCzIgCD2IgDD2EgktACeIEGgBIEQgBIEpgBIEQAAIEYgCIENAAIEMgBIAHBBQADBQgNBOQgtD8jLCPQh1BSioApQiCAfidAGQhJAChNgDQguADhEgDIgxgEQiHgKh1gfQgzgNgvgRQhkgkhOgyQhcg8g9hQQiLi5AkkdgAxhILQgBhJg1hNQgHgIgNgNQgbgYgegQQhNgshJAVQgDADgFAFQgIAKgEALQgLAkAsAlQgFAFgGAIQgOARgGAQQgVA2A0AmQhMBGgpgSA1ZGBQAagFAeAGQBeASBiB3A16EhQgPACgXAEQgtALgmAUIgUAMIgIBtQABBxAqAUQABABABAAQADADgMAKQgPALgXAKQg0AYgNgOA4HFSQg6AngWA8QgbBLAcBqIAEAHIATAmQAeAtAtAaQAFADAGADQBtA5ClhBQA1gjAjg/QACgEADgEQAZgzAAg0A1eIJQASgIAQgBQA0gDAQBEQAQBDiEA0QgqAQgzANAzpI+QASgBAQACQA2AHAXAs");
	this.shape_2.setTransform(258.5325,106.8444);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(6,1,1).p("AF+wcQCCAdBMADQDzAIC2hwIBAAlQBKAkCvAlQCvAlEPiQIAxAaQBAAdBIATQDmA8DlhBIBGBoQACADg4BMQg+BigZBnQhRFQFGE+QgdAYgeAZQg7A1gDAHQAAACAFAkQAEAugBAvQgDCYg5CDQi4GiqgBAQimCGgJAAQgDAAhHhBQhIhBgMAAQhGgEhegSQi4gkiWhKQjQhmhtiiQgWghgTgjQhbi0AWjsIhxh6QAhgdAqgzQBAhNArhQQAPgbAMgbQB9kdiYj6Qgjg7gzg5gEgldgQcQCCAdBMADQDzAIC2hwIBAAlQBKAkCvAlQCvAlEPiQIAxAaQBAAdBIATQDmA8DlhBIBGBoQACADg4BMQg+BigZBnQhRFQFGE+QgdAYgeAZQg7A1gDAHQAAACAFAkQAEAugBAvQgDCYg5CDQi4GiqgBAQimCGgJAAQgDAAhHhBQhIhBgMAAQhGgEhegSQi4gkiWhKQjQhmhtiiQgWghgTgjQhbi0AWjsIhxh6QAhgdAqgzQBAhNArhQQAPgbAMgbQB9kdiYj6Qgjg7gzg5g");
	this.shape_3.setTransform(258.975,112.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A50044").s().p("AVfGEQgvAChEgDIgHjDIAKAGQBtA5ClhBIgMDGIhCABIhUgBgA18GEQgvAChEgDIgHjDIAKAGQBtA5ClhBIgMDGIhCABIhUgBgAcTmDIEMgBIASJpQh1BSioApgAvImDIEMgBIASJpQh1BSioApgANeE5QhlgkhOgzIAGphIEQgBIgCLXQgygNgvgRgA99E5QhlgkhOgzIAGphIEQgBIgCLXQgygNgvgRgATqmBIERgBIgGCdQhOgshIAWQgPABgXAFQguAKglAVgA3xmBIERgBIgGCdQhOgshIAWQgPABgXAFQguAKglAVg");
	this.shape_4.setTransform(258.775,160.9944);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AYnBzIETgFIgDD2IkHABgAy0BzIETgFIgDD2IkHABgAOrFWQAxhJAWh6IAFgiQEFgEAHAGIABAFQACAVgBBaIgKB9QlGgDgKgLgA8wFWQAxhJAWh6IAFgiQEFgEAHAGIABAFQACAVgBBaIgKB9QlGgDgKgLgAOelTIBsAMQCDAHB4gZIAEDYIkaAIQgXhtg6htgA89lTIBsAMQCDAHB4gZIAEDYIkaAIQgXhtg6htgAYrlkQB+AvCVgFIgCCzIkVAGgAywlkQB+AvCVgFIgCCzIkVAGg");
	this.shape_5.setTransform(212.225,54.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DB0030").s().p("ANVF/IAJh9QABhagCgVIgBgFQgHgGkFAEQASh1gah1IEbgIIgFjYQBmgWBUgrIAcARQAkAVAsAQIgEDjIEVgGIgCD1IkTAFIAJDyIhpAAIjLgBgA+HF/IAKh9QABhagCgVIgBgFQgGgGkGAEQARh1gZh1IEbgIIgFjYQBmgWBUgrIAcARQAkAVAsAQIgEDjIEVgGIgCD1IkTAFIAJDyIhpAAIjMgBgAXxF+IgIqjIAdgEIAGgBQAbgEAggHIABAAIAAKzgAzqF+IgHqjIAcgEIAGgBQAcgEAfgHIAAAAIABKzgAaplQQA2gSA3gXIgHL2IhjAAgAwylQQA2gSA3gXIgHL2IhkAAgAd1lSQAzAQA0AKIgEKzIhnAAgAtmlSQAzAQA0AKIgDKzIhoAAgEAhIgErQAiACAlAAIAFAAIgFKiIhPABgAqTkrQAiACAlAAIAFAAIgFKiIhPABg");
	this.shape_6.setTransform(254.5,52.2083);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFED02").s().p("AOlF9IADj3IACj1IACiyQAngBArgGIAIKkIhbABIgGAAgA82F9IADj3IACj1IACiyQAngBArgGIAIKkIhbABIgGAAgARck4QAwgKAwgQIACgBIACLOIhjABgA5/k4QAwgKAwgQIACgBIACLOIhjABgAUql8IAYAMQAhAPAnAMIgELOIhiABgA2xl8IAYAMQAhAPAnAMIgELOIhiABgAapkrQBGAABIgJIgcA5QghBJgRBPQg2D8B3DbIiHACgAwykrQBGAABIgJIgcA5QghBJgRBPQg2D8B3DbIiHACg");
	this.shape_7.setTransform(303.625,52.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFEF02").s().p("AU6lZQA1AJA3AEIgIKlIhoABgA2hlZQA1AJA3AEIgIKlIhoABg");
	this.shape_8.setTransform(321.925,55.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004D98").s().p("AYEC/QA1gjAjg+IAFgJQAZgzAAgzQgBhJg1hMQgHgJgNgNQgbgYgegQIAGidIEYgCIABLjQiCAgidAFgAzXC/QA1gjAjg+IAFgJQAZgzAAgzQgBhJg1hMQgHgJgNgNQgbgYgegQIAGidIEYgCIABLjQiCAgidAFgAS+GAQiHgKh1gfIACrWIEpgCIgFCrIgUANQg6AmgWA9QgbBKAcBqIAEAHIATAmQAeAsAtAaIAIDDgA4dGAQiHgKh1gfIACrWIEpgCIgFCrIgUANQg6AmgWA9QgbBKAcBqIAEAHIATAmQAeAsAtAaIAIDDgEAgigGDIEMgBIAHBBQADBQgNBPQgtD7jLCPgAq5mDIEMgBIAHBBQADBQgNBPQgtD7jLCPgAIVBXQiLi4AkkdIEGAAIgGJhQhcg7g9hRgEgjGABXQiLi4AkkdIEGAAIgGJhQhcg7g9hRg");
	this.shape_9.setTransform(258.5325,160.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDBB00").s().p("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");
	this.shape_10.setTransform(258.975,112.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-3,-3,524,231), null);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(316.95,260,1,1,0,0,0,258.9,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(375.1,384.5,203.89999999999998,-9);
// library properties:
lib.properties = {
	id: '612F35A2C57F6148BE7A9E6592ACB2B1',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['612F35A2C57F6148BE7A9E6592ACB2B1'] = {
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