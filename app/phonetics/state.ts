export type ListeningAttempt = {
  heard: boolean;
  choice: number | null;
  checked: boolean;
  revealed: boolean;
  assisted: boolean;
};
export type ListeningAction =
  | {type: "heard" | "check" | "reveal" | "retry"}
  | {type: "choose"; choice: number};

export function initialAttempt(): ListeningAttempt {
  return {heard:false, choice:null, checked:false, revealed:false, assisted:false};
}

/** A playback event is not comprehension. Reading support never earns listening credit. */
export function updateAttempt(attempt: ListeningAttempt, action: ListeningAction, options: number): ListeningAttempt {
  switch (action.type) {
    case "heard": return {...attempt, heard:true};
    case "choose":
      if ((!attempt.heard && !attempt.assisted) || !Number.isInteger(action.choice) || action.choice < 0 || action.choice >= options) return attempt;
      return {...attempt, choice:action.choice, checked:false, revealed:false};
    case "check": return attempt.choice === null || (!attempt.heard && !attempt.assisted) ? attempt : {...attempt, checked:true};
    case "reveal": return {...attempt, revealed:true, assisted:true};
    case "retry": return {...attempt, choice:null, checked:false, revealed:false};
  }
}
