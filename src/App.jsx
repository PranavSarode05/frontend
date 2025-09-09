import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

// Use environment variable or fallback to your deployed backend URL
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://backend-f4ee.vercel.app';

function App() {
  const [entries, setEntries] = useState([]);
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [replaceUrl, setReplaceUrl] = useState("");
  const [replaceEmail, setReplaceEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/entries`);
      console.log('Fetched entries:', res.data);
      setEntries(res.data);
    } catch (err) {
      console.error("Error fetching entries:", err);
    }
  };

  const handleGetSuggestion = async () => {
    if (!findText || entries.length === 0) return;
    try {
      const res = await axios.post(`${API_BASE_URL}/suggest`, {
        uid: entries[0].uid,
        findText
      });
      setSuggestion(res.data.suggestion);
    } catch (err) {
      console.error('Error getting suggestion:', err);
      alert('Failed to get suggestion');
    }
  };

  const handleReplace = async (uid) => {
    if (!findText || !replaceText) {
      alert("Please fill in both Find Text and Replace Text.");
      return;
    }
    try {
      await axios.post(`${API_BASE_URL}/replace`, {
        uid,
        findText,
        replaceText,
        replaceUrl,
        replaceEmail
      });
      alert("Entry updated successfully!");
      fetchEntries();
    } catch (err) {
      console.error("Error replacing text:", err);
      alert("Failed to update entry");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Smart Find & Replace</h1>
      <input
        placeholder="Find Text"
        value={findText}
        onChange={(e) => setFindText(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        placeholder="Replace With"
        value={replaceText}
        onChange={(e) => setReplaceText(e.target.value)}
      />
      <input
        placeholder="Replace Email"
        value={replaceEmail}
        onChange={(e) => setReplaceEmail(e.target.value)}
      />
      <button onClick={handleGetSuggestion}>Get AI Suggestion</button>
      {suggestion && <p>AI Suggestion: {suggestion}</p>}
      <div style={{ marginTop: "20px" }}>
        {entries.map((entry) => (
          <div key={entry.uid} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h3>{entry.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: entry.body }}></p>
            <button onClick={() => handleReplace(entry.uid)}>Replace</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
