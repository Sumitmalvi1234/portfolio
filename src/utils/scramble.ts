// src/utils/scramble.ts
/**
 * Custom performance-tuned text decryption logic for hardware acceleration
 */
export function scrambleText(element: HTMLElement, targetText: string, duration: number = 1): void {
  const chars = '01_X//█▓▒░■◆▲▼○●';
  const iterations = Math.floor(duration * 60);
  let currentIteration = 0;

  const interval = setInterval(() => {
    element.innerText = targetText
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        // If the step hasn't arrived at this character's block index, cycle random noise
        if (index < (currentIteration / iterations) * targetText.length) {
          return targetText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    currentIteration++;
    if (currentIteration >= iterations) {
      clearInterval(interval);
      element.innerText = targetText; // Hard lock precise finish
    }
  }, 1000 / 60);
}
