const container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link"),


    // js code to Show/Hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click",()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password")
                {
                    pwField.type ="text";
                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-solid fa-eye-slash","fa-solid fa-eye")
                    })
                }
                else
                {
                    pwField.type ="password"; 
                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("fa-solid fa-eye","fa-solid fa-eye-slash")
                    })
                }

            })
        })
    })

    // js code to appear signup and login form

    signUp.addEventListener('click',()=>{
        container.classList.add("active");
    });
    login.addEventListener('click',()=>{
        container.classList.remove("active");
    });
