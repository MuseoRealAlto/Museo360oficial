import { useEffect, useRef } from "react";
import "pannellum";
import "pannellum/build/pannellum.css";
import "./Museum360.css";

// =====================
// PANORAMAS
// =====================
import galeria1 from '../../assets/gallery/foto1.JPG';
import Entrada from "../../assets/panoramas/Entrada.png";
import S2 from "../../assets/panoramas/Seccion2.png";
import S4 from "../../assets/panoramas/Seccion4.png";
import S5 from "../../assets/panoramas/Seccion5.png";
import S6 from "../../assets/panoramas/Seccion6.png";
import S7 from "../../assets/panoramas/Seccion7.png";
import S7_1 from "../../assets/panoramas/Seccion7_1.png";
import S7_2 from "../../assets/panoramas/Seccion7_2.png";
import S8 from "../../assets/panoramas/Seccion8.png";
import S9 from "../../assets/panoramas/Seccion9.png";
import S10 from "../../assets/panoramas/Seccion10.png";
import S11 from "../../assets/panoramas/Seccion11.png";
import S12 from "../../assets/panoramas/Seccion12.png";
import S13 from "../../assets/panoramas/Seccion13.png";
import S14 from "../../assets/panoramas/Seccion14.png";
import S15 from "../../assets/panoramas/Seccion15.png";
import S16 from "../../assets/panoramas/Seccion16.png";
import S17 from "../../assets/panoramas/Seccion17.png";
import S18 from "../../assets/panoramas/Seccion18.png";
import S19 from "../../assets/panoramas/Seccion19.png";

export default function PanoramaViewer() {
  const viewerRef = useRef(null);

  useEffect(() => {
    const viewer = window.pannellum.viewer(viewerRef.current, {
      default: {
        firstScene: "entrada",
        autoLoad: true,
        showControls: true,
      },

      scenes: {
        // =====================
        // ENTRADA
        // =====================
        entrada: {
          type: "equirectangular",
          panorama: Entrada,
          hotSpots: [
            arrowPrev("seccion17", 71.35, -27.52),
            arrowNext("seccion2", -81.55, -25.77),
          ],
        },

        // =====================
        // SECCIONES NORMALES
        // =====================
        seccion2: {
          type: "equirectangular",
          panorama: S2,
          hotSpots: [
            arrowPrev("entrada", -96.49, -31.08),
            arrowNext("seccion4", 179.91, -30.04),
          ],
        },

        seccion4: {
          type: "equirectangular",
          panorama: S4,
          hotSpots: [
            arrowPrev("seccion2", 179.91, -36.04),
            arrowNext("seccion5", -96.49, -31.08),
          ],
        },

        seccion5: {
          type: "equirectangular",
          panorama: S5,
          hotSpots: [
            arrowNext("seccion7", 115.45, -25.92),
            arrowNext("seccion6", -2.87, -37.3),
            arrowPrev("seccion4", -130.75, -30.81),
          ],
        },

        seccion6: {
          type: "equirectangular",
          panorama: S6,
          hotSpots: [
            arrowPrev("seccion5", -173.76, -30.95),
          ],
        },

        // =====================
        // SECCIÓN 7 (ESPECIAL)
        // =====================
        seccion7: {
          type: "equirectangular",
          panorama: S7,
          hotSpots: [
            arrowNext("seccion8", 132.76, -31.39),
            arrowNext("seccion7_1", -47.81, -25.51),
            arrowPrev("seccion5", -146.66, -23.47),
          ],
        },

        seccion7_1: {
          type: "equirectangular",
          panorama: S7_1,
          hotSpots: [
            arrowNext("seccion7_2", 132.76, -31.39),
            arrowPrev("seccion7", -87.98, -39.69),
          ],
        },

        seccion7_2: {
          type: "equirectangular",
          panorama: S7_2,
          hotSpots: [
            arrowPrev("seccion7_1", -87.98, -39.69),
          ],
        },

        // =====================
        // CONTINUACIÓN
        // =====================
        seccion8: {
          type: "equirectangular",
          panorama: S8,
          hotSpots: [
            arrowNext("seccion9", -87.98, -34.69),
            arrowPrev("seccion7", 115.35, -36.75),
          ],
        },

        seccion9: {
          type: "equirectangular",
          panorama: S9,
          hotSpots: [
            arrowNext("seccion10", -117.72, -26.38),
            arrowPrev("seccion8", 50.16, -29.3),
          ],
        },

        seccion10: {
          type: "equirectangular",
          panorama: S10,
          hotSpots: [
            arrowNext("seccion11", 144.81, -19.07),
            arrowPrev("seccion9", -143.97, -20.1),
          ],
        },

        seccion11: {
          type: "equirectangular",
          panorama: S11,
          hotSpots: [
            arrowNext("seccion12", -53.35, -37.29),
            arrowPrev("seccion10", 98.86, -27.35),
          ],
        },

        seccion12: {
          type: "equirectangular",
          panorama: S12,
          hotSpots: [
            arrowNext("seccion13", 45.86, -29.36),
            arrowPrev("seccion11", -47.35, -37.29),
          ],
        },

        seccion13: {
          type: "equirectangular",
          panorama: S13,
          hotSpots: [
            arrowNext("seccion14", -47.35, -37.29),
            arrowPrev("seccion13", 77.94, -22.98),
          ],
        },

        seccion14: {
          type: "equirectangular",
          panorama: S14,
          hotSpots: [
            arrowNext("seccion15", -111.95, -28.19),
            arrowPrev("seccion13", 144.29, -29.02),
          ],
        },

        seccion15: {
          type: "equirectangular",
          panorama: S15,
          hotSpots: [
            arrowNext("seccion16", 87.06, -27.31),
            arrowPrev("seccion14", -175.88, -26.28),
          ],
        },

        seccion16: {
          type: "equirectangular",
          panorama: S16,
          hotSpots: [
            arrowNext("seccion17", 75.06, -28.31),
            arrowPrev("seccion15", -175.88, -26.28),
          ],
        },

        seccion17: {
          type: "equirectangular",
          panorama: S17,
          hotSpots: [
            arrowNext("seccion18", 88.32, -34.66),
            arrowPrev("seccion16", -133.1, -23.3),
            arrowPrev("entrada", -41.82, -30.43)
          ],
        },

        seccion18: {
          type: "equirectangular",
          panorama: S18,
          hotSpots: [
            arrowNext("seccion19", 122.05, -20.28),
            arrowPrev("seccion17", -69.39, -36.77),
          ],
        },

        seccion19: {
          type: "equirectangular",
          panorama: S19,
          hotSpots: [
            arrowPrev("seccion18", -114.58, -33.3),
          ],
        },
      },
    });

    return () => {
      try {
        viewer.destroy();
      } catch {}
    };
  }, []);

  // return <div ref={viewerRef} style={{ width: "100%", height: "100vh" }} />;
  return (
    <div
      ref={viewerRef}
      className="pano-embed"
    />
  );

}

// =====================
// HELPERS
// =====================
function arrowNext(sceneId, yaw, pitch, text = "➡️ Avanzar") {
  return { type: "scene", sceneId, yaw, pitch, text };
}

function arrowPrev(sceneId, yaw, pitch, text = "⬅️ Regresar") {
  return { type: "scene", sceneId, yaw, pitch, text };
}












// import { useEffect, useRef } from "react";
// import "pannellum";
// import "pannellum/build/pannellum.css";

// import S5 from "./panoramas/Seccion17.png";


// export default function PanoramaViewer() {
//   const viewerRef = useRef(null);

//   useEffect(() => {
//     let currentScene = "entrada";

//     const viewer = window.pannellum.viewer(viewerRef.current, {
//       default: {
//         firstScene: "entrada", // 🔑 debe existir
//         autoLoad: true,
//         showControls: true,
//       },
//       scenes: {
//         entrada: {
//           type: "equirectangular",
//           panorama: S5,
//           hotSpots: [    
          
//                        arrowNext("seccion18",    88.32, -34.66),
//             arrowPrev("seccion16",    -41.82, -30.43)
                         
//           ],
//         },
//       },
//     });

//     viewer.on("scenechange", (sceneId) => {
//       currentScene = sceneId;
//       console.log(`➡️ Entraste a la sección: ${sceneId}`);
//     });

//     viewer.on("mousedown", () => {
//       const yaw = viewer.getYaw();
//       const pitch = viewer.getPitch();

//       console.log(`📍 Hotspot en [${currentScene}] →`, {
//         yaw: Number(yaw.toFixed(2)),
//         pitch: Number(pitch.toFixed(2)),
//       });
//     });

//     return () => {
//       try {
//         viewer.destroy();
//       } catch {}
//     };
//   }, []);

//   // 🔴 ESTO ES OBLIGATORIO
//   return (
//     <div
//       ref={viewerRef}
//       style={{ width: "100%", height: "100vh" }}
//     />
//   );
// }


// function arrowNext(sceneId, yaw, pitch, text = "➡️ Avanzar") {
//   return {
//     type: "scene",
//     sceneId,
//     yaw,
//     pitch,
//     text,
//   };
// }

// function arrowPrev(sceneId, yaw, pitch, text = "⬅️ Regresar") {
//   return {
//     type: "scene",
//     sceneId,
//     yaw,
//     pitch,
//     text,
//   };
// }
