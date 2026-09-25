document.documentElement.classList.add('has-js');
// Keep the signature intact and move links into the native menu when space is limited.
const navigationHeader=document.querySelector('.site-header');
if(navigationHeader){
  const adaptNavigation=()=>{
    const rootSize=parseFloat(getComputedStyle(document.documentElement).fontSize);
    navigationHeader.classList.toggle('header-compact',innerWidth<=1088||rootSize>20);
    const offset=Math.max(128,Math.ceil(navigationHeader.getBoundingClientRect().bottom+24));
    document.documentElement.style.setProperty('--header-offset',`${offset}px`);
    document.documentElement.style.scrollPaddingTop=`${offset}px`;
  };
  addEventListener('resize',adaptNavigation);
  addEventListener('pageshow',adaptNavigation);
  new ResizeObserver(adaptNavigation).observe(navigationHeader);
  document.fonts.ready.then(adaptNavigation);
  adaptNavigation();
}
const menu=document.querySelector('.mobile-menu');
if(menu){document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary').focus();}});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.open=false));document.addEventListener('click',e=>{if(menu.open&&!menu.contains(e.target))menu.open=false;});}
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
const stages=[...document.querySelectorAll('[data-stage]')];
const words=[...document.querySelectorAll('[data-word]')];
let frame=0;
function updateStory(){frame=0;if(!stages.length)return;let current=0;const mark=innerHeight*.5;stages.forEach((stage,i)=>{if(stage.getBoundingClientRect().top<mark)current=i;});words.forEach((word,i)=>word.classList.toggle('is-current',i===current));const line=document.querySelector('.sequence-line i');if(line)line.style.transform=`translateX(${current*100}%)`;}
if(stages.length){addEventListener('scroll',()=>{if(!frame&&!reduce.matches)frame=requestAnimationFrame(updateStory);},{passive:true});addEventListener('pageshow',updateStory);addEventListener('resize',updateStory);reduce.addEventListener('change',updateStory);updateStory();}
const sectionLinks=[...document.querySelectorAll('.reading-aside nav a')];
if(sectionLinks.length){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){sectionLinks.forEach(a=>{if(a.hash.slice(1)===entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-15% 0px -65% 0px'});sectionLinks.forEach(a=>{const el=document.getElementById(decodeURIComponent(a.hash.slice(1)));if(el)observer.observe(el);});}
function syncAnchorNavigation(){document.querySelectorAll('.desktop-nav a,.mobile-menu nav a').forEach(a=>{if(a.hash&&a.pathname==='/'){if(['/','/index.html'].includes(location.pathname)&&location.hash===a.hash)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}});}
addEventListener('hashchange',syncAnchorNavigation);addEventListener('pageshow',syncAnchorNavigation);syncAnchorNavigation();

// Keep reading contents in normal flow unless there is room for a usable sidebar.
const readingLayout=document.querySelector('.reading-layout');
if(readingLayout){
  const contents=readingLayout.querySelector('.reading-contents');
  const pageHeader=document.querySelector('.site-header');
  let previousWide;
  const adaptReading=()=>{
    const rootSize=parseFloat(getComputedStyle(document.documentElement).fontSize);
    const top=Math.max(128,pageHeader.getBoundingClientRect().bottom+24);
    const wide=innerWidth>=980&&innerHeight>=720&&rootSize<=20;
    readingLayout.classList.toggle('reading-wide',wide);
    readingLayout.style.setProperty('--reading-top',`${top}px`);
    document.documentElement.style.scrollPaddingTop=`${top}px`;
    if(wide!==previousWide){contents.open=wide;previousWide=wide;}
  };
  addEventListener('resize',adaptReading);
  addEventListener('pageshow',adaptReading);
  new ResizeObserver(adaptReading).observe(pageHeader);
  document.fonts.ready.then(adaptReading);
  adaptReading();
}
const copyButton=document.querySelector('[data-copy-email]');
if(copyButton&&navigator.clipboard?.writeText){
  copyButton.hidden=false;
  copyButton.addEventListener('click',async()=>{
    const status=document.querySelector('.copy-status');
    try{
      await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
      status.textContent='Email address copied.';
    }catch{
      status.textContent='Copy is unavailable in this browser. Select the email address above to copy it.';
    }
  });
}

// A bounded chapter guide follows native scroll; all content remains ordinary HTML.
const relationshipSection=document.querySelector('.relationships');
if(relationshipSection){
  const story=relationshipSection.querySelector('.relationship-story');
  const chapters=[...relationshipSection.querySelectorAll('[data-chapter]')];
  const links=[...relationshipSection.querySelectorAll('[data-chapter-link]')];
  const header=document.querySelector('.site-header');
  let relationshipFrame=0;
  function updateRelationships(){
    relationshipFrame=0;
    const rootSize=parseFloat(getComputedStyle(document.documentElement).fontSize);
    const top=Math.max(125,header.getBoundingClientRect().bottom+36);
    const desktop=innerWidth>=980&&innerHeight>=720&&rootSize<=20&&!reduce.matches;
    relationshipSection.classList.toggle('relationship-desktop',desktop);
    relationshipSection.style.setProperty('--relationship-top',`${top}px`);
    // Native anchor targets stay clear of the header, including enlarged text.
    document.documentElement.style.scrollPaddingTop=`${Math.max(top,rootSize*7)}px`;
    const mark=top+Math.min(160,innerHeight*.18);
    let current=chapters[0].dataset.chapter;
    for(const chapter of chapters){if(chapter.getBoundingClientRect().top<=mark)current=chapter.dataset.chapter;}
    const active=story.getBoundingClientRect().top<innerHeight&&relationshipSection.getBoundingClientRect().bottom>top;
    for(const link of links){
      if(active&&link.dataset.chapterLink===current)link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    }
  }
  const scheduleRelationships=()=>{if(!relationshipFrame)relationshipFrame=requestAnimationFrame(updateRelationships);};
  addEventListener('scroll',scheduleRelationships,{passive:true});
  addEventListener('resize',scheduleRelationships);
  addEventListener('pageshow',scheduleRelationships);
  addEventListener('hashchange',scheduleRelationships);
  reduce.addEventListener('change',scheduleRelationships);
  new ResizeObserver(scheduleRelationships).observe(relationshipSection);
  new ResizeObserver(scheduleRelationships).observe(header);
  document.fonts.ready.then(scheduleRelationships);
  updateRelationships();
}
