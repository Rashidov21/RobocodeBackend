// short query function
function q(el){
    if (!el.startsWith("#")){
        if(document.querySelectorAll(`${el}`).length === 1) element = document.querySelector(`${el}`)
        else if(document.querySelectorAll(`${el}`).length >= 2) element = document.querySelectorAll(`${el}`)
        if(typeof(element) != 'undefined' && element != null){
            return element
        }
        else{
            return new Error("element undefined")
        }
    }else{
        element = document.querySelector(`${el}`)
        if(typeof(element) != 'undefined' && element != null){
            return element
        }
        else{
            return new Error("element undefined")
        }
    }
}
    
/* start navbar functions */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if(Math.ceil(window.scrollY) >= 500){
    if (prevScrollpos > currentScrollPos) {
    document.querySelector(".section_navbar").classList = "section_navbar for_navbar_section2"
  } else {
     document.querySelector(".section_navbar").classList = "section_navbar for_navbar_section1"
  }
  prevScrollpos = currentScrollPos;
  }
  else{
    document.querySelector(".section_navbar").classList = "section_navbar"
  }
}
let navnum = 0;
function navbarControlr(){
   navnum++
   function media1(x) {
      let line = q(".line");
      var navbar = q('.navbar_right');
      if (x.matches) { 
            if(navnum >= 2){navnum = 0}
            if (navnum == 0) {
                  navbar.style.height = 0;
                  line.forEach( function(e){
                    e.style = ""
                  })
            }if(navnum == 1){
                  var wrapper = navbar.querySelector("ul")
                  navbar.style.height = wrapper.clientHeight + "px";
                  line.forEach( function(e){
                    e.style = "top:42.5%;"
                  })
          }
      } else {
          navnum = 0
          navbar.style.height = "";
      }
  }
  var x = window.matchMedia("(max-width: 1100px)")
  media1(x) 
  x.addListener(media1)
}
/* end navbar functions */