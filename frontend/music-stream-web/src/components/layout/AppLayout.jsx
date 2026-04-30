import Header from "./Header.jsx";

export const AppLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
      </div>
    
    </div>
  );
};