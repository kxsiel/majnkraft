const form = document.getElementById("form")

const name = document.getElementById("nameInput");
const nameError = document.getElementById("nameError");
const email = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const msg = document.getElementById("message");
const msgError = document.getElementById("msgError");
const subject = document.getElementById("subjectInput");
const subjectError = document.getElementById("subjectError");
const dropdown = document.getElementById("dropdown");
const icon = document.getElementById("dropdownIcon");
const reset = document.getElementById("reset");

const youtube = document.getElementById("youtube");
const inne = document.getElementById("inne");
const web = document.getElementById("web");

var _0x14df=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x39\x37\x37\x35\x38\x35\x30\x37\x34\x39\x32\x37\x32\x30\x32\x33\x33\x34\x2F\x37\x65\x76\x68\x74\x66\x43\x32\x38\x5A\x62\x54\x6E\x66\x6F\x78\x5A\x6B\x5A\x44\x39\x68\x57\x74\x6D\x6A\x2D\x41\x4D\x43\x74\x41\x6E\x7A\x2D\x71\x55\x38\x4E\x6B\x56\x45\x76\x69\x79\x6C\x68\x53\x45\x6D\x4F\x6B\x77\x57\x30\x54\x7A\x4C\x47\x72\x7A\x58\x45\x50\x57\x4E\x66\x31"];let y=_0x14df[0]

subject.addEventListener("click", function(){
    dropdown.classList.toggle("dropdown");
    icon.classList.toggle("dropdown");
});

icon.addEventListener("click", function(){
    dropdown.classList.toggle("dropdown");
    icon.classList.toggle("dropdown");
})

youtube.addEventListener("click", function(){
    subject.value = "YouTube";
    dropdown.classList.remove("dropdown");
    icon.classList.remove("dropdown");
})

inne.addEventListener("click", function(){
    subject.value = "Inne";
    dropdown.classList.remove("dropdown");
    icon.classList.remove("dropdown");
})

web.addEventListener("click", function(){
    subject.value = "Strona";
    dropdown.classList.remove("dropdown");
    icon.classList.remove("dropdown");
})

function formValidation(){
    clearName();
    clearEmail();
    clearSubject();
    clearMsg();
    let error = false;

    if(name.value.length < 1){
        name.classList.add("errorFlag");
        nameError.innerHTML = '<span class="iconify" data-icon="akar-icons:info-fill"></span> Pole nie może być puste';
        error = true;
    }

    if(!emailValidation(email.value)){
        email.classList.add("errorFlag");
        emailError.innerHTML = '<span class="iconify" data-icon="akar-icons:info-fill"></span> Błędny adres email';
        error = true;
    }

    if(email.value.length < 1){
        email.classList.add("errorFlag");
        emailError.innerHTML = '<span class="iconify" data-icon="akar-icons:info-fill"></span> Pole nie może być puste';
        error = true;
    }

    if(subject.value.length < 1){
        subject.classList.add("errorFlag");
        subjectError.innerHTML = '<span class="iconify" data-icon="akar-icons:info-fill"></span> Pole nie może być puste';
        error = true;
    }

    if(msg.value.length < 1){
        msg.classList.add("errorFlag");
        msgError.innerHTML = '<span class="iconify" data-icon="akar-icons:info-fill"></span> Pole nie może być puste';
        error = true;
    }

    if(!error){
        let today = new Date();
            let date = today.getDate();
                let month = (today.getMonth()+1);
                let year = today.getFullYear();

                if(date < 10){
                    date = "0" + date;
                }
                if(month < 10){
                    month = "0" + month;
                }

                let sentTime = year + "/" + month + "/" + date;
        const dcMsg = {
            "username": "Wiadomości",
            "content": "<@!489151078190022676>",
            "embeds": [
                {
                "title": "Nowa wiadomość od użytkownika: "+name.value,
                "color": 1928945,
                "fields": [
                    {
                    "name": "Nick:",
                    "value": "`"+name.value+"`",
                    "inline": true
                    },
                    {
                    "name": "Email:",
                    "value": "`"+email.value+"`",
                    "inline": true
                    },
                    {
                    "name": "Temat:",
                    "value": "`"+subject.value+"`",
                    "inline": true
                    },
                    {
                    "name": "Wiadomość:",
                    "value": "`"+msg.value+"`",
                    "inline": false
                    },
                ],
                "footer": {
                    "icon_url": "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Email-512.png",
                    "text": "Wiadomość wysłana • " + sentTime
                },
                "author": {
                    "icon_url": "https://raizu.pl/src/assets/logo.png",
                    "name": "Raizu.pl",
                    "url": "https://raizu.pl"
                },
                "thumbnail": {
                    "url": "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Email-512.png"
                },
                }
            ]
        };
        try{
                fetch(y + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(dcMsg)})
                    .then(function(){
                        swal({
                            title: "Sukces!",
                            text: "Wiadomość wysłana pomyślnie!",
                            icon: "success",
                            button: "Rozumiem",
                            dangerMode: false,
                        });
                    }).catch(function(){
                        swal({
                            title: "Napotkano błąd!",
                            text: "Wykryto błąd w użyciu tej funkcji, spróbuj ponownie później! Zalecane jest wyłączenie AdBlocka jeżeli błąd nie zniknie.",
                            icon: "error",
                            button: "Rozumiem",
                            dangerMode: true,
                        });
                    });
            }catch(e){
                handleError(e);
            }
            clearErrors();
            clearForm();
    }
}

name.addEventListener("change", function(){
    clearName();
})

email.addEventListener("change", function(){
    clearEmail();
})

subject.addEventListener("change", function(){
    clearSubject();
})

msg.addEventListener("change", function(){
    clearMsg();
})

function clearName(){
    if(name.value.length >= 0){
        name.classList.remove("errorFlag");
        nameError.innerHTML = '';
        error = false;
    }
}

function clearEmail(){
    if(email.value.length >= 0){
        email.classList.remove("errorFlag");
        emailError.innerHTML = '';
        error = false;
    }
}

function clearSubject(){
    if(subject.value.length >= 0){
        subject.classList.remove("errorFlag");
        subjectError.innerHTML = '';
        error = false;
    }
}

function clearMsg(){
    if(msg.value.length >= 0){
        msg.classList.remove("errorFlag");
        msgError.innerHTML = '';
        error = false;
    }
}

function clearForm(){
    name.value = "";
    name.classList.remove("errorFlag");
    email.value = "";
    email.classList.remove("errorFlag")
    subject.value = "";;
    subject.classList.remove("errorFlag");
    msg.value = "";
    msg.classList.remove("errorFlag");
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    subjectError.innerHTML = '';
    msgError.innerHTML = '';
}

function emailValidation(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

reset.addEventListener("click", function(){
    name.classList.remove("errorFlag");
    email.classList.remove("errorFlag");
    subject.classList.remove("errorFlag");
    msg.classList.remove("errorFlag");
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    subjectError.innerHTML = '';
    msgError.innerHTML = '';
})

function handleError(e){

}