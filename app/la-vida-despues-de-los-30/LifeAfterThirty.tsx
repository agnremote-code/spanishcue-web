"use client";

import activityDocument from "./activity-document";

/** Keep the exploration's camera, dialogs and styles inside one lesson surface. */
export default function LifeAfterThirty() {
  return (
    <iframe
      title="La vida después de los 30: actividad de conversación B1"
      srcDoc={activityDocument}
      allow="fullscreen"
      allowFullScreen
      sandbox="allow-scripts allow-same-origin allow-top-navigation-by-user-activation"
      style={{ display: "block", width: "100%", height: "100svh", border: 0, background: "#f6f4ee" }}
    />
  );
}
