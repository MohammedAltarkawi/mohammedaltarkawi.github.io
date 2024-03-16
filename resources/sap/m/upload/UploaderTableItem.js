/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/m/library","sap/ui/core/Element","sap/ui/core/util/File","sap/ui/Device","sap/m/upload/UploadSetwithTableItem","sap/m/upload/UploaderHttpRequestMethod"],function(e,t,a,s,r,o,n){"use strict";var p=a.extend("sap.m.upload.UploaderTableItem",{metadata:{library:"sap.m",publicMethods:["uploadItem","downloadItem"],properties:{uploadUrl:{type:"string",defaultValue:null},downloadUrl:{type:"string",defaultValue:null},httpRequestMethod:{type:"sap.m.upload.UploaderHttpRequestMethod",defaultValue:n.Post},useMultipart:{type:"boolean",defaultValue:false}},events:{uploadStarted:{parameters:{item:{type:"sap.m.upload.UploadSetwithTableItem"}}},uploadProgressed:{parameters:{item:{type:"sap.m.upload.UploadSetwithTableItem"},loaded:{type:"int"},total:{type:"int"}}},uploadCompleted:{parameters:{item:{type:"sap.m.upload.UploadSetwithTableItem"},responseXHR:{type:"object"}}}}}});p.prototype.init=function(){this._mRequestHandlers={}};p.uploadFile=function(e,t,a){var s=new window.XMLHttpRequest;var o=this.getHttpRequestMethod();return new Promise(function(n,p){s.open(o,t,true);if((r.browser.edge||r.browser.internet_explorer)&&e.type&&s.readyState===1){s.setRequestHeader("Content-Type",e.type)}if(a){a.forEach(function(e){s.setRequestHeader(e.getKey(),e.getText())})}s.onreadystatechange=function(){if(this.readyState===window.XMLHttpRequest.DONE){if(this.status===200){n(this)}else{p(this)}}};s.send(e)})};p.prototype.uploadItem=function(e,t){var a=new window.XMLHttpRequest,s=e.getFileObject(),o=this,n={xhr:a,item:e},p=this.getHttpRequestMethod(),i=e.getUploadUrl()||this.getUploadUrl();a.open(p,i,true);if((r.browser.edge||r.browser.internet_explorer)&&s.type&&a.readyState===1){a.setRequestHeader("Content-Type",s.type)}if(t){t.forEach(function(e){a.setRequestHeader(e.getKey(),e.getText())})}a.onreadystatechange=function(){var t=o._mRequestHandlers[e.getId()],a={};if(this.readyState===window.XMLHttpRequest.DONE&&!t.aborted){a={response:this.response,responseXML:this.responseXML,responseText:this.responseText,readyState:this.readyState,status:this.status,headers:this.getAllResponseHeaders()};o.fireUploadCompleted({item:e,responseXHR:a})}};if(this.getUseMultipart()){var d=new window.FormData;var l=s?s.name:null;if(s instanceof window.Blob&&l){d.append(l,s,s.name)}else{d.append(l,s)}d.append("_charset_","UTF-8");s=d;this._mRequestHandlers[e.getId()]=n;a.send(s);this.fireUploadStarted({item:e})}else{this._mRequestHandlers[e.getId()]=n;a.send(s);this.fireUploadStarted({item:e})}};p.prototype.download=function(a,n,p){var i=this.getDownloadUrl()||a.getUrl();if(r.browser.name==="sf"){p=false}if(!a.getUrl()){e.warning("Items to download do not have a URL.");return false}else if(p){var d=null,l=new window.XMLHttpRequest;l.open("GET",i);n.forEach(function(e){l.setRequestHeader(e.getKey(),e.getText())});l.responseType="blob";l.onload=function(){var e=a.getFileName(),t=o._splitFileName(e,false);d=l.response;s.save(d,t.name,t.extension,a.getMediaType(),"utf-8")};l.send();return true}else{t.URLHelper.redirect(i,true);return true}};return p});
//# sourceMappingURL=UploaderTableItem.js.map