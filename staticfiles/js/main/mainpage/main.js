/* start swipers */
let course_swiper = new Swiper(".course_swiper",{
  loop:true
})
let delay = q(".typer").getAttribute("data-delay")
let delay_delete =  q(".typer").getAttribute("data-deleteDelay")
let words = q(".course_typer").querySelector(".typer").getAttribute("data-words").split(",").filter((v) => v)
course_swiper.on('slideChangeTransitionEnd', function() {
  let index_slide = course_swiper.realIndex;
  let typer = q(".course_typer");
  let arr = []
  for(let i = 0; i<words.length; i++){
    if(i !== index_slide){
      arr.push(words[i])
    }
  }
  arr.unshift(words[index_slide])
   typer.innerHTML = `
    <span 
         class="typer" id="main"
         data-words="${arr}"
         data-delay="${delay}" data-deleteDelay="${delay_delete}">
    </span>  
    <span class="cursor" data-owner="main" data-cursorDisplay="|"></span>
   `
   TyperSetup();
});

let typerSlideNum = -1;
function typerSlide(){
  typerSlideNum ++
  let content = words[typerSlideNum]
  let wait = (q(".typer").getAttribute("data-delay") * 2) * (content.length + 1) + Number(q(".typer").getAttribute("data-deleteDelay"))
  setTimeout(function(){
    if(typerSlideNum < words.length-1){
        course_swiper.slideTo(typerSlideNum+2)
        typerSlide()
    }
  },wait)
  
  if(typerSlideNum >= words.length-1) typerSlideNum = -1
}
typerSlide()
/* end swipers*/
/* start main course animations */
let course_blocks = q(".course_blocks");
function media2(y) {
    if (y.matches){ 
           course_blocks.forEach((e,index)=>{
              e.style = `
                    position: sticky;
                    top:${15 * (index+1)}px;
              `
           })
        } else {
          course_blocks.forEach((e,index)=>{
            e.style = `
                  position: sticky;
                  top:${25 * (index+1)}px;
            `
          })
    }
}
var y = window.matchMedia("(max-width:1100px)")
media2(y) 
y.addListener(media2)
//
window.addEventListener("scroll", function(){
  course_blocks.forEach(function(e,index){
    let courseTop = Math.ceil(e.getBoundingClientRect().top);
    if(courseTop <= (window.innerHeight - e.getBoundingClientRect().height + 50) / 2){
      e.classList.add('for_course_blocks');
      e.querySelector("img").style = "filter:grayscale(0%);"
    }
    else{
      e.className = 'course_blocks';
       e.querySelector("img").style = "filter:grayscale(100%);"
    }
  })
  let defferences_img = q(".difference_img");
  defferences_img.forEach(function(e){
    let e_height = e.getBoundingClientRect().height;
    let e_top = Math.ceil(e.getBoundingClientRect().top)
    if(e_top <= window.innerHeight - ( e_height / 2)){
      e.querySelector(".dots").classList.add("for_defference_img_dots")
      e.querySelector(".phone").classList.add("for_defference_img_phone")
    }
    else{
      e.querySelector(".dots").className = "dots"
      e.querySelector(".phone").className = "phone"
    }
  })
  let defferences_text = q(".difference_text")
  defferences_text.forEach(function(e){
    let e_height = e.getBoundingClientRect().height;
    let e_top = Math.ceil(e.getBoundingClientRect().top)
    if(e_top <= window.innerHeight - ( e_height / 1.5)){
      e.classList.add("for_difference_text")

    }
    else{
      e.className = "difference_text"
  
    }
  })
  let seo_img = q(".ceo_img");
  let seo_img_height = seo_img.getBoundingClientRect().height;
  let seo_img_top = Math.ceil(seo_img.getBoundingClientRect().top)
  if(seo_img_top <= window.innerHeight - ( seo_img_height / 2)){
      seo_img.classList.add("for_seo")
      seo_img.querySelector("img").style = "filter: grayscale(0%);"
    }
    else{
      seo_img.className = "ceo_img"
      seo_img.querySelector("img").style = "filter: grayscale(100%);"
    }
    if(seo_img_top <= window.innerHeight - seo_img_height){
      seo_img.querySelector("img").style = "filter: grayscale(0%);"
    }
    else{
      seo_img.querySelector("img").style = "filter: grayscale(100%);"
    }

  let ceo_text = q(".ceo_text");
  let ceo_text_height = ceo_text.getBoundingClientRect().height;
  let ceo_text_top = Math.ceil(ceo_text.getBoundingClientRect().top)
  if(ceo_text_top <= window.innerHeight - ( ceo_text_height / 1.5)){
      ceo_text.classList.add("for_seo")

    }
    else{
      ceo_text.className = "ceo_text"
  
    }

  let rb_group = q(".rb_group_dots");
  let rb_group_height = rb_group.getBoundingClientRect().height;
  let rb_group_top = Math.ceil(rb_group.getBoundingClientRect().top)
  if(rb_group_top <= window.innerHeight - ( rb_group_height / 1.5)){
      rb_group.classList.add("for_defference_img_dots")

    }
    else{
      rb_group.className = "rb_group_dots"
    }
  let rb_group_tablet = q(".rb_group_tablet");
  let rb_group_tablet_height = rb_group_tablet.getBoundingClientRect().height;
  let rb_group_tablet_top = Math.ceil(rb_group_tablet.getBoundingClientRect().top)
  if(rb_group_tablet_top <= window.innerHeight - ( rb_group_tablet_height / 1.5)){
      rb_group_tablet.classList.add("for_defference_img_phone")
    }
    else{
      rb_group_tablet.className = "rb_group_tablet"
    }
  let arm = q(".sign_up_img").querySelector("img");
  let arm_height = arm.getBoundingClientRect().height;
  let arm_top = Math.ceil(arm.getBoundingClientRect().top)
  if(arm_top <= window.innerHeight - ( arm_height / 2)){
      arm.classList.add("arm_action")
    }
    else{
      arm.className = ""
    }
})

let members_swiper = new Swiper(".members_swiper",{
  slidesPerView:'auto',
  centeredSlides: true,
  // spaceBetween: 20,
  pagination: {
          el: ".swiper-pagination",
          clickable: true,
  },
})
/* end main course animations */
function asks(e){
   let panel = e.nextElementSibling;
   if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    e.className = "ask_title"
    e.querySelectorAll("span")[2].innerHTML = "+"
    e.parentElement.className = ""
  } else {
    q(".ask_sub_field").forEach((e)=>{
      e.style.maxHeight = null;
    })
    q(".ask_title").forEach((e)=>{
      e.className = "ask_title"
      e.querySelectorAll("span")[2].innerHTML = "+"
      e.parentElement.className = ""
    })
    panel.style.maxHeight = panel.scrollHeight + "px";
    e.classList.add("active_asks")
    e.querySelectorAll("span")[2].innerHTML = "-"
    e.parentElement.className = "active_asks_parent"

  }
}


// fetch('url here', {
//     method: 'POST',
//     headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
//     body: 'foo=bar&blah=1'
// });