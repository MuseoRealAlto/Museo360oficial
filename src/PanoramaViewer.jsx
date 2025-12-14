import { useEffect, useRef, use } from "react";
import "pannellum";
import "pannellum/build/pannellum.css";

import sala1 from "./panoramas/sala1.jpg";
import sala2 from "./panoramas/sala2.jpg";

export default function PanoramaViewer() {
  const viewerRef = useRef(null);

  useEffect(() => {

    
    const initialScene = localStorage.getItem("lastScene") || "sala1";
    const viewer = window.pannellum.viewer(viewerRef.current, {
      default: {
        firstScene: initialScene,
        autoLoad: true,
        showControls: true,
      },

      scenes: {
       
        sala1: {
          type: "equirectangular",
          panorama: sala1,

          hotSpots: [
            // HOTSPOT INFORMATIVO 
            {
              pitch: -4.46,
              yaw: 21.95,
              type: "info",
              text: `
Desde que el hombre habitó estas tierras muchas cosas sucedieron.
La historia nunca se detuvo; su presente sólo se entiende
relacionándolo con el pasado.
Un museo no sólo debe mostrar sino explicar la causalidad de los hechos,
con todas las herramientas que le sean posibles.
Aquí exponemos algunos resultados de las investigaciones en
Arqueología y Antropología que realizamos en esta región.
              `,
            },

            //HOTSPOT DE NAVEGACIÓN
            {

            
              pitch: -21.3,
              yaw: -52.5,
              type: "scene",
              text: "Ir a Sala 2",
              sceneId: "sala2",
            },
          ],
        },

        //SALA 2
        sala2: {
          type: "equirectangular",
          panorama: sala2,

          hotSpots: [
            {
              pitch: -34.66,
              yaw: -114.28,
              type: "scene",
              text: "Volver a Sala 1",
              sceneId: "sala1",
            },
          ],
        },
      },
    });


      
    viewer.on("scenechange", (sceneId) => {
      localStorage.setItem("lastScene", sceneId);
    });


    // Evitar duplicados 
    return () => {
      try {
        viewer.destroy();
      } catch {}
    };


  }, []);



  return (
    <div
      ref={viewerRef}
      style={{ width: "100%", height: "100vh" }}
    />
  );
}


function hotspotWithModal(hotSpotDiv, args) {
  hotSpotDiv.className = "hotspot-hitbox";

  const icon = document.createElement("div");
  icon.className = "hotspot-icon";
  icon.innerHTML = "ℹ️";

  icon.addEventListener("click", (e) => {
    e.stopPropagation();
    args.onClick();
  });

  hotSpotDiv.appendChild(icon);
}


function InfoModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <h2>Texto Introductorio del Museo</h2>

        <p>
          Desde que el hombre habitó estas tierras muchas cosas sucedieron.
          La historia nunca se detuvo; su presente sólo se entiende
          relacionándolo con el pasado.
        </p>

        <p>
          Un museo no sólo debe mostrar sino explicar la causalidad de los hechos,
          con todas las herramientas que le sean posibles.
        </p>

        <p>
          Aquí exponemos algunos resultados de las investigaciones en
          Arqueología y Antropología que realizamos en esta región.
        </p>
      </div>
    </div>
  );
}


//{yaw: 21.95, pitch: -4.46}

    // // Metodo para conocer coordenadas exactas
    // viewer.on("mousedown", () => {
    //   const yaw = viewer.getYaw();
    //   const pitch = viewer.getPitch();

    //   console.log("📍 Hotspot coords →", {
    //     yaw: Number(yaw.toFixed(2)),
    //     pitch: Number(pitch.toFixed(2)),
    //   });
    // });