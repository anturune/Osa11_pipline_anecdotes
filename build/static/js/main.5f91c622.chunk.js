(this["webpackJsonpredux-anecdotes"]=this["webpackJsonpredux-anecdotes"]||[]).push([[0],{58:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(8),a=n.n(c),o=n(3),u=n(2),i=n.n(u),s=n(5),l=n(26),d=n(6),f=n(9),O=n.n(f),j="/anecdotes",v={getAll:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("TULEEKO GET AALIIN"),e.next=3,O.a.get(j);case 3:return t=e.sent,console.log("Responssi",t.data),e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createNewAnecdote:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={content:t,votes:0},e.next=3,O.a.post(j,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addNewVote:function(){var e=Object(s.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("".concat(j,"/").concat(n),t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},p=[].map((function(e){return{content:e,id:(1e5*Math.random()).toFixed(0),votes:0}})),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VOTE":var n=t.data.id,r=e.find((function(e){return e.id===n})),c=Object(d.a)(Object(d.a)({},r),{},{votes:r.votes+1});return e.map((function(e){return e.id!==n?e:c})).sort((function(e,t){return e.votes<=t.votes?1:-1}));case"NEW_ANECDOTE":return console.log("TULEEKO UUSI ANECDOTE",t.data),[].concat(Object(l.a)(e),[t.data]);case"INIT_ANECDOTES":return t.data.sort((function(e,t){return e.votes<=t.votes?1:-1}));default:return e}},h={value:"Mukavaa p\xe4iv\xe4\xe4"},E=null,T=function(e,t){return console.log("createNewNotification",e),function(){var n=Object(s.a)(i.a.mark((function n(r){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("TIMEOUT ID:n ARVO",E),n.next=3,r({type:"NEW_NOTIFICATION",data:{notification:e}});case 3:null!==E&&(console.log("K\xc4VIK\xd6 IFFISS\xc4"),clearTimeout(E),E=null),E=setTimeout((function(){r({type:"REMOVE_NOTE"})}),1e3*t),console.log("TIMEOUT ID:n ARVO",E);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_NOTIFICATION":return console.log("TULEEKO NOTIFICATIONIIN case NEW_ANECDOTE_NOTE",t.data),Object(d.a)(Object(d.a)({},e),{},{value:t.data.notification});case"REMOVE_NOTE":return Object(d.a)(Object(d.a)({},e),{},{value:null});default:return e}},x=n(1),I=function(e){var t=e.anecdote,n=e.handleClick;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:t.content}),Object(x.jsxs)("div",{children:["has ",t.votes,Object(x.jsx)("button",{onClick:n,children:"vote"})]})]})},w=function(){var e=Object(o.c)(),t=function(t){e(function(e,t){return console.log("TULIKO VOTEEN"),function(){var n=Object(s.a)(i.a.mark((function n(r){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.addNewVote({content:e.content,votes:e.votes+1},e.id);case 2:r({type:"VOTE",data:{id:t}});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,t.id)),e(T("YOU VOTED: '".concat(t.content,"'"),10))},n=Object(o.d)((function(e){return e.filter.value.toLocaleLowerCase()}));return Object(o.d)((function(e){return""===n?e.anecdotes:e.anecdotes.filter((function(e){return e.content.toLocaleLowerCase().includes(n)}))})).map((function(e){return Object(x.jsx)(I,{anecdote:e,handleClick:function(){return t(e)}},e.id)}))},A=Object(o.b)((function(e){return{notification:e.notification}}))((function(e){return null!==e.notification.value?Object(x.jsx)("div",{style:{border:"solid",padding:10,borderWidth:1},children:e.notification.value}):null===e.notification.value?null:void 0})),g={createAnecdote:function(e){return console.log("TULIKO CREATW ANECDOTEEN",e),function(){var t=Object(s.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.createNewAnecdote(e);case 2:r=t.sent,n({type:"NEW_ANECDOTE",data:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},createNewNotification:T},m=Object(o.b)(null,g)((function(e){var t=function(){var t=Object(s.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),r=n.target.newAnecdote.value,n.target.newAnecdote.value="",e.createAnecdote(r),console.log("UUSI ANEKDOOTTI",r),e.createNewNotification("YOU CREATED: '".concat(r,"'"),10);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsx)("div",{children:Object(x.jsx)("input",{name:"newAnecdote"})}),Object(x.jsx)("button",{type:"submit",children:"create"})]})})})),y={value:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_ANECDOTES_ALIGN_WITH_INPUT":return Object(d.a)(Object(d.a)({},e),{},{value:t.data.content});default:return e}},_={filterAnecdotes:function(e){return{type:"FILTER_ANECDOTES_ALIGN_WITH_INPUT",data:{content:e}}}},D=Object(o.b)(null,_)((function(e){return Object(x.jsxs)("div",{style:{marginBottom:10},children:["filter ",Object(x.jsx)("input",{onChange:function(t){t.preventDefault();var n=t.target.value;e.filterAnecdotes(n)}})]})})),k=function(){var e=Object(o.c)();return console.log("Tuleeko APP.js"),Object(r.useEffect)((function(){e(function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getAll();case 2:n=e.sent,t({type:"INIT_ANECDOTES",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(x.jsxs)("div",{children:[Object(x.jsx)(A,{}),Object(x.jsx)("h2",{children:"Filter anecdote"}),Object(x.jsx)(D,{}),Object(x.jsx)("br",{}),Object(x.jsx)("h2",{children:"Anecdotes"}),Object(x.jsx)(w,{}),Object(x.jsx)("h2",{children:"create new"}),Object(x.jsx)(m,{})]})},U=n(7),L=n(24),V=n(25),R=Object(U.combineReducers)({anecdotes:b,notification:N,filter:C}),S=Object(U.createStore)(R,Object(L.composeWithDevTools)(Object(U.applyMiddleware)(V.a)));a.a.render(Object(x.jsx)(o.a,{store:S,children:Object(x.jsx)(k,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.5f91c622.chunk.js.map