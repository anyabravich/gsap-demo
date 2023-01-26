function splitWordToSpans(word) {
  let result = "";
  const chars = word.split("");
  const totalChars = chars.length;
  for (let k = 0; k < totalChars; k++) {
    let char = chars[k];
    char = char === "↑" ? "&shy;" : char;
    result += '<span class="letter">' + char + "</span>";
  }
  return result;
}

function createWordPart(wordPart, createLetters = false) {
  if (wordPart === "") {
    return "";
  }
  if (wordPart === "→") {
    return "&nbsp;";
  }
  if (wordPart === "↓") {
    return "<br>";
  }
  if (wordPart === "s") {
    return '<span class="space">&nbsp;</span>';
  }
  let result = '<span class="word-wrapper">';

  const words = wordPart.split("&nbsp;");
  const totalWords = words.length;

  for (let k = 0; k < totalWords; k++) {
    result += '<span class="word">';
    if (createLetters) {
      result += splitWordToSpans(words[k]);
    } else {
      result += words[k];
    }
    result += "</span>";

    if (k < totalWords - 1) {
      result += "&nbsp;";
    }
  }

  result += "</span>";
  return result;
}

class TextSplitter {
  splitHTMLToHTML(html, createLetters = false) {
    html = html.trim();

    html = html.split(" ").join(" s ");
    html = html.split("&nbsp;").join(" s ");
    html = html.split("<br>").join(" ↓ ");
    html = html.split("</br>").join(" ↓ ");
    html = html.split("<br/>").join(" ↓ ");
    html = html.split("&shy;").join(" ↑ ");

    const words = html.split(" ");
    const totalWords = words.length;
    let result = "";

    for (let k = 0; k < totalWords; k++) {
      // const word = words[k];
      result += createWordPart(words[k], createLetters);
      // result += '<span class="space"> </span>';
    }

    return result;
  }
  split(target, createLetters = false) {
    target.innerHTML = this.splitHTMLToHTML(
      target.innerHTML.trim(),
      createLetters
    );
    return {
      words: target.querySelectorAll(".word"),
      letters: createLetters ? target.querySelectorAll(".letter") : null,
    };
  }
}

export default new TextSplitter();
