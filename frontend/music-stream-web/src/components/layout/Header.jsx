import React, { useState } from "react";
import "./Header.css";
import {
  Search,
  X,
  Bell,
  Mail,
  UploadCloud
} from "lucide-react";

const Header = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", query);
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <header className="header">
      <div className="header-container">
        
        {/* LEFT */}
        <div className="header-left">
          <div className="logo">MS</div>
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Stream</a>
            <a href="#">Library</a>
          </nav>
        </div>

        {/* CENTER */}
        <div className="header-center">
          <form className="search-form" onSubmit={handleSubmit}>
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search for artists, tracks..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query.length > 0 && (
              <button type="button" className="clear-btn" onClick={clearSearch}>
                <X size={16} />
              </button>
            )}
          </form>
        </div>

        {/* RIGHT */}
        <div className="header-right">
          <button className="upload-btn" type="button">
            <UploadCloud size={18} />
            Upload
          </button>
          <button className="icon-btn" type="button">
            <Bell size={18} />
          </button>
          <button className="icon-btn" type="button">
            <Mail size={18} />
          </button>
          <div className="avatar">
            <img src="https://i.pravatar.cc/32" alt="user" />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;