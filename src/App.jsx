import { useState } from "react";
import { quotes } from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState("theme");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Quote Cards</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("theme")}>By Theme</button>
        <button onClick={() => setActiveTab("author")}>By Author Type</button>
        <button onClick={() => setActiveTab("length")}>By Length</button>
      </div>

      {activeTab === "theme" && <OrganizeByTheme />}
      {activeTab === "author" && <OrganizeByAuthor />}
      {activeTab === "length" && <OrganizeByLength />}
    </div>
  );
}

function QuoteCard({ text }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px"
      }}
    >
      {text}
    </div>
  );
}

function OrganizeByTheme() {
  const grouped = {};

  quotes.forEach((quote) => {
    if (!grouped[quote.theme]) {
      grouped[quote.theme] = {};
    }
    if (!grouped[quote.theme][quote.subTheme]) {
      grouped[quote.theme][quote.subTheme] = [];
    }
    grouped[quote.theme][quote.subTheme].push(quote);
  });

  return (
    <div>
      {Object.keys(grouped).map((theme) => (
        <div key={theme}>
          <h2>{theme}</h2>
          {Object.keys(grouped[theme]).map((sub) => (
            <div key={sub}>
              <h3>{sub}</h3>
              {grouped[theme][sub].map((quote) => (
                <QuoteCard key={quote.id} text={quote.text} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function OrganizeByAuthor() {
  const grouped = {};

  quotes.forEach((quote) => {
    if (!grouped[quote.authorType]) {
      grouped[quote.authorType] = {};
    }
    if (!grouped[quote.authorType][quote.subAuthorType]) {
      grouped[quote.authorType][quote.subAuthorType] = [];
    }
    grouped[quote.authorType][quote.subAuthorType].push(quote);
  });

  return (
    <div>
      {Object.keys(grouped).map((type) => (
        <div key={type}>
          <h2>{type}</h2>
          {Object.keys(grouped[type]).map((sub) => (
            <div key={sub}>
              <h3>{sub}</h3>
              {grouped[type][sub].map((quote) => (
                <QuoteCard key={quote.id} text={quote.text} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function OrganizeByLength() {
  const grouped = {};

  quotes.forEach((quote) => {
    if (!grouped[quote.length]) {
      grouped[quote.length] = {};
    }
    if (!grouped[quote.length][quote.subLength]) {
      grouped[quote.length][quote.subLength] = [];
    }
    grouped[quote.length][quote.subLength].push(quote);
  });

  return (
    <div>
      {Object.keys(grouped).map((length) => (
        <div key={length}>
          <h2>{length}</h2>
          {Object.keys(grouped[length]).map((sub) => (
            <div key={sub}>
              <h3>{sub}</h3>
              {grouped[length][sub].map((quote) => (
                <QuoteCard key={quote.id} text={quote.text} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

