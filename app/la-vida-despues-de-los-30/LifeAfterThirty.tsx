"use client";

import {lifeDocument} from "./levels";
import {ConversationFamily} from "../conversation-families/ConversationFamily";
import {CEFR_LEVELS} from "../conversation-families/types";

/** Keep the exploration's camera, dialogs and styles inside one lesson surface. */
export default function LifeAfterThirty() {
  return (
    <ConversationFamily id="la-vida-despues-de-los-30" title="La vida después de los 30" levels={CEFR_LEVELS} defaultLevel="B1">{level=><iframe key={level}
      title={`La vida después de los 30: actividad de conversación ${level}`}
      srcDoc={lifeDocument(level)}
      allow="fullscreen"
      allowFullScreen
      sandbox="allow-scripts allow-same-origin allow-top-navigation-by-user-activation"
      style={{ display: "block", width: "100%", height: "100svh", border: 0, background: "#f6f4ee" }}
    />}</ConversationFamily>
  );
}
