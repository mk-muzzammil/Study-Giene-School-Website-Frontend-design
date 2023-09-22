const plusIcons=document.querySelectorAll(".plusIcon");
const crossIcons=document.querySelectorAll(".crossIcon");

plusIcons.forEach((plusIcon)=>{

  plusIcon.addEventListener("click",(event)=>{

    const element=event.target;
    const parentEle=event.target.parentNode;
    const parentNode=element.parentNode.parentNode;
    
    const crossIcon=parentEle.querySelector(".crossIcon");
    const answerDiv=parentNode.querySelector('.answerContentContainer');
    
    answerDiv.classList.add("showAnswerDiv");
    
    
    element.classList.add("hidePlusIcon");
    
    crossIcon.classList.add("showCrossIcon");
  
  })




})
crossIcons.forEach((crossIcon)=>{
  crossIcon.addEventListener('click',(event)=>{
    const element=event.target;
    const plusIcon=element.previousElementSibling;
    const answerDiv=element.parentNode.nextElementSibling;

    crossIcon.classList.remove("showCrossIcon");
    plusIcon.classList.remove("hidePlusIcon");
    answerDiv.classList.remove("showAnswerDiv");
    

  })
})





