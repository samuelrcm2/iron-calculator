(this["webpackJsonpiron-calculator"]=this["webpackJsonpiron-calculator"]||[]).push([[0],{77:function(e,a,t){},78:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(10),c=t.n(r),l=(t(77),t(78),t(30)),o=t(54),s=t(139),d=t(149),j=t(135),u=t(153),h=t(150),b=t(152),m=t(146),g=t(42),p=t(132),x=t(151),O=t(137),f=t(133),v=t(154),I=t(134),y=t(138),N=t(2);function C(e){return Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:"Dados Iniciais"}),Object(N.jsxs)(p.a,{container:!0,spacing:3,children:[Object(N.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(N.jsxs)(f.a,{fullWidth:!0,children:[Object(N.jsx)(v.a,{id:"age-field-input-label-id",children:"Idade"}),Object(N.jsxs)(x.a,{fullWidth:!0,labelId:"age-field-label-id",id:"age-field-id",align:"left",value:e.age,onChange:function(a){return e.setAge(a.target.value)},children:[Object(N.jsx)(O.a,{value:0}),Object(N.jsx)(O.a,{value:1,children:"0 a 6 meses"}),Object(N.jsx)(O.a,{value:2,children:"6 meses a 1 ano"}),Object(N.jsx)(O.a,{value:3,children:"1 ano a 2 anos"}),Object(N.jsx)(O.a,{value:4,children:"2 anos a 4 anos"}),Object(N.jsx)(O.a,{value:5,children:"4 anos a 6 anos"})]})]})}),Object(N.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(N.jsxs)(f.a,{fullWidth:!0,children:[Object(N.jsx)(v.a,{id:"gender-field-input-label-id",children:"G\xeanero"}),Object(N.jsxs)(x.a,{fullWidth:!0,labelId:"gender-field-label-id",id:"gender-field-id",align:"left",value:e.gender,onChange:function(a){return e.setGender(a.target.value)},children:[Object(N.jsx)(O.a,{value:0}),Object(N.jsx)(O.a,{value:1,children:"Feminino"}),Object(N.jsx)(O.a,{value:2,children:"Masculino"})]})]})}),Object(N.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(N.jsxs)(f.a,{fullWidth:!0,children:[Object(N.jsx)(v.a,{id:"height-field-input-label-id",children:"Altura"}),Object(N.jsx)(I.a,{id:"height-field-label-id",value:e.height,onChange:function(a){return e.setHeight(a.target.value)},endAdornment:Object(N.jsx)(y.a,{position:"end",children:"m"}),"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"height"}})]})}),Object(N.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(N.jsxs)(f.a,{fullWidth:!0,children:[Object(N.jsx)(v.a,{id:"weight-field-input-label-id",children:"Peso"}),Object(N.jsx)(I.a,{id:"weight-field-id",value:e.weight,onChange:function(a){return e.setWeight(a.target.value)},endAdornment:Object(N.jsx)(y.a,{position:"end",children:"Kg"}),"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"height"}})]})})]})]})}var W=t(50),T=t(141),w=t(145),L=t(144),F=t(140),k=t(142),S=t(143),A=t(59),P=t.n(A),V=[{id:"name",label:"Nome",minWidth:170},{id:"portion",label:"Por\xe7\xe3o",minWidth:100},{id:"portionKind",label:"Tipo de Medida",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"remove",label:"Remover",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}}],B=Object(s.a)((function(e){return{root:{width:"100%"},container:{maxHeight:"300px"},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}}));function M(e){var a=B(),t=function(a,t,n){var i=e.mealsList.find((function(e){return e.mealId===n}));i[a]=t;var r=[].concat(Object(W.a)(e.mealsList.filter((function(e){return e.mealId!==n}))),[i]).sort((function(e,a){return e.mealId-a.mealId}));e.setMealsList(r)};return Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:"Alimenta\xe7\xe3o"}),Object(N.jsx)(F.a,{className:a.container,children:Object(N.jsxs)(T.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(N.jsx)(k.a,{children:Object(N.jsx)(S.a,{children:V.map((function(e){return Object(N.jsx)(L.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(N.jsx)(w.a,{children:e.mealsList.map((function(a){return Object(N.jsxs)(S.a,{hover:!0,role:"checkbox",tabIndex:-1,children:[Object(N.jsx)(L.a,{align:"center",children:Object(N.jsx)(f.a,{fullWidth:!0,children:Object(N.jsxs)(x.a,{fullWidth:!0,labelId:"meal-select-label-".concat(a.mealId),id:"meal-select-".concat(a.mealId),value:a.foodId,onChange:function(e){return t("foodId",e.target.value,a.mealId)},children:[Object(N.jsx)(O.a,{value:0}),Object(N.jsx)(O.a,{value:1,children:"Sementes de ab\xf3bora"}),Object(N.jsx)(O.a,{value:2,children:"Pistache"}),Object(N.jsx)(O.a,{value:3,children:"Cacau em p\xf3"}),Object(N.jsx)(O.a,{value:4,children:"Damasco seco"}),Object(N.jsx)(O.a,{value:5,children:"Tofu"}),Object(N.jsx)(O.a,{value:6,children:"Uva passa"}),Object(N.jsx)(O.a,{value:7,children:"Coco seco"}),Object(N.jsx)(O.a,{value:8,children:"Noz"}),Object(N.jsx)(O.a,{value:9,children:"Feij\xe3o branco cozido "}),Object(N.jsx)(O.a,{value:10,children:"Feij\xe3o preto cozido"})]})})}),Object(N.jsx)(L.a,{align:"center",children:Object(N.jsx)(f.a,{fullWidth:!0,children:Object(N.jsx)(I.a,{id:"portion-input-".concat(a.mealId),value:a.portionValue,onChange:function(e){return t("portionValue",e.target.value,a.mealId)},"aria-describedby":"standard-weight-helper-text",inputProps:{"aria-label":"height"}})})}),Object(N.jsx)(L.a,{align:"center",children:Object(N.jsx)(f.a,{fullWidth:!0,children:Object(N.jsxs)(x.a,{fullWidth:!0,labelId:"portiontype-select-label-".concat(a.mealId),id:"portiontype-select-".concat(a.mealId),value:a.portionTypeId,onChange:function(e){return t("portionTypeId",e.target.value,a.mealId)},children:[Object(N.jsx)(O.a,{value:0}),Object(N.jsx)(O.a,{value:1,children:"Colher de sopa"}),Object(N.jsx)(O.a,{value:2,children:"Colher de caf\xe9"}),Object(N.jsx)(O.a,{value:3,children:"Colher de sobremesa"}),Object(N.jsx)(O.a,{value:4,children:"X\xedcara de ch\xe1"}),Object(N.jsx)(O.a,{value:5,children:"Gramas"})]})})}),Object(N.jsx)(L.a,{align:"right",children:Object(N.jsx)(P.a,{color:"primary",onClick:function(){return t=a.mealId,void e.setMealsList(Object(W.a)(e.mealsList.filter((function(e){return e.mealId!==t}))));var t}})})]},a.mealId)}))})]})}),Object(N.jsx)("div",{className:a.buttons,children:Object(N.jsx)(m.a,{variant:"contained",color:"primary",className:a.button,onClick:function(){e.setMealsList([].concat(Object(W.a)(e.mealsList),[{mealId:Math.floor(1e8*Math.random()),foodName:"",foodId:0,portionValue:0,portionTypeId:0}]))},children:"Adicionar Alimento"})})]})}var R=t(136),z=t(89),D=t(147),G=t(148),H=Object(s.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));function U(){var e=H();return Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:"Relat\xf3rio"}),Object(N.jsx)(R.a,{disablePadding:!0,children:Object(N.jsxs)(z.a,{className:e.listItem,children:[Object(N.jsx)(D.a,{primary:"Total de ferro consumido",secondary:"Valor recomendado"}),Object(N.jsx)(G.a,{children:Object(N.jsx)(D.a,{align:"left",primary:"145mg",secondary:"100mg"})})]},"iron-value")})]})}var E=Object(s.a)((function(e){return{appBar:{position:"relative",backgroundColor:"grey"},layout:Object(o.a)({width:"auto",backgroundColor:"grey",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+e.spacing(2)),{width:700,marginLeft:"auto",marginRight:"auto"}),paper:Object(o.a)({marginTop:"0",marginBottom:e.spacing(1),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),J=["Dados Iniciais","Alimenta\xe7\xe3o","Relat\xf3rio"],K=[{mealId:1,foodName:"Sementes de ab\xf3bora",foodId:1,portionValue:2,portionTypeId:5},{mealId:2,foodName:"Pistache",foodId:2,portionValue:1,portionTypeId:4},{mealId:3,foodName:"Cacau em p\xf3",foodId:3,portionValue:7,portionTypeId:3},{mealId:4,foodName:"Tofu",foodId:5,portionValue:9,portionTypeId:2},{mealId:5,foodName:"Feij\xe3o preto cozido",foodId:10,portionValue:4,portionTypeId:1}].sort((function(e,a){return e.mealId-a.mealId}));function X(){var e=E(),a=i.a.useState(0),t=Object(l.a)(a,2),n=t[0],r=t[1],c=i.a.useState(0),o=Object(l.a)(c,2),s=o[0],p=o[1],x=i.a.useState(0),O=Object(l.a)(x,2),f=O[0],v=O[1],I=i.a.useState(0),y=Object(l.a)(I,2),W=y[0],T=y[1],w=i.a.useState(0),L=Object(l.a)(w,2),F=L[0],k=L[1],S=i.a.useState(K),A=Object(l.a)(S,2),P=A[0],V=A[1],B=function(e){return!!function(e){if(!isNaN(e))return!0;var a=e.replace(",",".");return!isNaN(a)}(e)&&(isNaN(e)?Number(e.replace(",","."))>0:e>0)};return Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(d.a,{}),Object(N.jsx)("main",{className:e.layout,children:Object(N.jsxs)(j.a,{className:e.paper,children:[Object(N.jsx)(g.a,{component:"h1",variant:"h4",align:"center",children:"Calculadora de Consumo de Ferro"}),Object(N.jsx)(u.a,{activeStep:n,className:e.stepper,children:J.map((function(e){return Object(N.jsx)(h.a,{children:Object(N.jsx)(b.a,{children:e})},e)}))}),Object(N.jsx)(i.a.Fragment,{children:n===J.length?Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(g.a,{variant:"h5",gutterBottom:!0,children:"Thank you for your order."}),Object(N.jsx)(g.a,{variant:"subtitle1",children:"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped."})]}):Object(N.jsxs)(i.a.Fragment,{children:[function(e){switch(e){case 0:return Object(N.jsx)(C,{age:s,setAge:p,gender:f,setGender:v,height:W,setHeight:T,weight:F,setWeight:k});case 1:return Object(N.jsx)(M,{mealsList:P,setMealsList:V});case 2:return Object(N.jsx)(U,{});default:throw new Error("Unknown step")}}(n),Object(N.jsxs)("div",{className:e.buttons,children:[0!==n&&Object(N.jsx)(m.a,{onClick:function(){r(n-1)},className:e.button,children:"Voltar"}),n!==J.length-1&&Object(N.jsx)(m.a,{variant:"contained",color:"primary",onClick:function(){r(n+1)},className:e.button,disabled:0===n?!(s>0&&f>0&&B(W)&&B(F)>0):1===n?!(P.length>0):void 0,children:"Pr\xf3ximo"})]})]})})]})})]})}var Y=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)("header",{className:"App-header",children:Object(N.jsx)(X,{})})})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,156)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(Y,{})}),document.getElementById("root")),q()}},[[87,1,2]]]);
//# sourceMappingURL=main.969b77ba.chunk.js.map