const isInViewport=function(n){var a=document.documentElement.scrollTop;return e>=n.offsetTop-.25*n.offsetHeight&&e<n.offsetTop+n.offsetHeight-.25*n.offsetHeight},onViewPort=(n,e)=>{window.addEventListener("scroll",function(t){var o,a;o=n,(a=document.documentElement.scrollTop)>=o.offsetTop-.25*o.offsetHeight&&a<o.offsetTop+o.offsetHeight-.25*o.offsetHeight&&e()},!1)},Element=n=>document.getElementById(n),navbarMobileExpand=Element("navbarMobileExpand"),navbarNavMenu=Element("navbarNavMenu"),navbarExtend=()=>{navbarNavMenu.classList.toggle("navbar__nav__open"),navbarMobileExpand.classList.toggle("expand__button__open")};navbarMobileExpand.onclick=function(){navbarExtend()};const navTags=document.querySelectorAll(".navbar__nav__ul__li__a"),sections=document.querySelectorAll(".section");navTags.forEach(n=>{n.addEventListener("click",()=>{navbarExtend()})});const removeActiveClasses=()=>{navTags.forEach(n=>{n.classList.remove("nav__active")})},addActiveClass=n=>{const e=`.navbar__nav__ul__li a[href="#${n}"]`;document.querySelector(e).classList.add("nav__active")};sections.forEach(n=>{onViewPort(n,()=>{navTags.forEach(n=>{n.classList.remove("nav__active")}),addActiveClass(n.attributes.id.value)})});const navbar=Element("navbar"),sectionOne=Element("main__section"),sectionOneOptions={rootMargin:"-100px 0px 0px 0px"},sectionOneObserver=new IntersectionObserver(function(n,e){n.forEach(n=>{n.isIntersecting?navbar.classList.add("navbar__white"):navbar.classList.remove("navbar__white")})},sectionOneOptions);sectionOneObserver.observe(sectionOne);const animationsOnScroll=[],onScrollAnimation=(n,e)=>(function(){var t=document.documentElement.scrollTop;t>=n.offsetTop-1.4*n.offsetHeight&&t<n.offsetTop+n.offsetHeight-1.4*n.offsetHeight&&n.classList.add(e)});animationsOnScroll.push(onScrollAnimation(Element("about"),"fade-left")),animationsOnScroll.push(onScrollAnimation(Element("motto"),"fade-right")),animationsOnScroll.push(onScrollAnimation(Element("work"),"scroll-anim")),animationsOnScroll.push(onScrollAnimation(Element("projects"),"projects__animated")),animationsOnScroll.push(onScrollAnimation(Element("contact"),"contact__animated")),animationsOnScroll.push(onScrollAnimation(Element("blog"),"blog__animated")),window.onscroll=function(){animationsOnScroll.forEach(n=>{n()})},Element("learnMore").onclick=function(){Element("about").scrollIntoView()};const layerButtonEvent=n=>{Element("layerMask").classList.toggle("layer__display__none"),Element(n).classList.toggle("layer__display__none"),Element(n).classList.toggle("layer__display__animation__on"),Element(n).classList.toggle("layer__display__animation__off"),Element("body").classList.toggle("scroll__off")};Element("projectBtn").onclick=function(){layerButtonEvent("layerProject")},Element("layerProjectClose").onclick=function(){layerButtonEvent("layerProject")},Element("hireUsButton").onclick=function(){layerButtonEvent("hireUsSection")},Element("layerHireUsCancel").onclick=function(){layerButtonEvent("hireUsSection")};