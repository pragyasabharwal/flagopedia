import React, { useState } from "react";
import "./styles.css";

const flagsDictionary = {
  "🇲🇺": "Mauritius",
  "🇲🇻": "Maldives",
  "🇲🇲": "Myanmar (Burma)",
  "🇰🇵 ": "North Korea",
  "🇰🇷": "South Korea",
  "🇰🇼": "Kuwait",
  "🇮🇩": "Indonesia",
  "🇮🇪": "Ireland",
  "🇮🇱": "Israel",
  "🇮🇳": "India",
  "🇮🇶": "Iraq",
  "🇮🇷": "Iran",
  "🇮🇸": "Iceland",
  "🇮🇹": "Italy",
  "🇫🇷": "France",
  "🇬🇦": "Gabon",
  "🇬🇧": "United Kingdom",
  "🇪🇬": "Egypt",
  "🇩🇪": "Germany",
  "🇨🇳": "China",
  "🇨🇦": "Canada",
  "🇧🇩": "Bangladesh",
  "🇧🇪": "Belgium",
  "🇦🇲": "Armenia",
  "🇦🇴": "Angola",
  "🇦🇶": "Antarctica",
  "🇦🇷": "Argentina",
  "🇦🇸": "American Samoa",
  "🇦🇹": "Austria",
  "🇦🇺": "Australia",
  "🇦🇪": "United Arab Emirates",
  "🇦🇫": "Afghanistan",
  "🇺🇸": "United States"
};
var knownFlags = Object.keys(flagsDictionary);
// console.log(knownFlags)

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiDisplay(event) {
    var inputText = event.target.value;
    var meaning = flagsDictionary[inputText];
    if (meaning === undefined) {
      meaning = "Sorry! Currently not available. Please try again later";
    }
    setMeaning(meaning);
  }

  function flagClickHandler(flag) {
    var meaning = flagsDictionary[flag];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav>
        <h1>Flag-o-pedia</h1>
      </nav>
      <input
        placeholder="Insert the flag to see the country it belongs to"
        onChange={emojiDisplay}
      />
      <h1
        style={{
          textShadow: "2px 2px rgb(119, 113, 113)"
          //  backgroundColor: "orange",
          //  width: "50%",
          //  marginLeft: "auto",
          //  marginRight: "auto"
        }}
      >
        {" "}
        Country: {meaning}
      </h1>

      {knownFlags.map(function (flag) {
        return (
          <span onClick={() => flagClickHandler(flag)} key={flag}>
            {flag}
          </span>
        );
      })}
    </div>
  );
}
