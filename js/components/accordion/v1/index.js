class e extends window.HTMLElement{constructor(){if(super(),document.querySelector("api-viewer")){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","./src/css/index.css"),document.querySelector("api-viewer").shadowRoot.appendChild(e)}}connectedCallback(){if(this.classList.add("prog-enhanced"),this.expandTarget=this.querySelector(".accordion-card-container"),this.expandButton=this.querySelector(".accordion-card-header"),this.expandButton.addEventListener("click",this.listen.bind(this)),this.activateButton=this.querySelector(".accordion-card-header"),this.eventType=this.dataset.eventType?this.dataset.eventType:"click","true"===this.activateButton.getAttribute("aria-expanded")){this.triggerAccordionClick();let n=this.querySelectorAll(".accordion-card-container a"),t=this.querySelectorAll(".accordion-card-container button");for(var e=0;e<n.length;e++)n[e].removeAttribute("tabindex");for(e=0;e<t.length;e++)t[e].removeAttribute("tabindex")}else{let n=this.querySelectorAll(".accordion-card-container a"),t=this.querySelectorAll(".accordion-card-container button");for(e=0;e<n.length;e++)n[e].setAttribute("tabindex","-1");for(e=0;e<t.length;e++)t[e].setAttribute("tabindex","-1")}}listen(){this.cardBodyHeight||(this.cardBodyHeight=this.querySelector(".card-body").clientHeight+24),this.expandTarget.clientHeight>0?this.closeAccordion():this.expandAccordion()}triggerAccordionClick(){const e=new MouseEvent(this.eventType,{view:window,bubbles:!0,cancelable:!0});this.expandButton.dispatchEvent(e)}closeAccordion(){this.expandTarget.style.height="0px",this.expandTarget.setAttribute("aria-hidden","true"),this.querySelector(".accordion-card-header").classList.remove("accordion-alpha-open"),this.activateButton.setAttribute("aria-expanded","false");let e=this.querySelectorAll(".accordion-card-container a"),n=this.querySelectorAll(".accordion-card-container button");for(var t=0;t<e.length;t++)e[t].setAttribute("tabindex","-1");for(t=0;t<n.length;t++)n[t].setAttribute("tabindex","-1")}expandAccordion(){this.expandTarget.style.height=this.cardBodyHeight+"px",this.expandTarget.setAttribute("aria-hidden","false"),this.querySelector(".accordion-card-header").classList.add("accordion-alpha-open"),this.querySelector(".accordion-card-container").classList.remove("collapsed"),this.activateButton.setAttribute("aria-expanded","true");let e=this.querySelectorAll(".accordion-card-container a"),n=this.querySelectorAll(".accordion-card-container button");for(var t=0;t<e.length;t++)e[t].removeAttribute("tabindex");for(t=0;t<n.length;t++)n[t].removeAttribute("tabindex")}}window.customElements.define("cagov-accordion",e);const n=document.createElement("style");n.textContent="/* accordion component specific classes */\ncagov-accordion .cagov-accordion-card {\n  border-radius: .3rem !important;\n  margin-bottom: 0;\n  min-height: 3rem;\n  margin-top: .5rem;\n  border: solid 1px #ededef !important;\n}\n\ncagov-accordion .accordion-card-container {\n  display: block;\n  overflow: hidden;\n}\n\ncagov-accordion button.accordion-card-header {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  padding: 0 0 0 1rem;\n  background-clip: border-box;\n  background-color: #EDEDEF;\n  border: none;\n  position: relative;\n  width: 100%;\n  line-height: 3rem;\n}\ncagov-accordion .accordion-title {\n  text-align: left;\n  margin-bottom: 0;\n  color: var(--primary-color, #064E66);\n  margin-right: auto;\n  width: 90%;\n  padding: 0 0.5rem 0 0 !important;\n  font-size: 1.125rem;\n  font-weight: bold;\n}\n\ncagov-accordion.prog-enhanced .accordion-card-container {\n  height: 0px;\n  transition: height 0.3s ease;\n}\ncagov-accordion.prog-enhanced .accordion-card-container .card-body {\n  padding-left: 1rem;\n}\n\ncagov-accordion .collapsed {\n  display: block;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.accordion-title h4,\n.accordion-title h3,\n.accordion-title h2 {\n  padding: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  font-size: 1.2rem !important;\n  font-weight: 700;\n  color: var(--primary-color, #064E66);\n  text-align: left !important;\n}\n\nbutton.accordion-card-header:hover {\n  background-color: var(--hover-color, #F9F9FA);\n}\nbutton.accordion-card-header:hover .accordion-title {\n  text-decoration: underline;\n}\nbutton.accordion-card-header:focus {\n  outline-offset: -2px;\n}\n\n.accordion-icon svg line {\n  stroke-width: 4px;  \n}\n\n.prog-enhanced .accordion-alpha .plus-minus {\n  width: 2.125rem;\n  height: 2.125rem;\n  border: none;\n  padding: 0.45rem .45rem;\n  overflow: hidden;\n  margin-left: 1rem;\n  color: var(--primary-color, #064E66);\n  align-self: flex-start;\n}\n.prog-enhanced .accordion-alpha .plus-minus svg {\n  fill: var(--primary-color, #064E66);\n  width: 25px;\n  height: 25px;\n}\n\n.prog-enhanced .accordion-alpha-open cagov-plus .accordion-icon {\n  display: none !important;\n}\n.prog-enhanced .accordion-alpha-open cagov-minus .accordion-icon {\n  display: block !important;\n}\n\n@media only screen and (max-width: 767px) {\n  .accordion-alpha-open + .accordion-card-container {\n    height: 100% !important;\n  }\n}\n\n/*# sourceMappingURL=index.css.map */\n",document.querySelector("head").appendChild(n);class t extends window.HTMLElement{connectedCallback(){this.innerHTML='<div class="accordion-icon" aria-hidden="true">\n        <svg viewbox="0 0 25 25">\n            <title>Plus</title>\n            <line x1="6" y1="12.5" x2="19" y2="12.5" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />\n            <line y1="6" x1="12.5" y2="19" x2="12.5" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />\n        </svg>\n      </div>'}}window.customElements.define("cagov-plus",t);class o extends window.HTMLElement{connectedCallback(){this.innerHTML='<div class="accordion-icon" aria-hidden="true">\n        <svg viewbox="0 0 25 25">\n            <title>Minus</title>\n            <line x1="6" y1="12.5" x2="19" y2="12.5"  fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" vector-effect="non-scaling-stroke" />\n        </svg>\n      </div>'}}window.customElements.define("cagov-minus",o);
