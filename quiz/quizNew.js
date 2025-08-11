//question modes
let all_that_apply = 0;
let choose_one = 1;

const questions = [
    {
        "question": "How would you describe your skin? (Choose all that apply)",
        "answers": ["Dry", "Sensitive", "Flaky", "Itchy", "Rough", "Ashy", "None of the above, just want to glow!"],
        "question_mode": all_that_apply
    },
    {
        "question": "Do you have any specific issues you would like to address?",
        "answers": ["Eczema", "Psoriasis", "Stretch Marks", "Cracked Heels", "Skin Elasticity", "Dark Spots/Hyperpigmentation", "Muscle Tension", "None of the above"],
        "question_mode": all_that_apply
    },
    {
        "question": "Do you experience hot flashes?",
        "answers": ["Yes", "No", "No, but I do get overheated easily."],
        "question_mode": choose_one
    },
    {
        "question": "Are you prone to getting sunburnt?",
        "answers": ["Yes", "No"],
        "question_mode": choose_one
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
        "question": "How are you feeling most days?",
        "answers": [
            "Great!",
            "I tend to get anxious easily.",
            "I'm usually tired.",
            "Okay, but I could be happier."
        ],
        "question_mode": choose_one
    },
    {
        "question": "How often do you travel?",
        "answers": [
            "All the time!",
            "Every once in a while.",
            "I'm a homebody."
        ],
        "question_mode": choose_one
    },
    {
        "question": "Are you an indoors or an outdoors person?",
        "answers": [
            "I'm a homebody.",
            "I love the great outdoors!",
            "I'm a little bit of both."
        ],
        "question_mode": choose_one
    },
    {
        "question": "How active are you?",
        "answers": [
            "I love to hit the gym!",
            "I exercise sometimes",
            "Not at all."
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

const products = [
    {
        "name": "Lemon + Sage Body Butter ",
        "link": "https://myemollient.com/collections/lemon-sage",
        "imgUn": "https://myemollient.com/cdn/shop/files/Lemon_Sage_Body_Butter_for_Dry_Skin_and_Ec_1296x.jpg?v=1728704501",
        "imgDeux": "https://myemollient.com/cdn/shop/files/lemon_and_sage_body_butter_1296x.jpg?v=1728519251",
        "descript": "description",
        "choices": {
            [questions[1].answers[3]]: 1,
            [questions[1].answers[5]]: 1,
            [questions[4].answers[1]]: 1,
            [questions[5].answers[3]]: 1,
            [questions[9].answers[2]]: 3

        }
    },

    {
        "name": "Lavender Body Butter",
        "link": "https://myemollient.com/collections/lavender-body-butter",
        "imgUn": "https://myemollient.com/cdn/shop/files/handmade-lavender-body-butter_2700x.jpg?v=1747099010",
        "imgDeux": "https://myemollient.com/cdn/shop/products/my-emollient-dry-skin-solution_2700x.jpg?v=1747099010",
        "descript": "description",
        "choices": {
            [questions[0].answers[0]]: 1,
            [questions[5].answers[1]]: 1,
            [questions[9].answers[3]]: 3
        }
    },
    {
        "name": "Almond + Vanilla Body Butter",
        "link": "https://myemollient.com/collections/almond-vanilla-body-butter",
        "imgUn": "https://myemollient.com/cdn/shop/files/almond-vanilla-body-butter-orgnanic-moisturizer_1296x.jpg?v=1747415007",
        "imgDeux": "https://myemollient.com/cdn/shop/files/whipped-almond-vanilla-body-butter-texture-eczema_1296x.jpg?v=1747427110",
        "descript": "description",
        "choices": {
            [questions[1].answers[2]]: 2,
            [questions[9].answers[3]]: 3
        }
    },
    {
        "name": "Body Butter for Sensitive Skin",
        "link": "https://myemollient.com/collections/body-butter-for-sensitive-skin",
        "imgUn": "https://myemollient.com/cdn/shop/products/amber2_50_sensitive_1296x.jpg?v=1585272159",
        "imgDeux": "https://myemollient.com/cdn/shop/files/body_butter_for_sensitive_skin_and_eczema_1296x.jpg?v=1729980179",
        "descript": "description",
        "choices": {
            [questions[0].answers[1]]: 2,
            [questions[0].answers[2]]: 1,
            [questions[0].answers[3]]: 1,
            [questions[1].answers[0]]: 1,
            [questions[3].answers[0]]: 1,
            [questions[9].answers[3]]: 1,
            [questions[9].answers[4]]: 1
        }
    },
    {
        "name": "Unscented Body Butter",
        "link": "https://myemollient.com/collections/unscented",
        "imgUn": "https://myemollient.com/cdn/shop/files/Unscented_Body_Butter_for_Winter_Dry_Skin_1296x.jpg?v=1737604260",
        "imgDeux": "https://myemollient.com/cdn/shop/files/best-body-butter-dry-skin-jar-closed_1296x.jpg?v=1747158292",
        "descript": "description",
        "choices": {
            [questions[0].answers[1]]: 1,
            [questions[0].answers[2]]: 1,
            [questions[0].answers[3]]: 1,
            [questions[9].answers[4]]: 1,
            [questions[9].answers[5]]: 3
        }
    },
    {
        "name": "Peppermint Body Butter",
        "link": "https://myemollient.com/collections/peppermint-body-butter",
        "imgUn": "https://myemollient.com/cdn/shop/files/Peppermint_body_butter_for_eczema_dry_skin_menopause_and_hot_flashes_1296x.jpg?v=1750775986",
        "imgDeux": "https://myemollient.com/cdn/shop/files/Cooling_Body_Butter_1296x.png?v=1750776262",
        "descript": "description",
        "choices": {
            [questions[1].answers[3]]: 1,
            [questions[1].answers[6]]: 1,
            [questions[2].answers[0]]: 2,
            [questions[1].answers[2]]: 1,
            [questions[4].answers[1]]: 1,
            [questions[5].answers[2]]: 1,
            [questions[8].answers[0]]: 1,
            [questions[9].answers[0]]: 3
        }
    },
    {
        "name": "Jet Lag Set",
        "link": "",
        "imgUn": "",
        "imgDeux": "",
        "descript": "description",
        "choices": {
            [questions[6].answers[0]]: 1
        }
    },
    {
        "name": "Eczema",
        "link": "",
        "imgUn": "",
        "imgDeux": "",
        "descript": "description",
        "choices": {
            [questions[1].answers[0]]: 1,
            [questions[1].answers[1]]: 1
        }
    }
]


function makeForm(){

    st = `<form id="slideshowForm">`; //start string
    
    for (let q = 0; q < questions.length; q++){ //iterate through questions
    
        if (q == 0){
            st+=  `<div class="slideActive" id="q${q}">`;
        }
        else{
            st+=  `<div class="slide" id="q${q}">`;
        }
        st += `<p>${questions[q].question}</p>`; //quesiton
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
                <label for="q${q}a${a}">${questions[q].answers[a]}</label>    <br>`;
        }
            

        st += `</div>   </div>`;
    }

    st+=`   <div id="buttons"></div>
    </form>`;

    document.getElementById("display").innerHTML = st; //insert code into HTML
}


let currentSlide = 0;

function makeButtons(){
    let nextButtonCode = ``;
    if (currentSlide == questions.length-1){ //if currentSlide is last slide
        nextButtonCode = `<button type="submit" id="submitButton">Submit</button>`;
    }
    else{
        nextButtonCode = `<button type="button" id="nextButton" onclick="changeSlide(1)">></button>`;
    }
    let prevButtonCode = ``;
    if (currentSlide == 0){ //if currentSlide is first slide
        prevButtonCode = `disabled`      //disable prevButton
    }
    document.getElementById("buttons").innerHTML =
    `<div class="buttons">
        <button type="button" id="prevButton" onclick="changeSlide(-1)" ${prevButtonCode}><</button>
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

function makeResult(formValues){
    document.getElementById("results").innerHTML = JSON.stringify(formValues);
}

makeForm();
makeButtons();



