(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,s){"use strict";s.r(t);s(48);var a=s(0),i=s.n(a),n=s(142),M=s(147),u=(s(168),s(169),s(148),function(e){var t=e.users;return i.a.createElement("div",{className:"organizer"},i.a.createElement("div",{className:"avatars"},t.map(function(e){return i.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+e.member.photo.photo_link+")"}})})),i.a.createElement("div",{className:"names"},t.map(function(e,s){return i.a.createElement("span",null,e.member.name,s!==t.length-1?t.length>2&&s<t.length-2?", ":" & ":null)})))}),r=function(e){var t=e.meetup,s=e.path;return i.a.createElement("div",{className:"event-item"},i.a.createElement("div",{className:"event-item-image"}),i.a.createElement("div",{className:"event-item-detail"},i.a.createElement("div",{className:"info"},i.a.createElement(u,{users:t.organizers}),i.a.createElement("h2",null,t.name),i.a.createElement("span",null,t.local_date," ",t.local_time),i.a.createElement(n.Link,{to:s,className:"button"},"More info"))))};s(170);s.d(t,"query",function(){return L});var L="3464550367";t.default=function(e){console.log(e);var t=e.data;console.log(t);var s=t.allMarkdownRemark.edges;return i.a.createElement(M.a,null,i.a.createElement("div",{className:"event-wrapper"},s.map(function(e){var t=e.node;return i.a.createElement(r,{path:t.fields.slug,meetup:t.frontmatter.meetup})})))}},142:function(e,t,s){"use strict";s.r(t),s.d(t,"graphql",function(){return d}),s.d(t,"StaticQueryContext",function(){return w}),s.d(t,"StaticQuery",function(){return o});var a=s(0),i=s.n(a),n=s(4),M=s.n(n),u=s(141),r=s.n(u);s.d(t,"Link",function(){return r.a}),s.d(t,"withPrefix",function(){return u.withPrefix}),s.d(t,"navigate",function(){return u.navigate}),s.d(t,"push",function(){return u.push}),s.d(t,"replace",function(){return u.replace}),s.d(t,"navigateTo",function(){return u.navigateTo});var L=s(143),l=s.n(L);s.d(t,"PageRenderer",function(){return l.a});var c=s(33);s.d(t,"parsePath",function(){return c.a});var w=i.a.createContext({}),o=function(e){return i.a.createElement(w.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}o.propTypes={data:M.a.object,query:M.a.string.isRequired,render:M.a.func,children:M.a.func}},143:function(e,t,s){var a;e.exports=(a=s(145))&&a.default||a},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Microservices Manchester Meetup"}}}}},145:function(e,t,s){"use strict";s.r(t);s(34);var a=s(0),i=s.n(a),n=s(4),M=s.n(n),u=s(50),r=s(2),L=function(e){var t=e.location,s=r.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(u.a,Object.assign({location:t,pageResources:s},s.json))};L.propTypes={location:M.a.shape({pathname:M.a.string.isRequired}).isRequired},t.default=L},146:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny41OCAxNi45NCI+PHRpdGxlPkFzc2V0IDQ8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0iTTYsMTQuNDJ2Mi41MkgxN1YwSDBWMTYuOTRINC41MlYyLjUySDZ2NUM2LDguODIsNi42LDkuOSw4LDkuOWEyLjI1LDIuMjUsMCwwLDAsMi0xLjQxLDIuMjIsMi4yMiwwLDAsMCwuMTQtLjc5VjIuNTJoMS41MlY4LjY1YzAsLjkyLjE5LDEuMjkuOCwxLjMybC0uMTIsMS4xMmExLjU2LDEuNTYsMCwwLDEtLjUyLjA3Yy0uNzUsMC0xLjM3LS40Mi0xLjUtMS41aC0uMDZhMi43NSwyLjc1LDAsMCwxLTIuNDIsMS40NkEyLDIsMCwwLDEsNiwxMC4ydjEuMDUiIHN0eWxlPSJmaWxsOiM0MzlmZDgiLz48cGF0aCBkPSJNMjYuNzMsNC40MSwyNC41OCwxMWgwbC0yLTYuNTVIMjAuMDVWMTNoMS42MlY5YzAtLjQ2LDAtMS4zNy0uMTEtMi43NGguMDVMMjMuNjcsMTNoMS42N2wyLjIxLTYuNzFoLjA1Yy0uMDUsMS4wOC0uMDgsMS43NC0uMDgsMnMwLC40OCwwLC42N1YxM0gyOS4yVjQuNDFaIiBzdHlsZT0iZmlsbDojMjMxZjIwIi8+PHBhdGggZD0iTTM2Ljc2LDYuODZhMy4xMiwzLjEyLDAsMCwwLTItLjU3LDUuMjgsNS4yOCwwLDAsMC0yLjUxLjU5bC42LDEuMmE0LjcsNC43LDAsMCwxLDEuODQtLjQ3Ljg5Ljg5LDAsMCwxLDEsMXYuMjhsLTEuMTQsMGE0LjE5LDQuMTksMCwwLDAtMi4yLjU1QTEuNzMsMS43MywwLDAsMCwzMS42MywxMWEyLjA4LDIuMDgsMCwwLDAsLjU0LDEuNTQsMiwyLDAsMCwwLDEuNDguNTQsMywzLDAsMCwwLDEuMjUtLjIyLDIuNjUsMi42NSwwLDAsMCwuOTMtLjc5aDBsLjM1Ljg5aDEuMjVWOC42MUEyLjEzLDIuMTMsMCwwLDAsMzYuNzYsNi44NlptLTEuMDcsMy42MmExLjIyLDEuMjIsMCwwLDEtLjM3Ljk0LDEuMzcsMS4zNywwLDAsMS0xLC4zNnEtLjg3LDAtLjg3LS43NWEuODkuODksMCwwLDEsLjM4LS43OUEyLjI2LDIuMjYsMCwwLDEsMzUsMTBsLjY5LDBaIiBzdHlsZT0iZmlsbDojMjMxZjIwIi8+PHBhdGggZD0iTTQ1LjYsNi45MmEyLjI1LDIuMjUsMCwwLDAtMS43My0uNjIsMi44MSwyLjgxLDAsMCwwLTEuMTkuMjQsMS44OCwxLjg4LDAsMCwwLS44My43MmgtLjFsLS4yNC0uODRINDAuMTVWMTNoMS43OFY5Ljg5YTMuMTIsMy4xMiwwLDAsMSwuMzQtMS42NiwxLjE4LDEuMTgsMCwwLDEsMS4wOC0uNS45NC45NCwwLDAsMSwuODEuMzUsMS45MiwxLjkyLDAsMCwxLC4yNSwxLjA3VjEzaDEuNzhWOC43QTIuNDQsMi40NCwwLDAsMCw0NS42LDYuOTJaIiBzdHlsZT0iZmlsbDojMjMxZjIwIi8+PHBhdGggZD0iTTUxLjY5LDExLjY0Yy0uOTMsMC0xLjM5LS42NC0xLjM5LTEuOTJzLjQ2LTIsMS4zOS0yYTIuNjQsMi42NCwwLDAsMSwuNzMuMTEsNi44MSw2LjgxLDAsMCwxLC43OC4yOGwuNTMtMS4zOWE0LjYzLDQuNjMsMCwwLDAtMi0uNDQsMy4xLDMuMSwwLDAsMC0yLjM4Ljg4LDMuNTYsMy41NiwwLDAsMC0uODMsMi41NWMwLDIuMjQsMSwzLjM2LDMuMDUsMy4zNkE0LjkxLDQuOTEsMCwwLDAsNTIuNjUsMTNhMi43LDIuNywwLDAsMCwuODgtLjM4VjExLjA3YTMuNCwzLjQsMCwwLDEtLjg4LjQzQTMsMywwLDAsMSw1MS42OSwxMS42NFoiIHN0eWxlPSJmaWxsOiMyMzFmMjAiLz48cGF0aCBkPSJNNjEuMzMsNi45MmEyLjI5LDIuMjksMCwwLDAtMS43NS0uNjIsMi4wNywyLjA3LDAsMCwwLTEuOSwxaC0uMDlsMC0uNTNjMC0uNTMsMC0uODcsMC0xVjMuODVINTUuODhWMTNoMS43OVY5Ljg5QTMuMTQsMy4xNCwwLDAsMSw1OCw4LjI0YTEuMjIsMS4yMiwwLDAsMSwxLjA5LS41MWMuNywwLDEsLjQ3LDEsMS40MlYxM2gxLjc5VjguN0EyLjQ2LDIuNDYsMCwwLDAsNjEuMzMsNi45MloiIHN0eWxlPSJmaWxsOiMyMzFmMjAiLz48cGF0aCBkPSJNNzAuMjUsOS4yN2EzLDMsMCwwLDAtLjc4LTIuMTgsMi44NSwyLjg1LDAsMCwwLTIuMTYtLjc5QTIuOSwyLjksMCwwLDAsNjUsNy4yYTMuNjMsMy42MywwLDAsMC0uODMsMi41NCwzLjM0LDMuMzQsMCwwLDAsLjg5LDIuNDgsMy40MSwzLjQxLDAsMCwwLDIuNDguODcsNi4wNiw2LjA2LDAsMCwwLDEuMy0uMTIsNC4yMSw0LjIxLDAsMCwwLDEtLjM0VjExLjI0YTYuMTUsNi4xNSwwLDAsMS0xLjEuNCw1LjA2LDUuMDYsMCwwLDEtMS4xMi4xMiwxLjYsMS42LDAsMCwxLTEuMTktLjQzQTEuNzIsMS43MiwwLDAsMSw2NiwxMC4xNGg0LjIzWk02Ni4wNiw5YTEuNjksMS42OSwwLDAsMSwuMzctMSwxLjE0LDEuMTQsMCwwLDEsLjg5LS4zNiwxLjIsMS4yLDAsMCwxLC45MS4zNiwxLjUxLDEuNTEsMCwwLDEsLjM0LDFaIiBzdHlsZT0iZmlsbDojMjMxZjIwIi8+PHBhdGggZD0iTTc2Ljk0LDEwLjE5YTEuNjMsMS42MywwLDAsMC0uNTMtLjYyQTQuNjksNC42OSwwLDAsMCw3NS4yOSw5YTcuNDUsNy40NSwwLDAsMS0xLjEyLS41Mi41MS41MSwwLDAsMS0uMjUtLjQyYzAtLjI5LjI2LS40My43OS0uNDNhMi44MywyLjgzLDAsMCwxLC44Ny4xNCw5LjcsOS43LDAsMCwxLC45Mi4zNEw3Nyw2LjgxYTUuNDksNS40OSwwLDAsMC0yLjMtLjUxLDMuMjgsMy4yOCwwLDAsMC0xLjkyLjQ4LDEuNTQsMS41NCwwLDAsMC0uNjgsMS4zNUEyLjExLDIuMTEsMCwwLDAsNzIuMyw5YTEuNiwxLjYsMCwwLDAsLjUyLjYyLDUuMTYsNS4xNiwwLDAsMCwxLjExLjU5cS41Mi4yMi44NC4zOWExLjkyLDEuOTIsMCwwLDEsLjQ1LjMuNDguNDgsMCwwLDEsLjEzLjM0YzAsLjM3LS4zMy41Ni0xLC41NmE0LjI4LDQuMjgsMCwwLDEtMS4wOS0uMTYsNS43Niw1Ljc2LDAsMCwxLTEuMTMtLjM5djEuNDhhNC43Niw0Ljc2LDAsMCwwLC45NS4yOCw2LjA2LDYuMDYsMCwwLDAsMS4yMi4xLDMuNDYsMy40NiwwLDAsMCwyLjA5LS41MywxLjc5LDEuNzksMCwwLDAsLjctMS41M0ExLjkzLDEuOTMsMCwwLDAsNzYuOTQsMTAuMTlaIiBzdHlsZT0iZmlsbDojMjMxZjIwIi8+PHBhdGggZD0iTTgyLjEsMTEuNjZhLjg0Ljg0LDAsMCwxLS41Ni0uMTguNy43LDAsMCwxLS4yMS0uNTZWNy43NmgxLjgzVjYuNDJIODEuMzNWNUg4MC4xOGwtLjUxLDEuMzgtMSwuNnYuNzVoLjg2djMuMTZBMi4zNSwyLjM1LDAsMCwwLDgwLDEyLjU1YTIsMiwwLDAsMCwxLjU2LjU0LDQsNCwwLDAsMCwxLjY0LS4zVjExLjQ2QTMuNzQsMy43NCwwLDAsMSw4Mi4xLDExLjY2WiIgc3R5bGU9ImZpbGw6IzIzMWYyMCIvPjxwYXRoIGQ9Ik05MSw5LjI3YTMsMywwLDAsMC0uNzctMi4xOEEyLjg5LDIuODksMCwwLDAsODguMSw2LjNhMi45NCwyLjk0LDAsMCwwLTIuMjguOUEzLjYzLDMuNjMsMCwwLDAsODUsOS43NGEzLjMxLDMuMzEsMCwwLDAsLjg5LDIuNDgsMy4zNywzLjM3LDAsMCwwLDIuNDcuODcsNi4wNiw2LjA2LDAsMCwwLDEuMy0uMTIsNC4wNyw0LjA3LDAsMCwwLDEtLjM0VjExLjI0YTYuMTUsNi4xNSwwLDAsMS0xLjEuNCw1LDUsMCwwLDEtMS4xMi4xMiwxLjU2LDEuNTYsMCwwLDEtMS4xOC0uNDMsMS43MiwxLjcyLDAsMCwxLS40NS0xLjE5SDkxWk04Ni44NSw5YTEuNjMsMS42MywwLDAsMSwuMzctMSwxLjEyLDEuMTIsMCwwLDEsLjg5LS4zNiwxLjE2LDEuMTYsMCwwLDEsLjkuMzYsMS41MSwxLjUxLDAsMCwxLC4zNSwxWiIgc3R5bGU9ImZpbGw6IzIzMWYyMCIvPjxwYXRoIGQ9Ik05Nyw2LjNhMi4wNywyLjA3LDAsMCwwLTEuMTMuMzMsMi41OSwyLjU5LDAsMCwwLS44Mi44OWgtLjA5bC0uMjYtMS4xSDkzLjMyVjEzaDEuNzlWOS42NGExLjU4LDEuNTgsMCwwLDEsLjQ4LTEuMjNBMS44NiwxLjg2LDAsMCwxLDk2LjkyLDhhMiwyLDAsMCwxLC41My4wNmwuMTMtMS42OEEzLjI4LDMuMjgsMCwwLDAsOTcsNi4zWiIgc3R5bGU9ImZpbGw6IzIzMWYyMCIvPjwvZz48L2c+PC9zdmc+"},147:function(e,t,s){"use strict";var a=s(144),i=s(0),n=s.n(i),M=s(4),u=s.n(M),r=s(149),L=s.n(r),l=s(142),c=s(146),w=s.n(c),o=function(e){e.siteTitle;return n.a.createElement("div",{className:"header"},n.a.createElement("div",null,n.a.createElement(l.Link,{to:"/"},n.a.createElement("img",{src:w.a}))))},d=function(e){var t=e.children;return n.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(L.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},n.a.createElement("html",{lang:"en"})),n.a.createElement(o,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,paddingTop:0}},t))},data:a})};d.propTypes={children:u.a.node.isRequired};t.a=d},148:function(e,t,s){var a=s(25).f,i=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in i||s(16)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},168:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-045aa.png",srcSet:"/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-0552a.png 75w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-fc3be.png 150w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-045aa.png 300w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-24f49.png 450w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-5497d.png 600w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-483e1.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},169:function(e,t,s){"use strict";var a=s(35);t.__esModule=!0,t.default=void 0;var i,n=a(s(7)),M=a(s(49)),u=a(s(151)),r=a(s(152)),L=a(s(0)),l=a(s(4)),c=function(e){var t=(0,r.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},w={},o=function(e){var t=c(e),s=t.fluid?t.fluid.src:t.fixed.src;return!!w[s]||(w[s]=!0,!1)},d=[];var D=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){d.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),d.push([e,t])},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',s=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+s+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+s+"/>":"",n=e.title?'title="'+e.title+'" ':"",M=e.alt?'alt="'+e.alt+'" ':'alt="" ',u=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",L=e.opacity?e.opacity:"1";return"<picture>"+a+i+"<img "+u+r+t+M+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+L+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},f=L.default.forwardRef(function(e,t){var s=e.style,a=e.onLoad,i=e.onError,n=(0,u.default)(e,["style","onLoad","onError"]);return L.default.createElement("img",(0,r.default)({},n,{onLoad:a,onError:i,ref:t,style:(0,r.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});f.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var N=function(e){function t(t){var s;s=e.call(this,t)||this;var a=!0,i=!0,n=!1,u=t.fadeIn,r=o(t);!r&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!1,n=!0),"undefined"==typeof window&&(a=!1,i=!1),t.critical&&(a=!0,i=!1,n=!1);var l=!(s.props.critical&&!s.props.fadeIn);return s.state={isVisible:a,imgLoaded:i,IOSupported:n,fadeIn:u,hasNoScript:l,seenBefore:r},s.imageRef=L.default.createRef(),s.handleImageLoaded=s.handleImageLoaded.bind((0,M.default)((0,M.default)(s))),s.handleRef=s.handleRef.bind((0,M.default)((0,M.default)(s))),s}(0,n.default)(t,e);var s=t.prototype;return s.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},s.handleRef=function(e){var t=this;this.state.IOSupported&&e&&D(e,function(){t.setState({isVisible:!0})})},s.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},s.render=function(){var e=c(this.props),t=e.title,s=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,M=e.imgStyle,u=void 0===M?{}:M,l=e.placeholderStyle,w=void 0===l?{}:l,o=e.fluid,d=e.fixed,D=e.backgroundColor,N=e.Tag,y="boolean"==typeof D?"lightgray":D,g=(0,r.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},u,w),S=(0,r.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},u);if(o){var E=o;return L.default.createElement(N,{className:(a||"")+" gatsby-image-wrapper",style:(0,r.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(E.srcSet)},L.default.createElement(N,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&L.default.createElement(f,{alt:this.state.isVisible?"":s,title:t,src:E.base64,style:g}),E.tracedSVG&&L.default.createElement(f,{alt:this.state.isVisible?"":s,title:t,src:E.tracedSVG,style:g}),y&&L.default.createElement(N,{title:t,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&L.default.createElement("picture",null,E.srcSetWebp&&L.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),L.default.createElement("source",{srcSet:E.srcSet,sizes:E.sizes}),L.default.createElement(f,{alt:s,title:t,src:E.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&L.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,r.default)({alt:s,title:t},E))}}))}if(d){var C=d,p=(0,r.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},n);return"inherit"===n.display&&delete p.display,L.default.createElement(N,{className:(a||"")+" gatsby-image-wrapper",style:p,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},C.base64&&L.default.createElement(f,{alt:this.state.isVisible?"":s,title:t,src:C.base64,style:g}),C.tracedSVG&&L.default.createElement(f,{alt:this.state.isVisible?"":s,title:t,src:C.tracedSVG,style:g}),y&&L.default.createElement(N,{title:t,style:{backgroundColor:y,width:C.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:C.height}}),this.state.isVisible&&L.default.createElement("picture",null,C.srcSetWebp&&L.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),L.default.createElement("source",{srcSet:C.srcSet,sizes:C.sizes}),L.default.createElement(f,{alt:s,title:t,width:C.width,height:C.height,src:C.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&L.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,r.default)({alt:s,title:t,width:C.width,height:C.height},C))}}))}return null},t}(L.default.Component);N.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),g=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});N.propTypes={resolutions:y,sizes:g,fixed:y,fluid:g,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,Tag:l.default.string};var S=N;t.default=S},170:function(e,t,s){}}]);
//# sourceMappingURL=component---src-pages-index-js-e33e9167a2a4b8170070.js.map