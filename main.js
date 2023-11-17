
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
let inputContainer = document.querySelector('.input-container');
let paragraph = document.querySelector('.generatedParagraph');
let btns = document.querySelector('.clear-gen-btns');
let inputs = document.querySelector('.input-word');
let storyContainer = document.querySelector('.story-container');

function StoryInputArea(story){
  //noParagraphBG();
  //paragraph.innerHTML=''; //clear previous paragraph
  if(story === 'doctor office'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="adjective" class="input-word" id="adj1">
      <input type="text" placeholder="verb" class="input-word" id="verb1">
      <input type="text" placeholder="adjective" class="input-word" id="adj2">
      <input type="text" placeholder="noun" class="input-word" id="noun1">
      <input type="text" placeholder="silly word" class="input-word" id="sillyw1">
    </div>
    `;

    word1 = document.querySelector('#adj1');
    word2 = document.querySelector('#verb1');
    word3 = document.querySelector('#adj2');
    word4 = document.querySelector('#noun1');
    word5 = document.querySelector('#sillyw1');


    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generateDoctorOffice();
    ">> GO MAD!</button>
    `;

    
  }else if (story === 'beach day'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below2:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="land name" class="input-word" id="w6">
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
      generateBeachDay();
    ">> GO MAD!</button>
    `;
  }else if (story === 'homework'){
    inputContainer.innerHTML = 
    `<h2>Go Mad! Fill in the blank fields below3:</h2>
    <p class="alertMsg beforeMsg">Please fill in all prompts.</p>
    <div class="inputArea">
      <input type="text" placeholder="adjective" class="input-word" id="adj1">
      <input type="text" placeholder="verb" class="input-word" id="verb1">
      <input type="text" placeholder="adjective" class="input-word" id="adj2">
      <input type="text" placeholder="noun" class="input-word" id="noun1">
      <input type="text" placeholder="silly word" class="input-word" id="sillyw1">
    </div>
    `;

    word1 = document.querySelector('#adj1');
    word2 = document.querySelector('#verb1');
    word3 = document.querySelector('#adj2');
    word4 = document.querySelector('#noun1');
    word5 = document.querySelector('#sillyw1');

    btns.innerHTML =`
    <button class="clear-btn" onclick="
      clearInputs();
    ">CLEAR</button>

    <button class="generate-btn" onclick="
      generateDoctorOffice();
    ">> GO MAD!</button>
    `;
  }
}

function generateDoctorOffice(){
  //if an input is left blank alert user ...
  let alertMsg = document.querySelector('.alertMsg');
  if(word1.value === '' || word2.value === '' || word3.value === '' || word4.value === '' || word5.value === ''){
    alertMsg.classList.remove('beforeMsg');
    alertMsg.classList.add('afterMsg');
    setTimeout(function(){
      alertMsg.classList.remove('afterMsg');
      alertMsg.classList.add('beforeMsg');
    }, 3000);
    return;
  }

  replaceElement();

   paragraph.innerHTML = 
    `
    <h2>DOCTOR OFFICE</h2>
    i dont feel well today. my nose was runny and my boogers were <span class="highlight">${word1.value}</span>. that <i>cant</i> be right, right?
    My mom told me to <span class="highlight">${word2.value}</span> to feel better but that made it worse.
    NOW my booger are <span class="highlight">${word3.value}</span>! Oh man..
    Mom said she's gonna take me to the one and only <span class="highlight">${word4.value}</span>. I'm gonna be brave.
    But if im scared my safe word is <span class="highlight">${word5.value}</span>! wish me luck!
    `;
    giveParagraphBG();
}

function generateBeachDay(){
  //insertElement();
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
    return;
  }

  replaceElement();

  paragraph.innerHTML=
  `
  <h2>MYSTERIOUS PORTAL</h2>
  Once upon a time in the land of (funny name), there lived a (color) creature named (noun). This extraordinary being had a strong liking for (verb ending in -ing) and loved to collect (plural noun). One day, while strolling through the enchanted (noun), (the creature name) stumbled upon a mysterious (adjective) portal. He became (emotion) at the thought of travelling to another dimension! And so it entered as fast as it ate (food name). *<i>(long funny word)</i>*. (creature name) got teleported to (fast food place) and was put to fry (plural food) for (number) years... the end.
  `;
  giveParagraphBG();
}

function generateHomework(){
  //if an input is left blank alert user ...
  let alertMsg = document.querySelector('.alertMsg');
  if(word1.value === '' || word2.value === '' || word3.value === '' || word4.value === '' || word5.value === ''){
    alertMsg.classList.remove('beforeMsg');
    alertMsg.classList.add('afterMsg');
    setTimeout(function(){
      alertMsg.classList.remove('afterMsg');
      alertMsg.classList.add('beforeMsg');
    }, 3000);
    return;
  }

  paragraph.innerHTML=
  `
  <h2>HOME WORK</h2>
  i dont feel well today. my nose was runny and my boogers were <span class="highlight">${word1.value}</span>. that <i>cant</i> be right, right?
  My mom told me to <span class="highlight">${word2.value}</span> to feel better but that made it worse.
  NOW my booger are <span class="highlight">${word3.value}</span>! Oh man..
  Mom said she's gonna take me to the one and only <span class="highlight">${word4.value}</span>. I'm gonna be brave.
  But if im scared my safe word is <span class="highlight">${word5.value}</span>! wish me luck!
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
    ">doctor office</button>

    <button class="story-btn red-btn" onclick="
      StoryInputArea('homework');
      changeInputContainerBG();
    ">what we do in the zoo</button>
  `;
}

function displayMediumStories(){
  storyContainer.innerHTML=
  `
    <button class="story-btn green-btn" onclick="
      StoryInputArea('doctor office');
      changeInputContainerBG();
    ">doctor office</button>

    <button class="story-btn red-btn" onclick="
      StoryInputArea('homework');
      changeInputContainerBG();
    ">what we do in the zoo</button>
  `;
}

function displayLongStories(){
  storyContainer.innerHTML=
  `
  <button class="story-btn blue-btn" onclick="
    StoryInputArea('beach day');
    changeInputContainerBG();
  ">beach day</button>
  `;
}

function displayAllStories(){
  storyContainer.innerHTML=
  `
  <button class="story-btn green-btn" onclick="
    StoryInputArea('doctor office');
    changeInputContainerBG();
  ">doctor office</button>

  <button class="story-btn blue-btn" onclick="
    StoryInputArea('beach day');
    changeInputContainerBG();
  ">beach day</button>

  <button class="story-btn red-btn" onclick="
    StoryInputArea('homework');
    changeInputContainerBG();
  ">what we do in the zoo</button>

  <button class="story-btn purple-btn" onclick="
    StoryInputArea('doctor office');
    changeInputContainerBG();
  ">Pinnaples</button>

  <button class="story-btn orange-btn" onclick="
    StoryInputArea('beach day');
    changeInputContainerBG();
  ">New Pet</button>

  <button class="story-btn yellow-btn" onclick="
    StoryInputArea('homework');
    changeInputContainerBG();
  ">On My Jog</button>

  <button class="story-btn green-btn" onclick="
    StoryInputArea('homework');
    changeInputContainerBG();
  ">My Favorite Food</button>

  <button class="story-btn blue-btn" onclick="
    StoryInputArea('doctor office');
    changeInputContainerBG();
  ">Invisible Man</button>

  <button class="story-btn red-btn" onclick="
    StoryInputArea('beach day');
    changeInputContainerBG();
  ">Bugs Are Cool!</button>

  <button class="story-btn purple-btn" onclick="
    StoryInputArea('homework');
    changeInputContainerBG();
  ">Crazy Hair</button>

  <button class="story-btn orange-btn" onclick="
    StoryInputArea('homework');
    changeInputContainerBG();
  ">On My Jog</button>

  <button class="story-btn yellow-btn" onclick="
    StoryInputArea('homework');
    changeInputContainerBG();
  ">On My Jog</button>
  `;
}


function replaceElement(){
  const element = document.getElementById('input-container');
  element.replaceChildren(paragraph); //replace input area with paragraph
  btns.replaceChildren();
}


