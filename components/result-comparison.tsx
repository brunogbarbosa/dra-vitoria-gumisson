import type { CSSProperties } from 'react';

type ComparisonItem = {
  image: string;
  orientation: string;
  comparisonRatio: number;
  beforeShare: number;
};

export function getComparisonRatio(item: ComparisonItem) {
  const share = Math.min(item.beforeShare, 1 - item.beforeShare);
  return item.orientation === 'vertical' ? item.comparisonRatio / share : item.comparisonRatio * share;
}

export function ResultComparison({ item, value }: { item: ComparisonItem; value: number }) {
  // Both crops use the same uniform scale from the original photograph.
  // The smaller half sets the visible canvas, without stretching either half.
  const share = Math.min(item.beforeShare, 1 - item.beforeShare);
  const vertical = item.orientation === 'vertical';
  const ratio = getComparisonRatio(item);
  const backgroundSize = vertical ? `100% ${100 / share}%` : `${100 / share}% 100%`;
  const photoStyle = { backgroundImage: `url(${item.image})`, backgroundSize };

  return <div
    className={`comparison ${vertical ? 'vertical' : ''}`}
    style={{ '--comparison-ratio': ratio } as CSSProperties}
    role="img"
    aria-label={`Comparação de antes e depois: ${Math.round(value)}% do registro anterior visível.`}
  >
    <div className="compare-half after" style={photoStyle} />
    <div className="compare-half before" style={{ ...photoStyle, clipPath: `inset(0 ${100 - value}% 0 0)` }} />
    <div className="comparison-line" style={{ left: `${value}%` }}><span aria-hidden="true">↔</span></div>
    <span className="compare-label left">Antes</span>
    <span className="compare-label right">Depois</span>
  </div>;
}
