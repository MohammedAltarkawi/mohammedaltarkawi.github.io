/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Context","./ODataBinding","./lib/_Cache","./lib/_Helper","sap/base/Log","sap/ui/base/SyncPromise","sap/ui/model/BindingMode","sap/ui/model/ChangeReason","sap/ui/model/PropertyBinding"],function(e,t,i,n,o,s,r,a,h){"use strict";var u="sap.ui.model.odata.v4.ODataPropertyBinding",d=Object.freeze([]),p={AggregatedDataStateChange:true,change:true,dataReceived:true,dataRequested:true,DataStateChange:true},c="/"+e.VIRTUAL,l=h.extend("sap.ui.model.odata.v4.ODataPropertyBinding",{constructor:f});function f(e,i,o,s){h.call(this,e,i);t.call(this);if(i.endsWith("/")){throw new Error("Invalid path: "+i)}this.mScope=undefined;if(s){if(typeof s.scope==="object"){this.mScope=s.scope;s={...s};delete s.scope}this.checkBindingParameters(s,["$$groupId","$$ignoreMessages","$$noPatch"]);this.sGroupId=s.$$groupId;this.bNoPatch=s.$$noPatch;this.setIgnoreMessages(s.$$ignoreMessages)}else{this.sGroupId=undefined;this.bNoPatch=false}if(this.sPath==="@$ui5.context.isSelected"){this.bNoPatch=true}this.oCheckUpdateCallToken=undefined;this.oContext=o;this.bHasDeclaredType=undefined;this.bInitial=true;this.mQueryOptions=this.oModel.buildQueryOptions(n.clone(s),i.endsWith("$count"));this.vValue=undefined;this.fetchCache(o);e.bindingCreated(this)}t(l.prototype);l.prototype.attachEvent=function(e,t,i,n){if(!(e in p)){throw new Error("Unsupported event '"+e+"': v4.ODataPropertyBinding#attachEvent")}return h.prototype.attachEvent.apply(this,arguments)};l.prototype.checkUpdateInternal=function(e,t,i,d,p){var l=false,f=this.sPath.indexOf("##"),g=f>=0,y=this.oModel.getMetaModel(),C={data:{}},v=this.getResolvedPath(),P={forceUpdate:v&&(e||e===undefined&&this.getDataState().getControlMessages().length>0||this.oCheckUpdateCallToken&&this.oCheckUpdateCallToken.forceUpdate)},R=this.oType,M=this;this.oCheckUpdateCallToken=P;if(!R&&v&&this.sInternalType!=="any"&&!g&&!v.includes(c)){R=y.fetchUI5Type(this.sReducedPath||v)}if(p===undefined){p=this.oCachePromise.then(function(e){var t,n;if(e){return e.fetchValue(M.lockGroup(i||M.getGroupId()),undefined,function(){l=true;M.fireDataRequested(d)},M).then(function(t){M.assertSameCache(e);return t})}if(!M.isResolved()){return undefined}if(v.includes(c)){P.forceUpdate=false}if(!g){return M.oContext.fetchValue(M.sReducedPath,M)}t=M.sPath.slice(0,f);n=M.sPath.slice(f+2);if(n[0]==="/"){n="."+n}return y.fetchObject(n,y.getMetaContext(M.oModel.resolve(t,M.oContext)),M.mScope&&{scope:M.mScope})}).then(function(e){if(!e||typeof e!=="object"){return e}if(M.sInternalType==="any"&&(M.getBindingMode()===r.OneTime||M.sPath[M.sPath.lastIndexOf("/")+1]==="#"&&!g)){if(g){return e}else if(M.bRelative){return n.publicClone(e)}}o.error("Accessed value is not primitive",v,u)},function(e){M.oModel.reportError("Failed to read path "+v,u,e);if(e.canceled){P.forceUpdate=false;return M.vValue}C={error:e}});if(e&&p.isFulfilled()){if(R&&R.isFulfilled&&R.isFulfilled()){h.prototype.setType.call(this,R.getResult(),this.sInternalType)}this.vValue=p.getResult()}p=Promise.resolve(p)}return s.all([p,R]).then(function(e){var i=e[1],n=e[0];if(P===M.oCheckUpdateCallToken){M.oCheckUpdateCallToken=undefined;h.prototype.setType.call(M,i,M.sInternalType);if(P.forceUpdate||M.vValue!==n){M.bInitial=false;M.vValue=n;M._fireChange({reason:t||a.Change})}M.checkDataState()}if(l){M.fireDataReceived(C,d)}if(C.error){throw C.error}})};l.prototype.deregisterChangeListener=function(){if(this.bRelative&&this.oContext?.deregisterChangeListener?.(this)){return}if(this.sReducedPath){this.doDeregisterChangeListener(this.sReducedPath,this)}};l.prototype.destroy=function(){this.deregisterChangeListener();this.oModel.bindingDestroyed(this);this.oCheckUpdateCallToken=undefined;this.mQueryOptions=undefined;this.vValue=undefined;t.prototype.destroy.call(this);h.prototype.destroy.apply(this,arguments)};l.prototype.doCreateCache=function(e,t){return i.createProperty(this.oModel.oRequestor,e,t)};l.prototype.doFetchOrGetQueryOptions=function(){return this.isRoot()?this.mQueryOptions:undefined};l.prototype.getDependentBindings=function(){return d};l.prototype.getResumePromise=function(){};l.prototype.getValue=function(){return this.vValue};l.prototype.getValueListType=function(){var e=this.getResolvedPath();if(!e){throw new Error(this+" is unresolved")}return this.getModel().getMetaModel().getValueListType(e)};l.prototype.hasPendingChangesInDependents=function(){return false};l.prototype.initialize=function(){if(this.isResolved()){if(this.isRootBindingSuspended()){this.sResumeChangeReason=a.Change}else{this.checkUpdate(true)}}};l.prototype.isMeta=function(){return this.sPath.includes("##")};l.prototype.onChange=function(e,t){this.checkUpdateInternal(t,undefined,undefined,false,e).catch(this.oModel.getReporter())};l.prototype.onDelete=function(){};l.prototype.refreshInternal=function(e,t,i,n){var o=this;if(this.isRootBindingSuspended()){this.refreshSuspended(t);return s.resolve()}return this.oCachePromise.then(function(){if(o.oCache&&o.oCache.reset){o.oCache.reset()}else{o.fetchCache(o.oContext,false,true,n)}if(i){return o.checkUpdateInternal(undefined,a.Refresh,t,n)}})};l.prototype.requestValue=function(){var e=this;return Promise.resolve(this.checkUpdateInternal(false).then(function(){return e.getValue()}))};l.prototype.requestValueListInfo=function(e){var t=this.getResolvedPath();if(!t){throw new Error(this+" is unresolved")}return this.getModel().getMetaModel().requestValueListInfo(t,e,this.oContext)};l.prototype.requestValueListType=function(){var e=this.getResolvedPath();if(!e){throw new Error(this+" is unresolved")}return this.getModel().getMetaModel().requestValueListType(e)};l.prototype.resetChangesInDependents=function(){};l.prototype.resetInvalidDataState=function(){if(this.getDataState().isControlDirty()){this._fireChange({reason:a.Change})}};l.prototype.resume=function(){throw new Error("Unsupported operation: resume")};l.prototype.resumeInternal=function(e,t){var i=this.sResumeChangeReason;this.sResumeChangeReason=undefined;this.fetchCache(this.oContext);if(e){this.checkUpdateInternal(t?undefined:false,i).catch(this.oModel.getReporter())}};l.prototype.setContext=function(e){if(this.oContext!==e){if(this.bRelative){this.checkSuspended(true);this.deregisterChangeListener();if(e){if(this.oType&&!this.bHasDeclaredType&&n.getMetaPath(this.oModel.resolve(this.sPath,e))!==n.getMetaPath(this.sReducedPath)){h.prototype.setType.call(this,undefined,this.sInternalType)}this.sReducedPath=undefined}}this.oContext=e;this.sResumeChangeReason=undefined;if(this.bRelative){this.fetchCache(this.oContext);this.checkUpdateInternal(this.bInitial||undefined,a.Context).catch(this.oModel.getReporter())}}};l.prototype.setType=function(e,t){var i=this.oType;this.bHasDeclaredType=!!e;if(e&&e.getName()==="sap.ui.model.odata.type.DateTimeOffset"){e.setV4()}h.prototype.setType.apply(this,arguments);if(!this.bInitial&&i!==e){this._fireChange({reason:a.Change})}};l.prototype.setValue=function(e,t){var i,o,s=this.getResolvedPath(),r=this;function h(e){r.oModel.reportError("Failed to update path "+s,u,e);return e}this.checkSuspended();if(this.bNoPatch&&t){throw h(new Error("Must not specify a group ID ("+t+") with $$noPatch"))}n.checkGroupId(t);if(typeof e==="function"||e&&typeof e==="object"){throw h(new Error("Not a primitive value"))}if(!this.bNoPatch&&this.vValue===undefined){throw h(new Error("Must not change a property before it has been read"))}if(this.vValue!==e){if(this.oCache){h(new Error("Cannot set value on this binding as it is not relative"+" to a sap.ui.model.odata.v4.Context"));return}i=this.bNoPatch?null:this.lockGroup(t,true,true);o=this.oContext.doSetProperty(this.sPath,e,i);o.catch(function(e){if(i){i.unlock(true)}h(e)});if(!o.isRejected()&&r.oModel.hasListeners("propertyChange")){r.oModel.firePropertyChange({context:r.oContext,path:r.sPath,promise:o.isPending()?o.getResult():undefined,reason:a.Binding,resolvedPath:s,value:e})}}};l.prototype.supportsIgnoreMessages=function(){return true};l.prototype.suspend=function(){throw new Error("Unsupported operation: suspend")};l.prototype.updateAfterCreate=function(){return this.checkUpdateInternal()};l.prototype.visitSideEffects=function(){};return l});
//# sourceMappingURL=ODataPropertyBinding.js.map