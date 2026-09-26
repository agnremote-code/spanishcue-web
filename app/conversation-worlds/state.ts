import type { WorldLevel } from './types';

export function conversationWorldStorageKey(mode: 'machine' | 'rules', level: WorldLevel): string {
  return `chespanish-conversation-${mode}${level === 'B1' ? '' : `-${level}`}-v1`;
}
