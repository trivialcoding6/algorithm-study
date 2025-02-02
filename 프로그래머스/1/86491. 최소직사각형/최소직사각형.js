function solution(sizes) {
  const rotated = sizes.map(([w, h]) => [Math.max(w, h), Math.min(w, h)]);

  const maxWidth = Math.max(...rotated.map(([w, h]) => w));
  const maxHeight = Math.max(...rotated.map(([w, h]) => h));

  return maxWidth * maxHeight;
}
