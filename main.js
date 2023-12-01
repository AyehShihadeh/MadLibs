
let word1;
let word2;
let word3;
let word4;
let word5;
let word6;
let word7;
let word8;
let word9;
let word10;
let word11;
let word12;
let word13;
let word14;
let word15;
let inputAlert;
let inputContainer = document.querySelector('.input-container');
let paragraph = document.querySelector('.generatedParagraph');
let btns = document.querySelector('.clear-gen-btns');
let inputs = document.querySelector('.input-word');
let storyContainer = document.querySelector('.story-container');

function StoryInputArea(story){
  if(story === 'doctor office'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="adjective" class="input-word" id="w1">
      <input type="text" placeholder="verb" class="input-word" id="w2">
      <input type="text" placeholder="adjective" class="input-word" id="w3">
      <input type="text" placeholder="noun" class="input-word" id="w4">
      <input type="text" placeholder="silly word" class="input-word" id="w5">
    </div>
    `;

    word1 = document.querySelector('#w1');
    word2 = document.querySelector('#w2');
    word3 = document.querySelector('#w3');
    word4 = document.querySelector('#w4');
    word5 = document.querySelector('#w5');


    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generateDoctorOffice();
    ">> GO MAD!</button>
    `;

    
  }else if (story === 'mystery portal'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="funny name" class="input-word" id="w6">
      <input type="text" placeholder="color" class="input-word" id="w7">
      <input type="text" placeholder="noun" class="input-word" id="w8">
      <input type="text" placeholder="verb ending in -ing" class="input-word" id="w9">
      <input type="text" placeholder="plural noun" class="input-word" id="w10">
      <input type="text" placeholder="noun" class="input-word" id="w11">
      <input type="text" placeholder="creature's name" class="input-word" id="w12">
      <input type="text" placeholder="adj" class="input-word" id="w13">
      <input type="text" placeholder="emotion ending in -ing" class="input-word" id="w14">
      <input type="text" placeholder="food name" class="input-word" id="w15">
      <input type="text" placeholder="long silly word" class="input-word" id="w16">
      <input type="text" placeholder="creature's name" class="input-word" id="w17">
      <input type="text" placeholder="fast food place" class="input-word" id="w18">
      <input type="text" placeholder="food plural" class="input-word" id="w19">
      <input type="text" placeholder="number" class="input-word" id="w20">
    </div>
    `;


    word1 = document.querySelector('#w6');
    word2 = document.querySelector('#w7');
    word3 = document.querySelector('#w8');
    word4 = document.querySelector('#w9');
    word5 = document.querySelector('#w10');
    word6 = document.querySelector('#w11');
    word7 = document.querySelector('#w12');
    word8 = document.querySelector('#w13');
    word9 = document.querySelector('#w14');
    word10 = document.querySelector('#w15');
    word11 = document.querySelector('#w16');
    word12 = document.querySelector('#w17');
    word13 = document.querySelector('#w18');
    word14 = document.querySelector('#w19');
    word15 = document.querySelector('#w20');

    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>
    <button class="generate-btn" onclick="
      generateMysteryPortal();
    ">> GO MAD!</button>
    `;
  }else if (story === 'zoo'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="adjective" class="input-word" id="w21">
      <input type="text" placeholder="adjective" class="input-word" id="w22">
      <input type="text" placeholder="noun" class="input-word" id="w23">
      <input type="text" placeholder="adjective" class="input-word" id="w24">
      <input type="text" placeholder="adjective" class="input-word" id="w25">
      <input type="text" placeholder="animal" class="input-word" id="w26">
      <input type="text" placeholder="adjective" class="input-word" id="w27">
      <input type="text" placeholder="animal" class="input-word" id="w28">
      <input type="text" placeholder="verb" class="input-word" id="w29">
      <input type="text" placeholder="noun word" class="input-word" id="w30">
      <input type="text" placeholder="verb ending in -ing" class="input-word" id="w31">
      <input type="text" placeholder="adjective" class="input-word" id="w32">
      <input type="text" placeholder="adjective" class="input-word" id="w33">
    </div>
    `;

    word1 = document.querySelector('#w21');
    word2 = document.querySelector('#w22');
    word3 = document.querySelector('#w23');
    word4 = document.querySelector('#w24');
    word5 = document.querySelector('#w25');
    word6 = document.querySelector('#w26');
    word7 = document.querySelector('#w27');
    word8 = document.querySelector('#w28');
    word9 = document.querySelector('#w29');
    word10 = document.querySelector('#w30');
    word11 = document.querySelector('#w31');
    word12 = document.querySelector('#w32');
    word13 = document.querySelector('#w33');

    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generateZoo();
    ">> GO MAD!</button>
    `;
  }else if (story === 'pinapples'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="body part" class="input-word" id="w34">
      <input type="text" placeholder="verb ending in ing" class="input-word" id="w35">
      <input type="text" placeholder="animal" class="input-word" id="w36">
      <input type="text" placeholder="number" class="input-word" id="w37">
      <input type="text" placeholder="adjective" class="input-word" id="w38">
    </div>
    `;
 
    word1 = document.querySelector('#w34');
    word2 = document.querySelector('#w35');
    word3 = document.querySelector('#w36');
    word4 = document.querySelector('#w37');
    word5 = document.querySelector('#w38');

    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generatePinapples();
    ">> GO MAD!</button>
    `;
  }else if (story === 'pets'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="animal" class="input-word" id="w39">
      <input type="text" placeholder="adjective" class="input-word" id="w40">
      <input type="text" placeholder="celebrity" class="input-word" id="w41">
      <input type="text" placeholder="sport/game" class="input-word" id="w42">
      <input type="text" placeholder="color" class="input-word" id="w43">
      <input type="text" placeholder="past tense verb" class="input-word" id="w44">
      <input type="text" placeholder="emotion" class="input-word" id="w45">
      <input type="text" placeholder="number" class="input-word" id="w46">
      <input type="text" placeholder="food" class="input-word" id="w47">
      <input type="text" placeholder="adjective" class="input-word" id="w48">
    </div>
    `;

    word1 = document.querySelector('#w39');
    word2 = document.querySelector('#w40');
    word3 = document.querySelector('#w41');
    word4 = document.querySelector('#w42');
    word5 = document.querySelector('#w43');
    word1 = document.querySelector('#w44');
    word2 = document.querySelector('#w45');
    word3 = document.querySelector('#w46');
    word4 = document.querySelector('#w47');
    word5 = document.querySelector('#w48');

    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generatePets();
    ">> GO MAD!</button>
    `;
  }else if (story === 'jog'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="adjective" class="input-word" id="w49">
      <input type="text" placeholder="weather ending in ing" class="input-word" id="w50">
      <input type="text" placeholder="adjective" class="input-word" id="w51">
      <input type="text" placeholder="animals" class="input-word" id="w52">
      <input type="text" placeholder="adjective" class="input-word" id="w53">
      <input type="text" placeholder="number" class="input-word" id="w54">
      <input type="text" placeholder="verb ending in ing" class="input-word" id="w55">
      <input type="text" placeholder="body part" class="input-word" id="w56">
      <input type="text" placeholder="adjective" class="input-word" id="w57">
    </div>
    `;


    word1 = document.querySelector('#w49');
    word2 = document.querySelector('#w50');
    word3 = document.querySelector('#w51');
    word4 = document.querySelector('#w52');
    word5 = document.querySelector('#w53');
    word1 = document.querySelector('#w54');
    word2 = document.querySelector('#w55');
    word3 = document.querySelector('#w56');
    word4 = document.querySelector('#w57');


    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generateJog();
    ">> GO MAD!</button>
    `;
  }else if (story === 'food'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="silly name" class="input-word" id="w58">
      <input type="text" placeholder="number" class="input-word" id="w59">
      <input type="text" placeholder="verb ending in ing" class="input-word" id="w60">
      <input type="text" placeholder="adjective" class="input-word" id="w61">
      <input type="text" placeholder="noun" class="input-word" id="w62">
      <input type="text" placeholder="verb" class="input-word" id="w63">
      <input type="text" placeholder="adjective" class="input-word" id="w64">
      <input type="text" placeholder="adverb" class="input-word" id="w65">
      <input type="text" placeholder="adjective" class="input-word" id="w66">
      <input type="text" placeholder="plural noun" class="input-word" id="w67">
    </div>
    `;


    word1 = document.querySelector('#w58');
    word2 = document.querySelector('#w59');
    word3 = document.querySelector('#w60');
    word4 = document.querySelector('#w61');
    word5 = document.querySelector('#w62');
    word1 = document.querySelector('#w63');
    word2 = document.querySelector('#w64');
    word3 = document.querySelector('#w65');
    word4 = document.querySelector('#w66');
    word5 = document.querySelector('#w67');

    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generateFood();
    ">> GO MAD!</button>
    `;
  }else if (story === 'super power'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="power" class="input-word" id="w68">
      <input type="text" placeholder="verb" class="input-word" id="w69">
      <input type="text" placeholder="plural noun" class="input-word" id="w70">
      <input type="text" placeholder="adjective" class="input-word" id="w71">
      <input type="text" placeholder="verb" class="input-word" id="w72">
      <input type="text" placeholder="funny name" class="input-word" id="w73">
    </div>
    `;

    word1 = document.querySelector('#w68');
    word2 = document.querySelector('#w69');
    word3 = document.querySelector('#w70');
    word4 = document.querySelector('#w71');
    word5 = document.querySelector('#w72');
    word5 = document.querySelector('#w73');

    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generateSuperPower();
    ">> GO MAD!</button>
    `;
  }else if (story === 'bugs'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="noun" class="input-word" id="w74">
      <input type="text" placeholder="adjective" class="input-word" id="w75">
      <input type="text" placeholder="bug" class="input-word" id="w76">
      <input type="text" placeholder="verb" class="input-word" id="w77">
      <input type="text" placeholder="adjective" class="input-word" id="w78">
      <input type="text" placeholder="bug" class="input-word" id="w79">
      <input type="text" placeholder="body part" class="input-word" id="w80">
      <input type="text" placeholder="name" class="input-word" id="w81">
      <input type="text" placeholder="name" class="input-word" id="w82">
      <input type="text" placeholder="bug plural" class="input-word" id="w83">
      <input type="text" placeholder="food" class="input-word" id="w84">
      <input type="text" placeholder="adj" class="input-word" id="w85">
    </div>
    `;
 
    word1 = document.querySelector('#w74');
    word2 = document.querySelector('#w75');
    word3 = document.querySelector('#w76');
    word4 = document.querySelector('#w77');
    word5 = document.querySelector('#w78');
    word1 = document.querySelector('#w79');
    word2 = document.querySelector('#w80');
    word3 = document.querySelector('#w81');
    word4 = document.querySelector('#w82');
    word5 = document.querySelector('#w83');
    word1 = document.querySelector('#w84');
    word2 = document.querySelector('#w85');

    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generateBugs();
    ">> GO MAD!</button>
    `;
  }else if (story === 'crazy hair'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="name" class="input-word" id="w86">
      <input type="text" placeholder="vegetable" class="input-word" id="w87">
      <input type="text" placeholder="adj" class="input-word" id="w88">
      <input type="text" placeholder="verb ending in ing" class="input-word" id="w89">
      <input type="text" placeholder="color" class="input-word" id="w90">
      <input type="text" placeholder="verb" class="input-word" id="w91">
      <input type="text" placeholder="number" class="input-word" id="w92">
    </div>
    `;

    word1 = document.querySelector('#w86');
    word2 = document.querySelector('#w87');
    word3 = document.querySelector('#w88');
    word4 = document.querySelector('#w89');
    word5 = document.querySelector('#w90');
    word6 = document.querySelector('#w91');
    word7 = document.querySelector('#w92');

    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generateCrazyHair();
    ">> GO MAD!</button>
    `;
  }else if (story === 'game duo'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="day of week" class="input-word" id="w93">
      <input type="text" placeholder="food" class="input-word" id="w94">
      <input type="text" placeholder="verb" class="input-word" id="w95">
      <input type="text" placeholder="video game" class="input-word" id="w96">
      <input type="text" placeholder="funny name" class="input-word" id="w97">
      <input type="text" placeholder="adjective" class="input-word" id="w98">
      <input type="text" placeholder="verb ending in ing" class="input-word" id="w99">
    </div>
    `;


    word1 = document.querySelector('#w93');
    word2 = document.querySelector('#w94');
    word3 = document.querySelector('#w95');
    word4 = document.querySelector('#w96');
    word5 = document.querySelector('#w97');
    word6 = document.querySelector('#w98');
    word7 = document.querySelector('#w99');

    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generateGameDuos();
    ">> GO MAD!</button>
    `;
  }else if (story === 'idk'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="adjective" class="input-word" id="w21">
      <input type="text" placeholder="verb" class="input-word" id="w22">
      <input type="text" placeholder="adjective" class="input-word" id="w23">
      <input type="text" placeholder="noun" class="input-word" id="w24">
      <input type="text" placeholder="silly word" class="input-word" id="w25">
    </div>
    `;

    word1 = document.querySelector('#w21');
    word2 = document.querySelector('#w22');
    word3 = document.querySelector('#w23');
    word4 = document.querySelector('#w24');
    word5 = document.querySelector('#w25');

    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generateidk();
    ">> GO MAD!</button>
    `;
  }
}

function generateDoctorOffice(){

  alertShort();
  if(inputAlert === true){
    return;
  }

  replaceElement();

   paragraph.innerHTML = 
    `
    <h2>DOCTOR OFFICE</h2>
    <p>I dont feel well today. my nose was runny and my boogers were <span class="highlight">${word1.value}</span>. that <i>cant</i> be right, right?
    My mom told me to <span class="highlight">${word2.value}</span> to feel better but that made it worse.
    NOW my booger are <span class="highlight">${word3.value}</span>! Oh man..
    Mom said she's gonna take me to the one and only <span class="highlight">${word4.value}</span>. I'm gonna be brave.
    But if im scared my safe word is <span class="highlight">${word5.value}</span>! Wish me luck!</p>
    `;
    giveParagraphBG();
}

function generateMysteryPortal(){
  alertLong();
  if(inputAlert === true){
    return;
  }
  
  replaceElement();

  paragraph.innerHTML=
  `
  <h2>MYSTERIOUS PORTAL</h2>
  <p>Once upon a time in the land of <span class="highlight">${word1.value}</span>, there lived a <span class="highlight">${word2.value}</span> creature named <span class="highlight">${word3.value}</span>. This extraordinary being had a strong liking for <span class="highlight">${word4.value}</span> and loved to collect <span class="highlight">${word5.value}</span>. One day, while strolling through the enchanted <span class="highlight">${word6.value}</span>, <span class="highlight">${word7.value}</span> stumbled upon a mysterious <span class="highlight">${word8.value}</span> portal. He became <span class="highlight">${word9.value}</span> at the thought of travelling to another dimension! And so it entered as fast as it ate <span class="highlight">${word10.value}</span>. *<i><span class="highlight">${word11.value}</span></i>*. <span class="highlight">${word12.value}</span> got teleported to <span class="highlight">${word13.value}</span> and was put to fry <span class="highlight">${word14.value}</span> for <span class="highlight">${word15.value}</span> years... the end.</p>
  `;
  giveParagraphBG();
}

function generateZoo(){
  alertShort();
  if(inputAlert === true){
    return;
  }

  replaceElement();

   paragraph.innerHTML = 
    `
    <h2>THE ZOO</h2>
    <p>Once upon a(n) <span class="highlight">${word1.value}</span> morning, I decided to visit the <span class="highlight">${word2.value}</span> zoo with my <span class="highlight">${word3.value}</span>. As soon as we arrived, we were greeted by a(n) <span class="highlight">${word4.value}</span> zookeeper who handed us a map and pointed us toward the most <span class="highlight">${word5.value}</span> exhibits.

    Our first stop was the <span class="highlight">${word6.value}</span> exhibit, where we saw a(n) <span class="highlight">${word7.value}</span> <span class="highlight">${word8.value}</span> doing a(n) <span class="highlight">${word9.value}</span> trick. My <span class="highlight">${word10.value}</span> couldn't stop <span class="highlight">${word11.value}</span> at the incredible sight. We spent hours wandering through the <span class="highlight">${word12.value}</span> paths, marveling at the <span class="highlight">${word13.value}</span> animals from around the world.</p>
    `;
    giveParagraphBG();
}

function generatePinapples(){
  alertShort();
  if(inputAlert === true){
    return;
  }

  replaceElement();

   paragraph.innerHTML = 
    `
    <h2>PINNAPLES</h2>
    <p>When I eat a pinapple my <span class="highlight">${word1.value}</span> starts to tingle. I've been <span class="highlight">${word2.value}</span> with my pet <span class="highlight">${word3.value}</span> for <span class="highlight">${word4.value}</span> days now to get rid of the tingling sensation. Maybe it was because the pinapple was <span class="highlight">${word5.value}</span>? Never again. </p>
    `;
    giveParagraphBG();
}

function generatePets(){
  alertShort();
  if(inputAlert === true){
    return;
  }

  replaceElement();

   paragraph.innerHTML = 
    `
    <h2>NEW PET</h2>
    <p>My pet <span class="highlight">${word1.value}</span> is so <span class="highlight">${word2.value}</span> and that's what makes him special. Daddy got him off of <span class="highlight">${word3.value}</span> after he beat him in a game of <span class="highlight">${word4.value}</span>. When he first looked at me with their <span class="highlight">${word5.value}</span> eyes I almost <span class="highlight">${word6.value}</span> out of <span class="highlight">${word7.value}</span>. He even has <span class="highlight">${word8.value}</span> legs!! I'm going to feed him some leftover <span class="highlight">${word9.value}</span> tonight bc that's his favorite. My <span class="highlight">${word10.value}</span> pet is allll mine.</p>
    `;
    giveParagraphBG();
}

function generateJog(){
  alertShort();
  if(inputAlert === true){
    return;
  }

  replaceElement();

   paragraph.innerHTML = 
    `
    <h2>ON A JOG</h2>
    <p>While tying my <span class="highlight">${word1.value}</span> sneakers, I feel a surge of excitement for this run. I peeked a look outside and noticed that it was <span class="highlight">${word2.value}</span>. oh well. The moment I hit the pavement, I realized my route was taking me through a(n) <span class="highlight">${word3.value}</span> obstacle course, from acrobatic <span class="highlight">${word4.value}</span> to rouge skateboarders riding <span class="highlight">${word5.value}</span> boards. sick. I completed the course within  <span class="highlight">${word6.value}</span> minutes. With sweat <span class="highlight">${word7.value}</span> down my <span class="highlight">${word8.value}</span>, I finally returned home with a newfound appreciation for the unpredictability of a truly <span class="highlight">${word9.value}</span> jog.</p>
    `;
   giveParagraphBG();
}

function generateFood(){
  alertShort();
  if(inputAlert === true){
    return;
  }

  replaceElement();

   paragraph.innerHTML = 
    `
    <h2>MAKING FOOD</h2>
    <p>My nama is <span class="highlight">${word1.value}</span> and im making it my goal to feed <span class="highlight">${word2.value}</span> people this week! I start by <span class="highlight">${word3.value}</span> some vegetables in order to use them for the <span class="highlight">${word4.value}</span> soup. Then I take out my marinated <span class="highlight">${word5.value}</span> and place it on a baking tray. I just have to <span class="highlight">${word6.value}</span> it in the oven for 45 minutues till it looks <span class="highlight">${word7.value}</span>. <span class="highlight">${word8.value}</span> I add my veggies and stir till theyre cooked to perfection. ALl done. I then portioned the food and gave away to the most <span class="highlight">${word9.value}</span> people i could find. I guess they liked my food so much they gave me <span class="highlight">${word10.value}</span> as an appreciation gift!</p>
    `;
    giveParagraphBG();
}

function generateSuperPower(){
  alertShort();
  if(inputAlert === true){
    return;
  }

  replaceElement();

   paragraph.innerHTML = 
    `
    <h2>SUPER POWERr</h2>
    <p>I’m a human so I don’t have superpowers, but if I did mine would be the ability to <span class="highlight">${word1.value}</span>. I would use this power to <span class="highlight">${word2.value}</span> <span class="highlight">${word3.value}</span>. Just imagine how fun that would be! My superhero cape would be <span class="highlight">${word4.value}</span> and it’ll <span class="highlight">${word5.value}</span> in the wind. And I can’t be a hero without a nickname. I can imagine the people calling me <span class="highlight">${word6.value}</span>.</p>
    `;
    giveParagraphBG();
}

function generateBugs(){
  alertShort();
  if(inputAlert === true){
    return;
  }

  replaceElement();

   paragraph.innerHTML = 
    `
    <h2>BUGS ARE COOL</h2>
    <p>It was a warm day outside, so I decided to forage for some cute bugs! I put on my <span class="highlight">${word1.value}</span> covered rubber boots and head to the forest nearby. I look at the floor and flip over the first rock I saw. Under I find a <span class="highlight">${word1.value}</span> <span class="highlight">${word1.value}</span>. I slowly <span class="highlight">${word1.value}</span> down to pick up the bug with my <span class="highlight">${word1.value}</span> hands. It crawls onto me without hesitation. I think it loves me. Next I walk over to a little pond. I see some squirming bugs in there. I cup my hands and scoop up some water. With a closer look, I see a tiny <span class="highlight">${word1.value}</span>. This one is missing a <span class="highlight">${word1.value}</span>. I think I’ll name him <span class="highlight">${word1.value}</span>. Lastly, I head to a very tall tree and take out my magnifying glass which I got from my old friend <span class="highlight">${word1.value}</span>. I hold it up to my eye and see a group of <span class="highlight">${word1.value}</span> carrying <span class="highlight">${word1.value}</span> to their home in the tree! What a beautiful sight. Time for me to go home. It was a <span class="highlight">${word1.value}</span> adventure, and I will do it again tomorrow. </p>
    `;
    giveParagraphBG();
}

function generateCrazyHair(){
  alertShort();
  if(inputAlert === true){
    return;
  }

  replaceElement();

   paragraph.innerHTML = 
    `
    <h2CRAZY HAIR</h2>
    <p>Today is crazy hair day at school, and I have to win my rival named <span class="highlight">${word1.value}</span>. She said my  <span class="highlight">${word2.value}</span> looks  <span class="highlight">${word3.value}</span> at yesterday’s lunch. I start  <span class="highlight">${word4.value}</span> my hair to get it messy. Then I pick up my  <span class="highlight">${word5.value}</span> Hairspray and  <span class="highlight">${word6.value}</span> it all over my head. Perfect. I walked into the classroom and see that the voting is about to begin. Furthermore, my rival  <span class="highlight">${word7.value}</span> is absent! And I won with  <span class="highlight">${word1.value}</span> votes!</p>
    `;
    giveParagraphBG();
}

function generateGameDuos(){
  alertShort();
  if(inputAlert === true){
    return;
  }

  replaceElement();

   paragraph.innerHTML = 
    `
    <h2>GAME DUO</h2>
     <p>It's a <span class="highlight">${word1.value}</span> afternoon, you finished work/school, and ate some leftover <span class="highlight">${word2.value}</span>. What better to do than <span class="highlight">${word3.value}</span> some games of <span class="highlight">${word4.value}</span> with your duo? Because after all, being alone is, well, lonely. And that group of friends youve had since ms.<span class="highlight">${word5.value}</span>'s class is too rowdy. Plus, your duo is chill and <span class="highlight">${word6.value}</span>. The BEST combo ever. Has the same humor as you and will make the worst of situations by <span class="highlight">${word7.value}</span> with you at the end of the night <3</p>  
    `;
    giveParagraphBG();
}



function changeInputContainerBG(){
  inputContainer = document.querySelector('.input-container');
  inputContainer.classList.remove('input-container-bg1');
  inputContainer.classList.add('input-container-bg2');
}


function giveParagraphBG(){
  paragraph.classList.remove('generatedParagraph-bg1');
  paragraph.classList.add('generatedParagraph-bg2');
}

function noParagraphBG(){
  paragraph.classList.remove('generatedParagraph-bg2');
  paragraph.classList.add('generatedParagraph-bg1');
}

const instrModal = document.querySelector('#instr-modal');
const openModal = document.querySelector('.open-btn');
const closeModal = document.querySelector('.x-btn');

openModal.addEventListener('click', () => {
  instrModal.showModal();
});

closeModal.addEventListener('click', () => {
  instrModal.close();
});

function clearInputs(){
  word1.value='';
  word2.value='';
  word3.value='';
  word4.value='';
  word5.value='';
  word6.value='';
  word7.value='';
  word8.value='';
  word9.value='';
  word10.value='';
  word11.value='';
  word12.value='';
  word13.value='';
  word14.value='';
  word15.value='';

}

function displayShortStories(){
  storyContainer.innerHTML=
  `
    <button class="story-btn green-btn" onclick="
      StoryInputArea('doctor office');
      changeInputContainerBG();
    ">Doctor Office</button>

    <button class="story-btn purple-btn" onclick="
      StoryInputArea('pinapples');
      changeInputContainerBG();
    ">Pinnaples</button>

    <button class="story-btn blue-btn" onclick="
      StoryInputArea('super power');
      changeInputContainerBG();
    ">Super Power</button>

    <button class="story-btn orange-btn" onclick="
      StoryInputArea('game duo');
      changeInputContainerBG();
    ">Game Duo</button>
  `;
}

function displayMediumStories(){
  storyContainer.innerHTML=
  `
  <button class="story-btn orange-btn" onclick="
    StoryInputArea('pets');
    changeInputContainerBG();
  ">New Pet</button>

  <button class="story-btn yellow-btn" onclick="
    StoryInputArea('jog');
    changeInputContainerBG();
  ">On A Jog</button>

  <button class="story-btn green-btn" onclick="
    StoryInputArea('food');
    changeInputContainerBG();
  ">Making Food</button>

  <button class="story-btn purple-btn" onclick="
    StoryInputArea('crazy hair');
    changeInputContainerBG();
  ">Crazy Hair</button>
  `;
}

function displayLongStories(){
  storyContainer.innerHTML=
  `
  <button class="story-btn blue-btn" onclick="
    StoryInputArea('mystery portal');
    changeInputContainerBG();
  ">Mystery Portal</button>

  <button class="story-btn red-btn" onclick="
    StoryInputArea('zoo');
    changeInputContainerBG();
  ">What We Do In The Zoo</button>

  <button class="story-btn red-btn" onclick="
    StoryInputArea('bugs');
    changeInputContainerBG();
  ">Bugs Are Cool!</button>
  `;
}

function displayAllStories(){
  storyContainer.innerHTML=
  `
  <button class="story-btn green-btn" onclick="
  StoryInputArea('doctor office');
  changeInputContainerBG();
">Doctor Office</button>

<button class="story-btn blue-btn" onclick="
  StoryInputArea('mystery portal');
  changeInputContainerBG();
">Mystery Portal</button>

<button class="story-btn red-btn" onclick="
  StoryInputArea('zoo');
  changeInputContainerBG();
">What We Do In The Zoo</button>

<button class="story-btn purple-btn" onclick="
  StoryInputArea('pinapples');
  changeInputContainerBG();
">Pinnaples</button>

<button class="story-btn orange-btn" onclick="
  StoryInputArea('pets');
  changeInputContainerBG();
">New Pet</button>

<button class="story-btn yellow-btn" onclick="
  StoryInputArea('jog');
  changeInputContainerBG();
">On A Jog</button>

<button class="story-btn green-btn" onclick="
  StoryInputArea('food');
  changeInputContainerBG();
">My Favorite Food</button>

<button class="story-btn blue-btn" onclick="
  StoryInputArea('super power');
  changeInputContainerBG();
">Super Power</button>

<button class="story-btn red-btn" onclick="
  StoryInputArea('bugs');
  changeInputContainerBG();
">Bugs Are Cool!</button>

<button class="story-btn purple-btn" onclick="
  StoryInputArea('crazy hair');
  changeInputContainerBG();
">Crazy Hair</button>

<button class="story-btn orange-btn" onclick="
  StoryInputArea('game duo');
  changeInputContainerBG();
">Game Duo</button>

  `;
}


function replaceElement(){
  const element = document.getElementById('input-container');
  element.replaceChildren(paragraph); //replace input area with paragraph
  btns.replaceChildren();
}

function alertShort(){
    //if an input is left blank alert user ...
    let alertMsg = document.querySelector('.alertMsg');
    if(word1.value === '' || word2.value === '' || word3.value === '' || word4.value === '' || word5.value === ''){
      alertMsg.classList.remove('beforeMsg');
      alertMsg.classList.add('afterMsg');
      setTimeout(function(){
        alertMsg.classList.remove('afterMsg');
        alertMsg.classList.add('beforeMsg');
      }, 3000);
       inputAlert=true;
    }else{
      inputAlert=false;
    }
    
}

function alertMedium(){
  //if an input is left blank alert user ...
  let alertMsg = document.querySelector('.alertMsg');
  if(word1.value === '' || word2.value === '' || word3.value === '' || word4.value === '' || word5.value === ''|| word6.value === '' || word7.value === '' || word8.value === '' || word9.value === '' || word10.value === ''){
    alertMsg.classList.remove('beforeMsg');
    alertMsg.classList.add('afterMsg');
    setTimeout(function(){
      alertMsg.classList.remove('afterMsg');
      alertMsg.classList.add('beforeMsg');
    }, 3000);
     inputAlert=true;
  }else{
    inputAlert=false;
  }
}

function alertLong(){
  //if an input is left blank alert user ...
  let alertMsg = document.querySelector('.alertMsg');
  if(word1.value === '' || word2.value === '' || word3.value === '' || word4.value === '' || word5.value === '' ||
    word6.value === '' || word7.value === '' || word8.value === '' || word9.value === '' || word10.value === '' ||
    word11.value === '' || word12.value === '' || word13.value === '' || word14.value === '' || word15.value === ''){
    alertMsg.classList.remove('beforeMsg');
    alertMsg.classList.add('afterMsg');
    setTimeout(function(){
      alertMsg.classList.remove('afterMsg');
      alertMsg.classList.add('beforeMsg');
    }, 3000);
    inputAlert=true;
  }else{
    inputAlert=false;
  }
}


