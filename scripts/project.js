const wordList = [];
const wordListEl = document.querySelector("#words");
const searchBtn = document.querySelector("#searchWord");

const displayWords = (words) => {
  words.forEach((word) => {
    const articleEl = document.createElement("article");
    const h3El = document.createElement("h3");
    h3El.textContent = word.word;

    const divEl = document.createElement("div");
    const partOfSpeechEl = document.createElement("p");
    partOfSpeechEl.textContent = `Part of Speech: ${word.partOfSpeech}`;
    const definitionEl = document.createElement("p");
    definitionEl.textContent = `Definition: ${word.definition}`;

    divEl.appendChild(partOfSpeechEl);
    divEl.appendChild(definitionEl);

    articleEl.appendChild(h3El);
    articleEl.appendChild(divEl);

    wordListEl.appendChild(articleEl);
  });
};

const getWord = async (searchWord) => {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`,
    );

    let word = await res.json();
    word = word[0];

    const wordObj = {
      word: word.word,
      phonetic: word.phonetic,
      partOfSpeech: word.meanings[0].partOfSpeech,
      definition: word.meanings[0].definitions[0].definition,
    };

    wordList.push(wordObj);
    displayWords(wordList);
  } catch (err) {
    console.log(err);
  }
};

const reset = () => {
  wordListEl.innerHTML = "";
};

searchBtn.addEventListener("click", async () => {
  const searchValue = document.querySelector("#searchValue").value;

  await getWord(searchValue);
});
