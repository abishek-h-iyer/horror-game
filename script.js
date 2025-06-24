const storyText = document.getElementById("story");
const choicesDiv = document.getElementById("choices");
const startBtn = document.getElementById("startBtn");
const bgm = document.getElementById("bgm");

const stories = {
  start: {
    text: "You wake up in a dark room. The only sound is your own breathing.\nSuddenly, you hear a knock behind you...",
    choices: [
      { text: "Turn around", next: "turn" },
      { text: "Stay still", next: "still" }
    ]
  },
  turn: {
    text: "You turn slowly... nothing. But when you turn back, the room is different.\nThe walls are bleeding.",
    choices: [
      { text: "Run to the door", next: "door" },
      { text: "Touch the wall", next: "wall" }
    ]
  },
  still: {
    text: "You stay frozen. The knocking stops. Then the whispering begins.",
    choices: [
      { text: "Whisper back", next: "whisper" },
      { text: "Cover your ears", next: "ears" }
    ]
  },
  door: {
    text: "The door slams shut as you reach it. You're not alone anymore...",
    choices: []
  },
  wall: {
    text: "The wall pulses like a heartbeat. A hand reaches out and grabs yours.",
    choices: []
  },
  whisper: {
    text: "You whisper: 'Who’s there?' The voice responds: 'You already know.'",
    choices: []
  },
  ears: {
    text: "You cover your ears. Silence. Until a cold breath touches your neck.",
    choices: []
  }
};

function showStory(key) {
  const node = stories[key];
  storyText.textContent = node.text;
  choicesDiv.innerHTML = "";

  node.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => showStory(choice.next);
    choicesDiv.appendChild(btn);
  });
}

startBtn.onclick = () => {
  bgm.play();
  startBtn.style.display = "none";
  showStory("start");
};
