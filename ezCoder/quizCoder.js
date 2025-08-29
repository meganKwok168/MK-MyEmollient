//question modes
let all_that_apply = 0;
let choose_one = 1;

let defaultQuestions = [
    {
        "question": "How would you describe your skin? (Choose all that apply)",
        "answers": [
            "Dry", 
            "Sensitive", 
            "Flaky", 
            "Itchy", 
            "Rough", 
            "Ashy", 
            "None of the above, just want to glow!"],
        "question_mode": all_that_apply
    },
    {
        "question": "Do you have any specific issues you would like to address?",
        "answers": [
            "Eczema", 
            "Psoriasis", 
            "Stretch Marks", 
            "Cracked Heels", 
            "Skin Elasticity", 
            "Dark Spots/ Hyperpigmentation", 
            "Muscle Tension", 
            "Hot Flashes", 
            "Overheating", 
            "Sunburns",          
            "None of the above"],
        "question_mode": all_that_apply
    },
    {
        "question": "How is your sleep?",
        "answers": [
            "I have trouble falling alseep at night.",
            "I wish I had more energy in the mornings.",
            "No complaints!"
        ],
        "question_mode": choose_one
    },
    {
        "question": "What's your relationship to fitness?",
        "answers": [
            "I'm passionate about staying fit through exercise.",
            "I love to hike and stay active by doing outdoor activities.",
            "I get my steps in by traveling to new destinations.",
            "I'm a homebody."
        ],
        "question_mode": choose_one
    },
    {
        "question": "What kind of fragrance do you prefer?",
        "answers": [
            "Refreshing & natural",
            "Calming & floral",
            "Herbal & grounding",
            "Warm & comforting",
            "Clean & simple",
            "None, I prefer fragrance-free skincare"
        ],
        "question_mode": choose_one
    }
]

let tempQuestions = [
    {
        "question": "How would you describe your skin? (Choose all that apply)",
        "answers": [
            "Dry", 
            "Sensitive", 
            "Flaky", 
            "Itchy", 
            "Rough", 
            "Ashy", 
            "None of the above, just want to glow!"],
        "question_mode": all_that_apply
    },
    {
        "question": "Do you have any specific issues you would like to address?",
        "answers": [
            "Eczema", 
            "Psoriasis", 
            "Stretch Marks", 
            "Cracked Heels", 
            "Skin Elasticity", 
            "Dark Spots/ Hyperpigmentation", 
            "Muscle Tension", 
            "Hot Flashes", 
            "Overheating", 
            "Sunburns",          
            "None of the above"],
        "question_mode": all_that_apply
    },
    {
        "question": "How is your sleep?",
        "answers": [
            "I have trouble falling alseep at night.",
            "I wish I had more energy in the mornings.",
            "No complaints!"
        ],
        "question_mode": choose_one
    },
    {
        "question": "What's your relationship to fitness?",
        "answers": [
            "I'm passionate about staying fit through exercise.",
            "I love to hike and stay active by doing outdoor activities.",
            "I get my steps in by traveling to new destinations.",
            "I'm a homebody."
        ],
        "question_mode": choose_one
    },
    {
        "question": "What kind of fragrance do you prefer?",
        "answers": [
            "Refreshing & natural",
            "Calming & floral",
            "Herbal & grounding",
            "Warm & comforting",
            "Clean & simple",
            "None, I prefer fragrance-free skincare"
        ],
        "question_mode": choose_one
    }
]

let questions = defaultQuestions;


let defaultProducts = [
    {
        "name": "Lemon + Sage Body Butter ",
        "link": "https://myemollient.com/collections/lemon-sage",
        "imgUn": "https://myemollient.com/cdn/shop/files/Lemon_Sage_Body_Butter_for_Dry_Skin_and_Ec_1296x.jpg?v=1728704501",
        "imgDeux": "https://myemollient.com/cdn/shop/files/lemon_and_sage_body_butter_1296x.jpg?v=1728519251",
        "descript": "Infused with essential oils of lemon and sage, this butter not only pampers your skin but also envelops you in a rich, uplifting fragrance, providing a comforting experience with every use.",
        "choices": [
            {
                "question": 1,
                "answer": 5,
                "score": 1
            },
            {
                "question": 1,
                "answer": 5,
                "score": 1
            },
            {
                "question": 2,
                "answer": 1,
                "score": 1
            },
            {
                "question": 3,
                "answer": 0,
                "score": 1
            },
            {
                "question": 4,
                "answer": 2,
                "score": 3
            },
        ]
    },

    {
        "name": "Lavender Body Butter",
        "link": "https://myemollient.com/collections/lavender-body-butter",
        "imgUn": "https://myemollient.com/cdn/shop/files/handmade-lavender-body-butter_2700x.jpg?v=1747099010",
        "imgDeux": "https://myemollient.com/cdn/shop/products/my-emollient-dry-skin-solution_2700x.jpg?v=1747099010",
        "descript": "Experience the best body butter for dry, sensitive, and eczema-prone skin.",
        "choices": [
            {
                "question": 2,
                "answer": 0,
                "score": 1
            },
            {
                "question": 4,
                "answer": 1,
                "score": 3
            }
        ]
        
    },
    {
        "name": "Almond + Vanilla Body Butter",
        "link": "https://myemollient.com/collections/almond-vanilla-body-butter",
        "imgUn": "https://myemollient.com/cdn/shop/files/almond-vanilla-body-butter-orgnanic-moisturizer_1296x.jpg?v=1747415007",
        "imgDeux": "https://myemollient.com/cdn/shop/files/almond-vanilla-body-butter-jar-mango-butter-almonds_2700x.jpg?v=1755053852",
        "descript": "Experience the ultimate in moisture with our handcrafted Almond + Vanilla Whipped Body Butter—a rich, non-greasy formula made with 7 skin-loving ingredients. ",
        "choices": [
            {
                "question": 1,
                "answer": 2,
                "score": 1
            },
            {
                "question": 4,
                "answer": 3,
                "score": 3
            }
        ]
    },
    {
        "name": "Body Butter for Sensitive Skin",
        "link": "https://myemollient.com/collections/body-butter-for-sensitive-skin",
        "imgUn": "https://myemollient.com/cdn/shop/files/body_butter_for_sensitive_skin_and_eczema_1296x.jpg?v=1729980179",
        "imgDeux": "https://myemollient.com/cdn/shop/files/sensitive-skin-body-butter-with-kokum-and-aloe._2700x.jpg?v=1755053048",
        "descript": "This lightly scented body butter is crafted for those with sensitive skin who need a little extra care—including those managing dry patches or prone to eczema.",
        "choices": [
            {
                "question": 0,
                "answer": 1,
                "score": 2
            },
            {
                "question": 0,
                "answer": 2,
                "score": 1
            },
            {
                "question": 0,
                "answer": 3,
                "score": 1
            },
            {
                "question": 1,
                "answer": 0,
                "score": 10
            },
            {
                "question": 1,
                "answer": 9,
                "score": 1
            },
            {
                "question": 4,
                "answer": 3,
                "score": 1
            },
            {
                "question": 4,
                "answer": 4,
                "score": 1
            }
        ]
    },
    {
        "name": "Unscented Body Butter",
        "link": "https://myemollient.com/collections/unscented",
        "imgUn": "https://myemollient.com/cdn/shop/files/Unscented_Body_Butter_for_Winter_Dry_Skin_1296x.jpg?v=1737604260",
        "imgDeux": "https://myemollient.com/cdn/shop/files/best-body-butter-dry-skin-jar-closed_1296x.jpg?v=1747158292",
        "descript": "No Fragrance.  No Fluff. Just powerful hydration for even the most sensitive skin.",
        "choices": [
            {
                "question": 0,
                "answer": 1,
                "score": 1
            },
            {
                "question": 0,
                "answer": 2,
                "score": 1
            },
            {
                "question": 0,
                "answer": 3,
                "score": 1
            },
            {
                "question": 1,
                "answer": 0,
                "score": 10
            },
            {
                "question": 1,
                "answer": 1,
                "score": 10
            },
            {
                "question": 4,
                "answer": 4,
                "score": 1
            },
            {
                "question": 4,
                "answer": 5,
                "score": 3
            }
        ]        
    },
    {
        "name": "Peppermint Body Butter",
        "link": "https://myemollient.com/collections/peppermint-body-butter",
        "imgUn": "https://myemollient.com/cdn/shop/files/Peppermint_body_butter_for_eczema_dry_skin_menopause_and_hot_flashes_1296x.jpg?v=1750775986",
        "imgDeux": "https://myemollient.com/cdn/shop/files/peppermint-butter-post-workout-recovery_1296x.jpg?v=1755051005",
        "descript": "Crafted for dry, menopausal, and sensitive skin (including skin that's easily irritated or eczema-prone), the peppermint-infused formula delivers a crisp, cooling sensation while locking in long-lasting moisture.",
        "choices": [
            {
                "question": 1,
                "answer": 3,
                "score": 1
            },
            {
                "question": 1,
                "answer": 6,
                "score": 1
            },
            {
                "question": 1,
                "answer": 7,
                "score": 10
            },
            {
                "question": 1,
                "answer": 8,
                "score": 10
            },
            {
                "question": 2,
                "answer": 1,
                "score": 1
            },
            {
                "question": 3,
                "answer": 0,
                "score": 1
            },
            {
                "question": 4,
                "answer": 0,
                "score": 3
            }
        ]  
    },
    {
        "name": "Jet Lag Set",
        "link": "",
        "imgUn": "",
        "imgDeux": "",
        "descript": "description",
        "choices": [
            {
                "question": 3,
                "answer": 2,
                "score": 3
            }
        ]        
    },
    {
        "name": "Eczema",
        "link": "",
        "imgUn": "",
        "imgDeux": "",
        "descript": "description",
        "choices": [
            {
                "question": 1,
                "answer": 0,
                "score": 1
            },
            {
                "question": 1,
                "answer": 1,
                "score": 1
            }
        ]
    }
]

let tempProducts = [
    {
        "name": "Lemon + Sage Body Butter ",
        "link": "https://myemollient.com/collections/lemon-sage",
        "imgUn": "https://myemollient.com/cdn/shop/files/Lemon_Sage_Body_Butter_for_Dry_Skin_and_Ec_1296x.jpg?v=1728704501",
        "imgDeux": "https://myemollient.com/cdn/shop/files/lemon_and_sage_body_butter_1296x.jpg?v=1728519251",
        "descript": "Infused with essential oils of lemon and sage, this butter not only pampers your skin but also envelops you in a rich, uplifting fragrance, providing a comforting experience with every use.",
        "choices": [
            {
                "question": 1,
                "answer": 5,
                "score": 1
            },
            {
                "question": 1,
                "answer": 5,
                "score": 1
            },
            {
                "question": 2,
                "answer": 1,
                "score": 1
            },
            {
                "question": 3,
                "answer": 0,
                "score": 1
            },
            {
                "question": 4,
                "answer": 2,
                "score": 3
            },
        ]
    },

    {
        "name": "Lavender Body Butter",
        "link": "https://myemollient.com/collections/lavender-body-butter",
        "imgUn": "https://myemollient.com/cdn/shop/files/handmade-lavender-body-butter_2700x.jpg?v=1747099010",
        "imgDeux": "https://myemollient.com/cdn/shop/products/my-emollient-dry-skin-solution_2700x.jpg?v=1747099010",
        "descript": "Experience the best body butter for dry, sensitive, and eczema-prone skin.",
        "choices": [
            {
                "question": 2,
                "answer": 0,
                "score": 1
            },
            {
                "question": 4,
                "answer": 1,
                "score": 3
            }
        ]
        
    },
    {
        "name": "Almond + Vanilla Body Butter",
        "link": "https://myemollient.com/collections/almond-vanilla-body-butter",
        "imgUn": "https://myemollient.com/cdn/shop/files/almond-vanilla-body-butter-orgnanic-moisturizer_1296x.jpg?v=1747415007",
        "imgDeux": "https://myemollient.com/cdn/shop/files/almond-vanilla-body-butter-jar-mango-butter-almonds_2700x.jpg?v=1755053852",
        "descript": "Experience the ultimate in moisture with our handcrafted Almond + Vanilla Whipped Body Butter—a rich, non-greasy formula made with 7 skin-loving ingredients. ",
        "choices": [
            {
                "question": 1,
                "answer": 2,
                "score": 1
            },
            {
                "question": 4,
                "answer": 3,
                "score": 3
            }
        ]
    },
    {
        "name": "Body Butter for Sensitive Skin",
        "link": "https://myemollient.com/collections/body-butter-for-sensitive-skin",
        "imgUn": "https://myemollient.com/cdn/shop/files/body_butter_for_sensitive_skin_and_eczema_1296x.jpg?v=1729980179",
        "imgDeux": "https://myemollient.com/cdn/shop/files/sensitive-skin-body-butter-with-kokum-and-aloe._2700x.jpg?v=1755053048",
        "descript": "This lightly scented body butter is crafted for those with sensitive skin who need a little extra care—including those managing dry patches or prone to eczema.",
        "choices": [
            {
                "question": 0,
                "answer": 1,
                "score": 2
            },
            {
                "question": 0,
                "answer": 2,
                "score": 1
            },
            {
                "question": 0,
                "answer": 3,
                "score": 1
            },
            {
                "question": 1,
                "answer": 0,
                "score": 10
            },
            {
                "question": 1,
                "answer": 9,
                "score": 1
            },
            {
                "question": 4,
                "answer": 3,
                "score": 1
            },
            {
                "question": 4,
                "answer": 4,
                "score": 1
            }
        ]
    },
    {
        "name": "Unscented Body Butter",
        "link": "https://myemollient.com/collections/unscented",
        "imgUn": "https://myemollient.com/cdn/shop/files/Unscented_Body_Butter_for_Winter_Dry_Skin_1296x.jpg?v=1737604260",
        "imgDeux": "https://myemollient.com/cdn/shop/files/best-body-butter-dry-skin-jar-closed_1296x.jpg?v=1747158292",
        "descript": "No Fragrance.  No Fluff. Just powerful hydration for even the most sensitive skin.",
        "choices": [
            {
                "question": 0,
                "answer": 1,
                "score": 1
            },
            {
                "question": 0,
                "answer": 2,
                "score": 1
            },
            {
                "question": 0,
                "answer": 3,
                "score": 1
            },
            {
                "question": 1,
                "answer": 0,
                "score": 10
            },
            {
                "question": 1,
                "answer": 1,
                "score": 10
            },
            {
                "question": 4,
                "answer": 4,
                "score": 1
            },
            {
                "question": 4,
                "answer": 5,
                "score": 3
            }
        ]        
    },
    {
        "name": "Peppermint Body Butter",
        "link": "https://myemollient.com/collections/peppermint-body-butter",
        "imgUn": "https://myemollient.com/cdn/shop/files/Peppermint_body_butter_for_eczema_dry_skin_menopause_and_hot_flashes_1296x.jpg?v=1750775986",
        "imgDeux": "https://myemollient.com/cdn/shop/files/peppermint-butter-post-workout-recovery_1296x.jpg?v=1755051005",
        "descript": "Crafted for dry, menopausal, and sensitive skin (including skin that's easily irritated or eczema-prone), the peppermint-infused formula delivers a crisp, cooling sensation while locking in long-lasting moisture.",
        "choices": [
            {
                "question": 1,
                "answer": 3,
                "score": 1
            },
            {
                "question": 1,
                "answer": 6,
                "score": 1
            },
            {
                "question": 1,
                "answer": 7,
                "score": 10
            },
            {
                "question": 1,
                "answer": 8,
                "score": 10
            },
            {
                "question": 2,
                "answer": 1,
                "score": 1
            },
            {
                "question": 3,
                "answer": 0,
                "score": 1
            },
            {
                "question": 4,
                "answer": 0,
                "score": 3
            }
        ]  
    },
    {
        "name": "Jet Lag Set",
        "link": "",
        "imgUn": "",
        "imgDeux": "",
        "descript": "description",
        "choices": [
            {
                "question": 3,
                "answer": 2,
                "score": 3
            }
        ]        
    },
    {
        "name": "Eczema",
        "link": "",
        "imgUn": "",
        "imgDeux": "",
        "descript": "description",
        "choices": [
            {
                "question": 1,
                "answer": 0,
                "score": 1
            },
            {
                "question": 1,
                "answer": 1,
                "score": 1
            }
        ]
    }
]
let products = defaultProducts;

function makeForm(){

    st = `<div style="border: 1px solid black; background-color: white;">    <form id="slideshowForm">`; //start string
    
    for (let q = 0; q < questions.length; q++){ //iterate through questions
    
        if (q == 0){
            st+=  `<div class="slideActive" id="q${q}">`;
        }
        else{
            st+=  `<div class="slide" id="q${q}">`;
        }
        st += `<div class="questionNum">Question: ${q}</div>  <p class="question-text">${questions[q].question}</p>`; //quesiton
         st+= `<div class="options">`
        for (let a = 0; a < questions[q].answers.length; a++){
            let inputMode = ``;
            if (questions[q].question_mode == all_that_apply){
                inputMode = `checkbox`;
            } 
            else {
                inputMode = `radio`;
            }
            st+=`<input type = "${inputMode}" 
                id="q${q}a${a}" value="${questions[q].answers[a]}" name="q${q}">
                <label class="option-btn" for="q${q}a${a}">${questions[q].answers[a]}</label>    <br>`;
        }
            

        st += `</div> </div>`;
    }

    st+=`   <div id="quizButtons" ></div>
    </form> </div>`;

    document.getElementById("display").innerHTML = st; //insert code into HTML
}


let currentSlide = 0;

function makeQuizButtons(){
    let nextButtonCode = ``;
    if (currentSlide == questions.length-1){ //if currentSlide is last slide
        nextButtonCode = `<button type="submit" class="prevNextButtons" id="submitButton" disabled="disabled">Submit</button>`;
    }
    else{
        nextButtonCode = `<button type="button" class="prevNextButtons" id="nextButton" onclick="changeSlide(1)">Next</button>`;
    }
    let prevButtonCode = ``;
    if (currentSlide == 0){ //if currentSlide is first slide
        prevButtonCode = `disabled="disabled"`      //disable prevButton
    }
    document.getElementById("quizButtons").innerHTML =
    `<div class="quizButtons">
        <button type="button" class="prevNextButtons" id="prevButton" onclick="changeSlide(-1)" ${prevButtonCode}>Back</button>
        ${nextButtonCode}
    </div>`;

    document.getElementById("slideshowForm").addEventListener("submit", function(e){
        e.preventDefault();
        //processing data===============================
        let formData = new FormData(slideshowForm);
        let formValuesList = []
        for (let [key, value] of formData.entries()) {
            formValuesList.push({ name: key, value: value });
        }
        //call function for making result and input processed data
        makeResult(formValuesList);
    })
}

function changeSlide(n){
    document.getElementById(`q${currentSlide}`).className = "slide";
    currentSlide += n;
    document.getElementById(`q${currentSlide}`).className="slideActive"
    makeButtons();
}
makeForm();
makeQuizButtons();

let defaultButtons = [
    {
        "name": "Get Shopify Code",
        "function": "makeShopifyCode()"
    },
    {
        "name": "Get HTML Code",
        "function": "makeHTMLCode()"
    },
    {
        "name": "Edit Question List",
        "function": "editQuestionList()"
    }, 
    {
        "name": "Edit Question Choices",
        "function": "editQuestionChoices()"
    },
    {
        "name": "Edit Product List",
        "function": "editQuizProducts()"
    }
]

let tempButtons = [
    {
        "name": "Get Shopify Code",
        "function": "makeShopifyCode()"
    },
    {
        "name": "Get HTML Code",
        "function": "makeHTMLCode()"
    },
    {
        "name": "Save as Default",
        "function": "saveAsDefault()" 
    },
    {
        "name": "Save as Temporary",
        "function": "saveAsTemporary()"
    },
    {
        "name": "Revert All",
        "function": "revert()"
    },
    {
        "name": "See Default",
        "function": "makeDefault()"
    }
]

let buttons = defaultButtons;

function makeButtons(){ //main buttons
    let st = ``;
    for (button of buttons){
        st+=`<button class="bouton" onclick=${button.function}>${button.name}</button>`
    }
    if (buttons == defaultButtons){
        st+=`<button class="bouton" onclick="window.location.href='ezCoder.html'">Home</button>`;
    }
    document.getElementById("buttons").innerHTML = st;
}
makeButtons();

function makeShopifyCode(){

}

function makeHTMLCode(){

}

function saveAsDefault(){
    defaultProducts = products;
    defaultQuestions = questions;
    saveAsTemporary();
}

function saveAsTemporary(){
    tempProducts = products;
    tempQuestions = questions;
}

function revert(){
    products = defaultProducts;
    tempProducts = defaultProducts;
    questions = defaultQuestions;
    tempQuestions = defaultQuestions;
}


function editQuestionList(){
    products = tempProducts;
    questions = tempQuestions;

    // making display =============
    let displaySt=`
        <div style="display: flex;">
        <div class="questionEditContainer">
        `;
    for (let q = 0; q < questions.length; q ++){
        displaySt += `<div class="questionEdit" onclick="makeQuestionRight(${q})">
            <p style="text-decoration: underline;">Q${q}: ${questions[q].question}</p>
            <div>`;
        for (let a = 0; a < questions[q].answers.length; a++){
            displaySt += `<p>${a}: ${questions[q].answers[a]}</p>`;
        }
        displaySt += `</div> </div>`;
    }
    displaySt += `
        <button class="questionEdit">+</button>
            </div>
            <div id="right" class="right"></div>
        </div>
        `;

    document.getElementById("display").innerHTML = displaySt;

    buttons = tempButtons;
    makeButtons();
}
;
function makeQuestionRight(n){
    hideRight();
    let st = `<form id="editQuestions">
       <label for="questionIndex">Question Index (0-${questions.length}): </label><input type="number" name="questionIndex" id="questionIndex" min="0" max="${questions.length}"value=${n}>
        <label for="questionName">Question: </label><textarea name="questionName" id="questionName"rows="4" cols="50">${questions[n].question}</textarea><br>`;
    for (let a = 0; a < questions[n].answers.length; a++){
        st += `<label for="answer${a}">Choice ${a}: </label><textarea name="answer${a}" id="answer${a}"rows="4" cols="50">${questions[n].answers[a]}</textarea><br>`;
    }
    st += `
        <br>
        <button type="button" onclick="addChoice(${n})">Add Choice</button><br><br>
        <input type="submit" value="Submit">
    </form>
    <br>
    <p onclick="hideRight()" style="cursor: pointer; text-decoration: underline">Hide</p>
`;
    document.getElementById("right").innerHTML = st;


        document.getElementById("editQuestions").addEventListener("submit", function(e){
            e.preventDefault();
            let i = parseInt(document.getElementById("questionIndex").value);
            
            if (n != i){
                let tempQ = questions[n];
                questions.splice(n,1);
                questions.splice(i,0,tempQ);
            }

            n = i;
            let tempQuestion = {
                question: document.getElementById("questionName").value,
                answers: [] 
            }

        for (let a = 0; a < questions[n].answers.length; a++){
                tempQuestion.answers.push(document.getElementById(`answer${a}`).value);

            }

            questions[n] = tempQuestion;

            saveAsTemporary();
            editQuestionList();
        });

}


function hideRight(){
    document.getElementById("right").innerHTML = ``;
}

function addQuestion(){

    saveAsTemporary();
}

function deleteQuestion(){
    saveAsTemporary();
}

function addChoice(n){
    saveAsTemporary();

    questions[n].answers.push("Choice text");
    saveAsTemporary();
    makeQuestionRight(n);
}

function deleteChoice(){
    saveAsTemporary();
}
function editQuestionChoices(){
    products = tempProducts;
    questions = tempQuestions;


    buttons = tempButtons;
    makeButtons();}

function editQuizProducts(){
    products = tempProducts;
    questions = tempQuestions;

    buttons = tempButtons;
    makeButtons();
}

function makeDefault(){
    products = defaultProducts;
    questions = defaultQuestions;
    buttons = defaultButtons;
    currentSlide = 0;
    makeForm();
    makeQuizButtons();
    makeButtons();
}