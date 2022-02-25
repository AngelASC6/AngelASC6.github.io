// Variable declerations
bar = document.getElementById("bar");
backgroundButton = document.getElementById("background_button");
educationButton = document.getElementById("education_button");
experienceButton = document.getElementById("experience_button");

backgroundDiv = document.getElementById("background_info_div");
educationDiv = document.getElementById("education_div");
experience_div = document.getElementById("experience_div");

leftArrow = document.getElementById("left_arrow")
rightArrow = document.getElementById("right_arrow")


pages = [backgroundDiv,educationDiv,experience_div]

const BAR_INCRAMENT = (100/pages.length)

 
pageNumber = 1;


// Function Declerations

// Adds the animate class to an object and removes it
function animate(element,animation,display){
    element.classList.add(`animate__${animation}`)
    element.addEventListener('animationend', () => {
        element.style.display = display
        element.classList.remove(`animate__${animation}`)

      });
}



// Moves to the next Page div in the array of pages
function nextPage(){
    if(pageNumber-1 < pages.length-1){
        changePage(pageNumber, pageNumber+1,"backInRight","backOutLeft");
        pageNumber ++;
        bar.style.width = `${BAR_INCRAMENT * pageNumber}%`

    }
    else{
        pageNumber = 1;
        bar.style.width = `${BAR_INCRAMENT}%`
        changePage(pages.length,pageNumber,"backInRight","backOutLeft");

    }
}

// Moves to previous page in array of pages
// TODO make helper function to make code reusable
function previousPage(){
    if(pageNumber != 1){
        changePage(pageNumber, pageNumber-1,"backInLeft","backOutRight");
        pageNumber --;
        bar.style.width = `${BAR_INCRAMENT * pageNumber}%`
    }
    else{
        pageNumber = pages.length;
        bar.style.width = `${BAR_INCRAMENT*pageNumber}%`
        changePage(1,pageNumber,"backInLeft","backOutRight");

    }

}


// Hides Current Page and displays new page
function changePage(currentPage,newPage,entryAnimation,exitAnimation){
    currentPageDetail = pages[currentPage-1];
    newPageDetail = pages[newPage-1]
    console.log(`Changing from ${currentPage} to ${newPage}`)
    animate(currentPageDetail,exitAnimation,"none");

    newPageDetail.style.display = "flex"
    animate(newPageDetail,entryAnimation,"flex")   
}



// Event Listeners


// Allows user to navigate pages
rightArrow.addEventListener("click",nextPage);
leftArrow.addEventListener("click",previousPage);



// TODO Allow user to navigate directly to page by clicking on page in bottom nav bar





    
