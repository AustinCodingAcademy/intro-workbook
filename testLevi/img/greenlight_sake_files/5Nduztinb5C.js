if (self.CavalryLogger) { CavalryLogger.start_js(["VCsVq"]); }

__d("MessagingEvent",[],(function a(b,c,d,e,f,g){f.exports={DELETE:"delete",DELETE_MESSAGES:"delete_messages",DELIVER:"deliver",ERROR:"error",READ:"read",REPORT_SPAM:"report_spam",REPORT_SPAM_MESSAGES:"report_spam_messages",UNMARK_SPAM:"unmark_spam",SUBSCRIBE:"subscribe",CHANGE_MUTE_SETTINGS:"change_mute_settings",TAG:"tag",UNREAD:"unread",UNSUBSCRIBE:"unsubscribe",DELIVER_LOG:"deliver_log",MARK_ALL_READ:"mark_all_read",MARK_ALL_SEEN:"mark_all_seen",MORE_THREADS:"more_threads",READ_ALL:"read_all",READ_RECEIPT:"read_receipt",DELIVERY_RECEIPT:"delivery_receipt",SENT_PUSH:"sent_push",DELIVER_FAST_PAST:"deliver_fast_path",MESSENGER_STATUS:"messenger_status",UPDATE_PINNED_THREADS:"update_pinned_threads",CHANGE_PAGE_THREAD_FLAG:"change_page_thread_flag",CREATE_PAGE_ADMIN_NOTE:"create_page_admin_note",NO_OP:"no_op"};}),null);
__d('ChatProxyConnectionState',[],(function a(b,c,d,e,f,g){'use strict';function h(){this.auxiliaryIrisQueues={};this.aiq=null;}h.prototype.subscribeIrisQueue=function(i,j){this.auxiliaryIrisQueues[i]=j;this.updateCaches();};h.prototype.unsubscribeIrisQueue=function(i){delete this.auxiliaryIrisQueues[i];this.updateCaches();};h.prototype.updateCaches=function(){var i=[];for(var j in this.auxiliaryIrisQueues)if(Object.prototype.hasOwnProperty.call(this.auxiliaryIrisQueues,j)){i.push(j);i.push(this.auxiliaryIrisQueues[j]);}if(i.length===0){this.aiq=null;}else this.aiq=i.join(',');};f.exports=h;}),null);
__d("ChannelDefaults",[],(function a(b,c,d,e,f,g){f.exports={LONGPOLL_TIMEOUT:60000,STALL_THRESHOLD:180000,MIN_RETRY_INTERVAL:5000,MAX_RETRY_INTERVAL:30000};}),null);
__d('ChannelStateMap',[],(function a(b,c,d,e,f,g){f.exports={pull:{ok:'pull!',error:'pull',error_missing:'pull',error_msg_type:'pull',clock_anomaly:'pull!',visible:'pull!',hidden:'idle!',refresh_0:'reconnect',refresh_110:'reconnect!',refresh_111:'reconnect',refresh_112:'pull',refresh_113:'pull',refresh_117:'reconnect'},reconnect:{ok:'pull!',error:'reconnect',clock_anomaly:'reconnect!',visible:'pull!',hidden:'idle!'},idle:{ok:'idle!',clock_anomaly:'idle!',visible:'pull!',hidden:'idle!'},shutdown:{clock_anomaly:'shutdown!',visible:'shutdown!',hidden:'shutdown!'}};}),null);
__d('Clock',['EventEmitter'],(function a(b,c,d,e,f,g,h){var i=new h();i.ANOMALY='anomaly';var j=30,k=Date.now(),l=[],m=0,n=1000;function o(){var q=Date.now()-k;return q<0||q>n*10;}function p(){var q=Date.now()-k;l[m]=q;m=(m+1)%j;if(o())i.emit(i.ANOMALY,q);k=Date.now();}i.getSamples=function(){return l.slice(m).concat(l.slice(0,m));};i.isAnomalous=o;setInterval(p,n);f.exports=i;}),null);
__d('RTISession',['getCrossOriginTransport','URI','XHRRequest','invariant','ErrorUtils','PHPQuerySerializer'],(function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';var n='.facebook.com';function o(p,q,r,s,t,u,v,w,x){p||k(0);s||k(0);t||k(0);this.domain=p;this.port=q;this.edgePoolName=r;this.stickyToken=s;this.loggedInId=t;this.accountId=u;this.clientProfile=v||'desktop';this.clientId=w;this.capabilities=x;}o.prototype.issueRequest=function(p,q,r,s,t){p||k(0);q||k(0);s||k(0);var u=this.domain.length-n.length,v=u>0&&this.domain.indexOf(n,u)!==-1,w=v?this.domain:this.domain+n,x=(1048576*Math.random()|0).toString(36),y={cb:x,sticky_token:this.stickyToken,uid:this.loggedInId,viewer_uid:this.accountId,sticky_pool:this.edgePoolName,profile:this.clientProfile,clientid:this.clientId,cap:this.capabilities};for(var z in y)!q[z]||k(0);Object.assign(y,q);var aa=new i(p).setDomain(w).setPort(this.port).setSecure(new i(window.location.href).isSecure()).setQueryData(y),ba=r?'POST':'GET',ca={};new j(aa).setTransportBuilder(h.withCredentials).setTimeout(t?t*1000:30000).setMethod(ba).setDataSerializer(function(da){return m.serialize(JSON.stringify(da));}).setData(r).setRequestHeader('Content-Type','application/x-www-form-urlencoded').setResponseHandler(function(da){var ea=da.substring('for (;;);'.length);ca.data=JSON.parse(ea);ca.error=null;l.applyWithGuard(s,this,[ca]);}.bind(this)).setErrorHandler(function(da){ca.data=null;ca.error=da.errorMsg||'error';l.applyWithGuard(s,this,[ca]);}.bind(this)).send();};f.exports=o;}),null);
__d('StateMachine',['setTimeoutAcrossTransitions','EventEmitter','ex'],(function a(b,c,d,e,f,g,h,i,j){var k,l,m=0;function n(q,r){'use strict';this.idx=m++;this.machine=q;this.asap=r&&r.substr(-1)=='!';this.name=this.asap?r.substr(0,r.length-1):r;this.progress=p.NEW;this.status=null;}n.prototype.enter=function(){'use strict';this.machine.enter_private(this);};n.prototype.exit=function(q){'use strict';this.machine.exit_private(this,q);};n.prototype.toString=function(){'use strict';return this.name+'('+this.progress+','+this.status+')';};var o='_ABORT_';k=babelHelpers.inherits(p,i);l=k&&k.prototype;function p(q,r){'use strict';l.constructor.call(this);this.$StateMachine1=q;this.$StateMachine2=r;this.$StateMachine3=0;this.$StateMachine4=[];this.$StateMachine5=Date.now();}p.prototype.$StateMachine6=function(q){'use strict';this.$StateMachine4.push(Date.now()-this.$StateMachine5+': '+q);if(this.$StateMachine4.length>40)this.$StateMachine4=this.$StateMachine4.splice(-20);};p.prototype.getState=function(){'use strict';return this.$StateMachine7;};p.prototype.setDelay=function(q){'use strict';this.$StateMachine3=q||0;return this;};p.prototype.getDelay=function(){'use strict';return this.$StateMachine3;};p.prototype.enter=function(q){'use strict';this.enter_private(new n(this,q));};p.prototype.enter_private=function(q){'use strict';this.$StateMachine6('enter '+q+', '+this.$StateMachine7);if(this.$StateMachine7&&this.$StateMachine7!=q)this.$StateMachine7.exit(o);this.$StateMachine7=q;if(q.asap){delete q.asap;if(this.$StateMachine2.enter)this.$StateMachine2.enter(q);q.progress=p.ENTERED;}else{q.progress=p.PENDING;q.asap=true;q.$StateMachine8=h(function(){q.enter();},this.$StateMachine3);}this.emit(p.ENTER,q);};p.prototype.exit=function(q){'use strict';this.exit_private(this.$StateMachine7,q);};p.prototype.exit_private=function(q,r){'use strict';this.$StateMachine6('exit '+q+', '+r+', '+this.$StateMachine7);if(!q||q!=this.$StateMachine7)throw new Error(j('Invalid state: %s, history: %s',q,this.$StateMachine4.join('|')));if(q.progress==p.EXITED)return;q.status=r;q.progress=p.EXITED;if(q.$StateMachine8){clearInterval(q.$StateMachine8);q.$StateMachine8=null;}this.$StateMachine7=null;if(q&&this.$StateMachine2.exit)this.$StateMachine2.exit(q);q.exited=true;this.emit(p.EXIT,q);if(r!=o){var s=this.$StateMachine1[q.name];if(!s||!s[r])throw new Error(j('No exit for state:%s, status: %s',q.name,r));this.enter(s[r]);}};p.ENTER='enter';p.EXIT='exit';p.NEW='new';p.PENDING='pending';p.ENTERED='entered';p.EXITED='exited';f.exports=p;}),null);
__d("rand32",[],(function a(b,c,d,e,f,g){function h(){return Math.floor(Math.random()*4294967295);}f.exports=h;}),null);
__d('MChannelManager',['Banzai','ChannelClientConfig','ChannelClientID','ChannelDefaults','ChannelEventEmitter','ChannelEventType','ChannelStateMap','ChatProxyConnectionState','Clock','LogHistory','JSLog','MRequest','MURI','RTISession','StateMachine','URI','Visibility','rand32','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){var aa,ba='ok',ca='error',da='error_missing',ea=60000,fa=null,ga=null,ha=null,ia=null,ja=null,ka=-1,la=null,ma=0,na=j.getID(),oa=false,pa={enter:function db(eb){if(ia){ia.abort();ia=null;}switch(eb.name){case 'pull':if(!ga.uri)break;if(ga.disabled)break;var fb=new w(ga.uri),gb={channel:ga.user_channel,seq:ha,clientid:na,profile:'mobile',partition:ga.partition,sticky_token:ka,msgs_recv:ma,qp:'y',cb:y()};if(ka==-1&&ga.msgr_region)gb.msgr_region=ga.msgr_region;if(ga.chat_enabled)gb.state='active';if(la)gb.sticky_pool=la;if(ga.uid&&ga.viewerUid){gb.uid=ga.uid;gb.viewer_uid=ga.viewerUid;}if(ga.state.aiq)gb.aiq=ga.state.aiq;ia=new s(fb+'').setCORS(true).setMethod('GET').setData(gb).setRaw(true);ia.listen('open',function(ib){ib.getTransport().withCredentials=true;});ia.listen('done',function(ib){ua(eb,ib);});ia.listen('error',function(){ua(eb);});break;case 'reconnect':var hb=new t('/a/channel/reconnect.php');ia=new s(hb+'').setMethod('GET');ia.listen('done',function(ib){sa(eb,ib);});ia.listen('error',function(ib){ib.isHandled=true;sa(eb);});break;default:}if(ia)ia.send();},exit:function db(eb){if(eb.status==='ok'){if(eb.name==='pull')aa.setDelay(0);}else if(!(eb.status==null)){var fb=aa.getDelay();fb=fb>0?fb*2:fa.MIN_RETRY_INTERVAL;fb=Math.min(fb,fa.MAX_RETRY_INTERVAL);aa.setDelay(fb);}if(ia){ia.abort();ia=null;}}};function qa(){var db=null;if(oa&&ga&&ga.host&&ka&&ga.uid)db=new u(ga.host,null,la,ka,ga.uid,ga.viewerUid,'mobile',na,0);l.emit(m.RTI_SESSION,db);}function ra(db){ja=db;}function sa(db,eb){if(!eb){r.warn('_onReconnectError: reconnect request error');db.exit(ca);}else if(eb.user_channel){ga=eb;ga.state=new o();ha=ga.seq;db.exit(ba);}else{r.warn('_onReconnectError: bad reconnect response - %s',JSON.stringify(eb));db.exit(ca);}}function ta(){oa=true;qa();}function ua(db,eb){var fb=ba;if(!eb){db.exit(ca);return;}switch(eb.t){case 'refresh':case 'refreshDelay':fb='refresh_'+(eb.reason||0);break;case 'fullReload':fb=ba;if(eb.seq==0)ta();if('ms' in eb)va(eb);break;case 'continue':break;case 'lb':var gb=eb.lb_info;if(gb){ka=gb.sticky;var hb="http://";if(ga.is_secure_uri)hb="https://";if('pool' in gb){la=gb.pool;}else{ga.uri=hb+gb.vip+'.facebook.com/pull';ga.host=gb.vip;}}else r.error('bad lb info from channel proxy');break;case 'msg':va(eb);break;case 'batched':var ib=eb.batches,jb;for(jb=0;jb<ib.length;jb++)ua(db,ib[jb]);break;case 'heartbeat':break;default:fb=ca;if(h.isEnabled('mchannel_detailed_log')){r.warn('_onRequestSuccess: invalid channel response, resending request: %s',JSON.stringify(eb));}else r.warn('_onRequestSuccess: invalid channel response, sending request again.');break;}if('seq' in eb)ha=eb.seq;db.exit(fb);}function va(db){var eb=db.seq-db.ms.length;for(var fb=0;fb<db.ms.length;fb++){var gb=eb+fb;ma++;if(gb>=ha){if(ja)db.ms[fb]=ja(db.ms[fb]);try{if(db.ms[fb].type==='skywalker'){l.emit(m.SKYWALKER_MESSAGE,db.ms[fb]);}else if(db.ms[fb].type==='qprimer'){ta();}else aa.emit(aa.CHANNEL_MESSAGE,db.ms[fb]);}catch(hb){if(h.isEnabled('mchannel_detailed_log')){r.warn('_processMessages: threw exception emitting: ex:%s payload:%s',hb,JSON.stringify(db.ms[fb]));}else r.warn('_processMessages: failed to emit message');}}}}function wa(){if(!aa.xhrEnabled||fa)return;fa=Object.assign(k,i.config);ga=i.info;ga.state=new o();ha=ga.seq;p.addListener(p.ANOMALY,function(){aa.exit('clock_anomaly');});x.addListener(x.HIDDEN,function(){aa.exit('hidden');});x.addListener(x.VISIBLE,function(){aa.exit('visible');});b.onbeforeunload=function(){if(ia)ia.abort();};if('sticky_token' in ga)ka=ga.sticky_token;za();}function xa(db,eb){ga.state.subscribeIrisQueue(db,eb);}function ya(db){ga.state.subscribeIrisQueue(db);}function za(){aa.setDelay(fa.MIN_RETRY_INTERVAL);aa.enter(ga.uri?'pull!':'reconnect!');}aa=new v(n,pa);aa.startChannel=wa;aa.setTransform=ra;aa.xhrEnabled=!!b.XMLHttpRequest;aa.CHANNEL_MESSAGE='channel_message';aa.subscribeIrisQueue=xa;aa.unsubscribeIrisQueue=ya;var ab;function bb(){aa.emit(v.ENTER,{name:'stall',progress:v.ENTERED});if(h.isEnabled('mchannel_jumpstart'))za();}function cb(db){q.getInstance('channel').log(db.name,db.status||db.progress);if(db.name!=='stall'){clearTimeout(ab);ab=z(bb,ea);}}aa.addListener(v.ENTER,cb);aa.addListener(v.EXIT,cb);l.addListener(m.GET_RTI_SESSION_REQUEST,qa);f.exports=aa;}),null);
__d('MTouchChannelManager',['Bootloader','MChannelManager','Stratcom'],(function a(b,c,d,e,f,g,h,i,j){var k=false;function l(){if(k)return;k=true;i.addListener(i.CHANNEL_MESSAGE,function(m){return h.loadModules(["MTouchChannelPayloadRouter"],function(n){return n.route(m);},'MTouchChannelManager');});j.listen(['m:onload','m:jewels:init-counts'],null,i.startChannel);i.startChannel();}g.initialize=l;}),null);
__d('MPresenceIcon',['setTimeoutAcrossTransitions','DOM','MLegacyDataStore','MRequest','MURI','Stratcom'],(function a(b,c,d,e,f,g,h,i,j,k,l,m){var n=0,o=1,p=2,q;function r(){var s=i.scry(document.body,'i','presence-icon'),t=[];for(var u=0,v=s.length;u<v;++u){var w=j.get(s[u]);if(w.userid&&!t[w.userid])t[w.userid]=1;}var x=new l('/chat/presence_icon.php').toString(),y=new k(x).setData({ids:Object.keys(t)}).setIgnoreErrors(true);y.listen('done',function(z){for(var aa=0,ba=s.length;aa<ba;++aa){var ca=j.get(s[aa]);if(ca&&ca.userid&&m.hasSigil(s[aa],'online-icon')&&z[ca.userid]==o||m.hasSigil(s[aa],'mobile-icon')&&z[ca.userid]==p){i.show(s[aa]);}else i.hide(s[aa]);}});y.listen('finally',function(z){clearTimeout(q);q=h(r,n);});y.send();}n=n?n*100:60000;r();}),null);
__d("XQuickPromotionSimpleLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/qp\/action\/log\/",{qp_id:{type:"Int",required:true},qp_action:{type:"Enum",enumType:1},qp_instance_log_data:{type:"StringToStringMap",defaultValue:{}},qp_event:{type:"String"}});}),null);
__d('MQuickPromotionEmbeddedInterstitial',['DOM','MRequest','Stratcom','XQuickPromotionSimpleLoggingController'],(function a(b,c,d,e,f,g,h,i,j,k){var l=false,m=function n(o,p,q){if(l)return;l=true;function r(event){j.removeCurrentListener();var t=event.getNode(o.promo);h.hide(t);var u=h.find(event.getNode(o.jewel),'div',o.sibling);h.show(u);j.invoke('m:qp:embedded-interstitial:close');}function s(event){if(event.getData().jewel==o.jewel){j.removeCurrentListener();var t=k.getURIBuilder().setInt('qp_id',p).setStringToStringMap('qp_instance_log_data',q).setString('qp_event','view').getURI(),u=new i(t);u.send();}}j.listen('click',o.close,r);j.listen('m:jewel:flyout:open',null,s);};g.main=m;}),null);
__d('MobileZeroRewriteURL',['MChannelManager'],(function a(b,c,d,e,f,g,h){var i=null,j=null;function k(o){if(!o)return;i=o.regex_matcher;j=o.regex_replacer;for(var p=0;p<i.length;p++){var q=i[p];if(q.indexOf('^')===0)q=q.substr(1);var r=new RegExp(q,'i');i[p]=r;}h.setTransform(l);}function l(o){if(!i)return o;m(o);return o;}function m(o){if(!o)return;if(Array.isArray(o)){for(var p=0;p<o.length;p++)n(o,p);}else for(var q in o)if(Object.prototype.hasOwnProperty.call(o,q))n(o,q);}function n(o,p){var q=o[p],r=typeof q;if(r==='object'){m(q);}else if(r==='string'&&q.indexOf('<img')>=0){q=q.replace(/<img[^>]*>/gi,function(s){for(var t=0;t<i.length;t++){var u=i[t];if(u.test(s))return s.replace(u,j[t]);}return s;});o[p]=q;}}g.main=k;}),null);