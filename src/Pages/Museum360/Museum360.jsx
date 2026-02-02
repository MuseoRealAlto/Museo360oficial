import React from "react";
import PanoramaViewer from "./PanoramaViewer";
import "./Museum360.css";
import logo360 from "../../assets/360.png";

export default function Museum360() {
  return (
    <section className="museum360-page">

      <header className="museum360-header">
        <h1>Museo Real Alto</h1>
        
      </header>

      <div className="museum360-card">
        <PanoramaViewer />
      </div>

    </section>
  );
}
