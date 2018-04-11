define(["require","exports","./timeline","./keyframes","../function_helpers","./exportCss","./importCss","../../scripts/main"],function(e,i,t,r,n,d,a,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function e(){}return e.prototype.init=function(e){this.runtimeEditor=e,this.runtimeEditor.Timeline=new t.default(e),this.runtimeEditor.Keyframes=new r.default(e),this.runtimeEditor.Timeline.create(),this.runtimeEditor.Keyframes.init()},e.prototype.attachKeyframeHandlers=function(e){this.runtimeEditor.Keyframes.widgetKeyframesHandlers(e)},e.prototype.createAnimationWidget=function(e,i){var t=this,r=$('[data-timeline-info-widget-id="'+e.id+'"]').length;o.default.preferences.timeline.filterTimelineWidgets&&!r?e.className.split(" ").map(function(r){t.runtimeEditor.scene.animationClasses[r]&&t.runtimeEditor.Timeline.addWidget(e,i)}):r||this.runtimeEditor.Timeline.addWidget(e,i)},e.prototype.onKeyframeChange=function(e,i,t){this.runtimeEditor.Keyframes.onKeyframeChange(e,i,t)},e.prototype.addKeyframe=function(e,i,t,r,n){this.runtimeEditor.Keyframes.addKeyframe(e,i,t,r,n),this.runtimeEditor.Timeline.create(),this.runtimeEditor.exportScene()},e.prototype.loadTimeline=function(e,i){void 0===i&&(i=!0);for(var t in this.runtimeEditor.mappedWidgets){var r=this.runtimeEditor.mappedWidgets[t].widget,n=$("#"+r.id);n.length>0&&n[0].hasAttribute("data-element-selectable")&&this.createAnimationWidget(r,{initial:i})}this.loadKeyframes(e,i)},e.prototype.loadKeyframes=function(e,i,t){void 0===i&&(i=!1),void 0===t&&(t=!1);var r=this;this.runtimeEditor._sceneActionState.keyframeInitial=!0;for(var d in e){var a=e[d].keyframes;for(var s in a){var m=a[s];for(var u in m){var l=m[u];for(var f in l){var p=l[f].values[0],h=this.runtimeEditor.mappedWidgets;for(var c in h)if(h[c].widget.className){var g={className:d,widgetId:c,group:s,property:u,value:p,keyframeTime:f};$('[data-timeline-info-widget-id="'+c+'"]').length||$("#"+c).is("[data-parent-widget-id]")||this.createAnimationWidget(this.runtimeEditor.mappedWidgets[c].widget,{initial:!1}),h[c].widget.className.split(" ").filter(function(e){e!==this.className||o.default.copiedWidgets.widgets[this.widgetId]&&!i||(t&&r.runtimeEditor.Timeline.initAnimationClassName(this.widgetId,"",this.className,!1,!0),r.runtimeEditor.Keyframes.addKeyframe(this.widgetId,this.group,this.property,this.value,{seconds:this.keyframeTime}))}.bind(g))}}}}}if(this.runtimeEditor._sceneActionState.keyframeInitial=!1,this.runtimeEditor.Timeline.create(),this.runtimeEditor.exportScene(),o.default.openFiles[o.default.selectedEditor].tab.tabWidgetState.editWidget){var y=this.runtimeEditor.scene.widgets[0].id;n.default.getFromTimeline('[data-timeline-info-widget-id="'+y+'"]').hide(),n.default.getFromTimeline('.widget-line[data-widget-id="'+y+'"]').hide()}},e.prototype.deleteKeyframe=function(e){e?this.runtimeEditor.Timeline.deleteKeyframe(e):this.runtimeEditor.Timeline.deleteSelectedKeyframes()},e.prototype.editId=function(e,i){this.runtimeEditor.Timeline.editId(e,i),this.runtimeEditor.scene.animations[e]&&(this.runtimeEditor.scene.animations[i]=this.runtimeEditor.scene.animations[e],this.runtimeEditor.scene.animations[e].id=i,e!==i&&delete this.runtimeEditor.scene.animations[e])},e.prototype.deleteWidget=function(e){this.runtimeEditor.Timeline.deleteWidget(e)},e.prototype.exportToCss=function(e){return d.default.exportCss(e,this.runtimeEditor.editorTabName)},e.prototype.importCSS=function(e){return a.default.importCss(e)},e}();i.default=s});