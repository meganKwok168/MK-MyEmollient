//question modes
let all_that_apply = 0;
let choose_one = 1;

const questions = [
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

const products = [
    {
        "name": "Lemon + Sage Body Butter ",
        "link": "https://myemollient.com/collections/lemon-sage",
        "imgUn": "https://myemollient.com/cdn/shop/files/Lemon_Sage_Body_Butter_for_Dry_Skin_and_Ec_1296x.jpg?v=1728704501",
        "imgDeux": "https://myemollient.com/cdn/shop/files/lemon_and_sage_body_butter_1296x.jpg?v=1728519251",
        "descript": "Infused with essential oils of lemon and sage, this butter not only pampers your skin but also envelops you in a rich, uplifting fragrance, providing a comforting experience with every use.",
        "choices": {
            [questions[1].answers[3]]: 1,
            [questions[1].answers[5]]: 1,
            [questions[2].answers[1]]: 1,
            [questions[3].answers[0]]: 1,
            [questions[4].answers[2]]: 3

        }
    },

    {
        "name": "Lavender Body Butter",
        "link": "https://myemollient.com/collections/lavender-body-butter",
        "imgUn": "https://myemollient.com/cdn/shop/files/handmade-lavender-body-butter_2700x.jpg?v=1747099010",
        "imgDeux": "https://myemollient.com/cdn/shop/products/my-emollient-dry-skin-solution_2700x.jpg?v=1747099010",
        "descript": "Experience the best body butter for dry, sensitive, and eczema-prone skin.",
        "choices": {
            [questions[2].answers[0]]: 1,
            [questions[4].answers[1]]: 3
        }
    },
    {
        "name": "Almond + Vanilla Body Butter",
        "link": "https://myemollient.com/collections/almond-vanilla-body-butter",
        "imgUn": "https://myemollient.com/cdn/shop/files/almond-vanilla-body-butter-orgnanic-moisturizer_1296x.jpg?v=1747415007",
        "imgDeux": "https://myemollient.com/cdn/shop/files/almond-vanilla-body-butter-jar-mango-butter-almonds_2700x.jpg?v=1755053852",
        "descript": "Experience the ultimate in moisture with our handcrafted Almond + Vanilla Whipped Body Butter—a rich, non-greasy formula made with 7 skin-loving ingredients. ",
        "choices": {
            [questions[1].answers[2]]: 1,
            [questions[4].answers[3]]: 3
        }
    },
    {
        "name": "Body Butter for Sensitive Skin",
        "link": "https://myemollient.com/collections/body-butter-for-sensitive-skin",
        "imgUn": "https://myemollient.com/cdn/shop/files/body_butter_for_sensitive_skin_and_eczema_1296x.jpg?v=1729980179",
        "imgDeux": "https://myemollient.com/cdn/shop/files/sensitive-skin-body-butter-with-kokum-and-aloe._2700x.jpg?v=1755053048",
        "descript": "This lightly scented body butter is crafted for those with sensitive skin who need a little extra care—including those managing dry patches or prone to eczema.",
        "choices": {
            [questions[0].answers[1]]: 2,
            [questions[0].answers[2]]: 1,
            [questions[0].answers[3]]: 1,
            [questions[1].answers[0]]: 1,
            [questions[1].answers[9]]: 1,
            [questions[4].answers[3]]: 1,
            [questions[4].answers[4]]: 1
        }
    },
    {
        "name": "Unscented Body Butter",
        "link": "https://myemollient.com/collections/unscented",
        "imgUn": "https://myemollient.com/cdn/shop/files/Unscented_Body_Butter_for_Winter_Dry_Skin_1296x.jpg?v=1737604260",
        "imgDeux": "https://myemollient.com/cdn/shop/files/best-body-butter-dry-skin-jar-closed_1296x.jpg?v=1747158292",
        "descript": "No Fragrance.  No Fluff. Just powerful hydration for even the most sensitive skin.",
        "choices": {
            [questions[0].answers[1]]: 1,
            [questions[0].answers[2]]: 1,
            [questions[0].answers[3]]: 1,
            [questions[4].answers[4]]: 1,
            [questions[4].answers[5]]: 3
        }
    },
    {
        "name": "Peppermint Body Butter",
        "link": "https://myemollient.com/collections/peppermint-body-butter",
        "imgUn": "https://myemollient.com/cdn/shop/files/Peppermint_body_butter_for_eczema_dry_skin_menopause_and_hot_flashes_1296x.jpg?v=1750775986",
        "imgDeux": "https://myemollient.com/cdn/shop/files/peppermint-butter-post-workout-recovery_1296x.jpg?v=1755051005",
        "descript": "Crafted for dry, menopausal, and sensitive skin (including skin that's easily irritated or eczema-prone), the peppermint-infused formula delivers a crisp, cooling sensation while locking in long-lasting moisture.",
        "choices": {
            [questions[1].answers[3]]: 1,
            [questions[1].answers[6]]: 1,
            [questions[1].answers[7]]: 2,
            [questions[1].answers[8]]: 1,
            [questions[2].answers[1]]: 1,
            [questions[3].answers[0]]: 1,
            [questions[4].answers[0]]: 3
        }
    },
    {
        "name": "Jet Lag Set",
        "link": "",
        "imgUn": "",
        "imgDeux": "",
        "descript": "description",
        "choices": {
            [questions[3].answers[2]]: 3
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
        st += `<p class="question-text">${questions[q].question}</p>`; //quesiton
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
            

        st += `</div>   </div>`;
    }

    st+=`   <div id="buttons" ></div>
    </form>`;

    document.getElementById("display").innerHTML = st; //insert code into HTML
}


let currentSlide = 0;

function makeButtons(){
    let nextButtonCode = ``;
    if (currentSlide == questions.length-1){ //if currentSlide is last slide
        nextButtonCode = `<button type="submit" class="prevNextButtons" id="submitButton">Submit</button>`;
    }
    else{
        nextButtonCode = `<button type="button" class="prevNextButtons" id="nextButton" onclick="changeSlide(1)">Next</button>`;
    }
    let prevButtonCode = ``;
    if (currentSlide == 0){ //if currentSlide is first slide
        prevButtonCode = `disabled="disabled"`      //disable prevButton
    }
    document.getElementById("buttons").innerHTML =
    `<div class="buttons">
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

function makeResult(formValues){

    let butter = null;
    let highestScore = 0;

    //answer comparisons
    for (let product of products){  //iterate through each product
        let score = 0;
        for (let formValue of formValues){   //iterate through formValue
        if (Object.keys(product.choices).includes(formValue.value)) { //look at product choices
            score++;
        }
        }
        if (score > highestScore){ //score comparison
            highestScore = score;
            butter = product;
        }
    }

    //make the result
    if (butter != null){
        let index = products.indexOf(butter);

        let st=``; //initlialize string

        st+=
        `<div class="cell-container">
            <div class="cell">
                <div class="imgs">
                    <a href=${products[index].link}>
                        <img class="un" src=${products[index].imgUn} alt="">
                        <img class="deux" src=${products[index].imgDeux} alt="">
                        <a href=${products[index].link} class="overlay-btn">SHOP CLEAN</a>
                    </a>
                </div>
            </div>
            <div class="descriptCell">
                <a class="name" href=${products[index].link}>${products[index].name}</a>
                <br>
                <p class="descript">${products[index].descript}</p>
            </div>
        </div>`;

        document.getElementById("display").innerHTML = st;
    }

}

makeForm();
makeButtons();



