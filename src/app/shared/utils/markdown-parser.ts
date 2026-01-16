export type InfoBlockChunk = {
  text: string;
  isBold: boolean;
  isItalic: boolean;
};

/* TODO SIMPLE POUR LE MOMENT, SI JE VEUX AJOUTER D'AUTRES MARKDOWN UTILISER UNE LIBRAIRIE (ngx-markdown, marked, markdown-it) */
/* TODO Gérer espaces avant ponctuation */
// ONLY for bold '**' and italic '_'
export function markdownParser(content: string): InfoBlockChunk[] {
  const arrayOfChunks: InfoBlockChunk[] = [];
  let isBold = false;
  let isItalic = false;
  let buffer = "";

  for (let i = 0; i < content.length; i++) {
    const char = content[i];

    // Bold text
    if (content.startsWith("**", i)) {
      if (buffer.trim().length > 0) {
        arrayOfChunks.push({ text: buffer.trimEnd(), isBold, isItalic });
      }
      buffer = "";
      isBold = !isBold;
      i++;
      continue;
    }

    // Italic text
    if (content.startsWith("_", i)) {
      if (buffer.trim().length > 0) {
        arrayOfChunks.push({ text: buffer.trimEnd(), isBold, isItalic });
      }
      buffer = "";
      isItalic = !isItalic;
      continue;
    }
    // Normal text
    buffer += char;
  }

  if (buffer.trim().length > 0) {
    arrayOfChunks.push({ text: buffer.trimStart(), isBold, isItalic });
  }

  return arrayOfChunks;
}
