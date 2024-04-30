function makeBigger() {
  document.getElementById('textInput').style.fontSize = "24pt";
}

function makeBold() {
  const textInput = document.getElementById('textInput');
  textInput.style.fontWeight = textInput.style.fontWeight === 'bold' ? 'normal' : 'bold';
}

function makeItalic() {
  const textInput = document.getElementById('textInput');
  textInput.style.fontStyle = textInput.style.fontStyle === 'italic' ? 'normal' : 'italic';
}

function makeUnderline() {
  const textInput = document.getElementById('textInput');
  textInput.style.textDecoration = textInput.style.textDecoration === 'underline' ? 'none' : 'underline';
}

function makeClear() {
  const textInput = document.getElementById('textInput');
  textInput.style.fontWeight = 'normal';
  textInput.style.fontStyle = 'normal';
  textInput.style.textDecoration = 'none';
  textInput.style.color = 'black';
  textInput.style.fontSize = '16px';
}

function styleChange() {
  const textInput = document.getElementById('textInput');
  if (document.getElementById('fancyShmancy').checked) {
      alert("Applying fancy style!");
      textInput.style.fontWeight = "bold";
      textInput.style.color = "blue";
      textInput.style.textDecoration = "underline";
  } else if (document.getElementById('boringBetty').checked) {
      alert("Removing fancy style.");
      textInput.style.fontWeight = "normal";
      textInput.style.color = "black";
      textInput.style.textDecoration = "none";
  }
}

function moo() {
  let textInput = document.getElementById('textInput');
  let text = textInput.value;
  let sentences = text.split(".");
  for (let i = 0; i < sentences.length; i++) {
      if (sentences[i].trim().length > 0) {
          sentences[i] = sentences[i].trim() + "-Moo";
      }
  }
  textInput.value = sentences.join(". ").trim();
}
