(this["webpackJsonpimage-to-speech"]=this["webpackJsonpimage-to-speech"]||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(12),i=a.n(s),r=(a(9),a(3)),l=a(4),o=a(6),m=a(5),u=a(7),d=a(11),b=a(0),h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).name=n.props.name,n}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"card tile",onClick:this.props.onClick,children:[Object(b.jsx)("h3",{children:this.props.name}),Object(b.jsx)("img",{className:" ml-1 mr-1 mt-auto",src:this.props.image,alt:"Expected Image not found",onError:function(e){e.target.onerror=null,e.target.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fclipart-borders-pizza.png&f=1&nofb=1"}})]})}}]),a}(c.a.Component),j=(a(22),a.p+"static/media/check.a252283f.png"),p=a(8),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.props.tiles.push({name:e.target[0].value,image:e.target[1].value}),localStorage.setItem(n.props.boardName,JSON.stringify(n.props.tiles)),document.getElementById("submit-form").reset()},n.length=0,n.hungry="Hungry",n.state={name:n.hungry,image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fclipart-borders-pizza.png&f=1&nofb=1"},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:!0,children:[Object(b.jsx)(p.a,{children:Object(b.jsx)("style",{children:"body { background: -webkit-linear-gradient(left, #0072ff, #00c6ff); }"})}),Object(b.jsxs)("div",{className:"container contact-form",children:[Object(b.jsx)("div",{className:"contact-image",children:Object(b.jsx)("img",{src:j,alt:"rocket_contact"})}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,id:"submit-form",children:[Object(b.jsx)("h1",{children:"Create a new Tile"}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("h4",{children:"Tile Name"})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"text",name:"txtName",className:"form-control",placeholder:"Hungry *",maxLength:"25",onChange:function(t){e.handleNameChange(t.target.value)},required:!0})}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("h4",{children:"Image URL"}),Object(b.jsx)("input",{type:"text",name:"txtEmail",className:"form-control",placeholder:"https://example.com *",onChange:function(t){e.checkImage(t.target.value)},required:!0})]}),Object(b.jsx)("div",{className:"d-flex justify-content-center mb-3",children:Object(b.jsx)("input",{type:"submit",name:"btnSubmit",className:"btnContact btn-primary",value:"Add Tile"})}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("input",{type:"submit",name:"btnSubmit",className:"btnContact btn-success",value:"Submit",onClick:this.props.homeScreen}),Object(b.jsx)("input",{type:"submit",className:"btnContact",value:"Cancel",onClick:this.props.homeScreen})]}),Object(b.jsx)("div",{className:"form-group"})]}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)(h,{className:"mt-3",name:this.state.name,image:this.state.image})})})]})]})]})]})}},{key:"handleNameChange",value:function(e){this.setState({name:e})}},{key:"checkImage",value:function(e){this.setState({image:e})}}]),a}(c.a.Component),f=a(16),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).homeScreen=n.homeScreen.bind(Object(u.a)(n)),n.addTiles=n.addTiles.bind(Object(u.a)(n)),n.activateDeleteTile=n.activateDeleteTile.bind(Object(u.a)(n)),n.name=n.props.name,n.tiles=n.props.tiles,n.state={newForm:!1,delTile:!1,tiles:n.tiles,changes:0,color:"white"},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.createTiles();return this.state.newForm?Object(b.jsx)(g,{homeScreen:this.homeScreen,tiles:this.tiles,boardName:this.props.boardName}):Object(b.jsxs)("div",{className:"container text",children:[Object(b.jsx)(p.a,{children:Object(b.jsx)("style",{children:"body { background-color: background: #2C3E50;  /* fallback for old browsers */\n                                background: -webkit-linear-gradient(to right, #4CA1AF, #2C3E50);  /* Chrome 10-25, Safari 5.1-6 */\n                                background: linear-gradient(to right, #4CA1AF, #2C3E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n                                ; }"})}),Object(b.jsxs)("div",{id:this.name,className:"container",children:[Object(b.jsx)("h1",{className:"text-center board-title",style:{color:this.state.color},children:this.name}),Object.keys(e).map((function(t){return Object(b.jsx)("div",{className:"row items__row text-center",children:e[t].map((function(e){return Object(b.jsx)(f.a,{className:"col-3 mt-2 mb-3 d-flex align-items-stretch",children:e})}))},t)})),Object(b.jsx)("button",{type:"submit",className:"btn btn-success mb-2  btn-lg",onClick:this.addTiles,children:"Add Tile"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-danger mb-2 float-right btn-lg",onClick:this.activateDeleteTile,children:"Delete Tile"})]}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary mb-2 ml-auto btn-lg",onClick:this.props.selectBoard,children:"Select Board"})})]})}},{key:"homeScreen",value:function(){this.setState({newForm:!1})}},{key:"createTiles",value:function(){var e=this,t={},a=1,n=0;return this.state.tiles.forEach((function(c,s){console.log(n),t[a]=t[a]?Object(d.a)(t[a]):[],s%4==0&&0!==s?(a++,t[a]=t[a]?Object(d.a)(t[a]):[],t[a].push(Object(b.jsx)(h,{className:"mt-3 ","data-key":n,name:e.state.tiles[s].name,image:e.state.tiles[s].image,onClick:e.clickTile.bind(e,n,e.state.tiles[s].name)},n))):t[a].push(Object(b.jsx)(h,{className:"mt-3 ","data-key":n,name:e.state.tiles[s].name,image:e.state.tiles[s].image,onClick:e.clickTile.bind(e,n,e.state.tiles[s].name)},n)),n++})),t}},{key:"addTiles",value:function(){this.setState({newForm:!0})}},{key:"changeBackground",value:function(){"white"==this.state.color?this.setState((function(e,t){return{color:"red"}})):this.setState((function(e,t){return{color:"white"}}))}},{key:"activateDeleteTile",value:function(){this.setState((function(e,t){return{delTile:!e.delTile}})),this.changeBackground()}},{key:"clickTile",value:function(e,t,a){if(1==this.state.delTile)this.tiles.splice(e,1),this.setState((function(e,t){return{changes:e.changes++}})),this.setState({delTile:!1}),this.updateStorage(),this.changeBackground();else{var n=new SpeechSynthesisUtterance;n.text=t,window.speechSynthesis.speak(n)}}},{key:"updateStorage",value:function(){localStorage.setItem(this.props.boardName,JSON.stringify(this.props.tiles))}}]),a}(c.a.Component),x=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).submit=function(e){e.preventDefault(),1==n.state.button?localStorage.getItem(e.target[0].value)?(n.tiles=JSON.parse(localStorage.getItem(e.target[0].value)),n.boardName=e.target[0].value,n.setState({selectBoard:!1})):alert("Board not found"):2==n.state.button?null==JSON.parse(localStorage.getItem(e.target[0].value))?(n.tiles=JSON.parse(JSON.stringify(n.default)),localStorage.setItem(e.target[0].value,JSON.stringify(n.tiles)),n.boardName=e.target[0].value,n.setState({selectBoard:!1})):alert("Board already exists"):(localStorage.removeItem(e.target[0].value),document.getElementById("submit-board").reset())},n.apple="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LElaIzkrLIndPvZg-j5CQwHaIe%26pid%3DApi&f=1",n.water="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F1%2FWater-Cup-PNG-High-Quality-Image.png&f=1&nofb=1",n.meal="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fclipart-borders-pizza.png&f=1&nofb=1",n.bathroom="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Funisex-restroom-sign-decal-9.png&f=1&nofb=1",n.play="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nicepng.com%2Fpng%2Ffull%2F76-763452_abc-blocks-png-abc-alphabet.png&f=1&nofb=1",n.default=[{name:"Snack",image:n.apple},{name:"Thirsty",image:n.water},{name:"Lunch",image:n.meal},{name:"Bathroom",image:n.bathroom},{name:"Play",image:n.play}],n.tiles=[],n.boardName="",n.selectBoard=n.selectBoard.bind(Object(u.a)(n)),n.state={selectBoard:!0},n}return Object(l.a)(a,[{key:"render",value:function(){return this.state.selectBoard?this.boardForm():Object(b.jsx)(O,{name:this.boardName,tiles:this.tiles,boardName:this.boardName,selectBoard:this.selectBoard})}},{key:"boardForm",value:function(){var e=this;return Object(b.jsxs)("div",{className:!0,children:[Object(b.jsx)(p.a,{children:Object(b.jsx)("style",{children:"body { background: -webkit-linear-gradient(left, #0072ff, #00c6ff); }"})}),Object(b.jsxs)("div",{className:"container contact-form",children:[Object(b.jsx)("div",{className:"contact-image",children:Object(b.jsx)("img",{src:j,alt:"rocket_contact"})}),Object(b.jsxs)("form",{onSubmit:this.submit,id:"submit-board",children:[Object(b.jsx)("h1",{children:"Create/Load a Board Updated"}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("h4",{children:"Board Name"})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"text",name:"txtName",className:"form-control",placeholder:"Drake's Board *",required:!0})}),Object(b.jsx)("div",{className:"d-flex justify-content-center mb-2",children:Object(b.jsx)("input",{type:"submit",name:"btnSubmit",className:"btnContact btn-success",value:"Create",onClick:function(){return e.state.button=2}})}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("input",{type:"submit",name:"btnSubmit",className:"btnContact btn-primary",value:"Load",onClick:function(){return e.state.button=1}}),Object(b.jsx)("input",{type:"submit",className:"btnContact btn-danger",value:"Delete",onClick:function(){return e.state.button=3}})]}),Object(b.jsx)("div",{className:"form-group"})]})})]})]})]})}},{key:"selectBoard",value:function(){this.setState({selectBoard:!0})}}]),a}(c.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(x,{})}}]),a}(c.a.Component),k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};a(26),a(27),a(28);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),k()},9:function(e,t,a){}},[[29,1,2]]]);
//# sourceMappingURL=main.cfbb7e17.chunk.js.map