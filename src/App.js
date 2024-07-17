import React from "react";
import { useState } from "react";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <TextExpander
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
        collapseButtonText={20}
      >
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ff6622",
          borderRadius: "4px",
          backgroundColor: "#fff5f0",
        }}
        collapseButtonText={20}
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        collapseButtonText={20}
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          backgroundColor: "#f0f0f0",
        }}
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({ children, style, collapseButtonText }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = children.toString();
  const shortText = text.slice(0, collapseButtonText);

  function handleFunction() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div style={style}>
      <p>{isExpanded ? text : `${shortText}...`}</p>
      <button onClick={handleFunction}>
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}
