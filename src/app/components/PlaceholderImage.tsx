export default function generatePlaceholderImage({ text, width, height }: { text: string; width: number; height: number }) {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f97316"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial" 
        font-size="20" 
        fill="white" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${text}
      </text>
    </svg>
  `;

  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
} 