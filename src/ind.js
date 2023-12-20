export function handleScrolly1Click() {
    const scrolly1Elements = document.getElementsByClassName("scrolly1");
    const scrolly2Elements = document.getElementsByClassName("scrolly2");
  
    // Remove "highlight" class from scrolly1 elements
    for (let i = 0; i < scrolly1Elements.length; i++) {
      scrolly1Elements[i].classList.add("highlight");
    }
  
    // Add "highlight" class to scrolly2 elements
    for (let i = 0; i < scrolly2Elements.length; i++) {
      scrolly2Elements[i].classList.remove("highlight");
    }
  }
  
  export function handleScrolly2Click() {
    const scrolly1Elements = document.getElementsByClassName("scrolly1");
    const scrolly2Elements = document.getElementsByClassName("scrolly2");
  
    // Add "highlight" class to scrolly1 elements
    for (let i = 0; i < scrolly1Elements.length; i++) {
      scrolly1Elements[i].classList.remove("highlight");
    }
  
    // Remove "highlight" class from scrolly2 elements
    for (let i = 0; i < scrolly2Elements.length; i++) {
      scrolly2Elements[i].classList.add("highlight");
    }
  }
  