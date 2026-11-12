export const resumeWordLimits = { cv: 500, chat: 100 };
export const resumeCharacterLimit = 8000;

export function countWords(text: string) {
  return text.match(/\S+/gu)?.length ?? 0;
}
