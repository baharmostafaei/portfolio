import { motion } from "motion/react";

interface AnimatedLiliumProps {
  size?: number;
  opacity?: number;
  className?: string;
  rotate?: number;
  floatY?: number;
  floatX?: number;
  duration?: number;
  rotateDrift?: number;
}

export function AnimatedLilium({
  size = 400,
  opacity = 0.12,
  className = "",
  rotate = 0,
  floatY = 18,
  floatX = 10,
  duration = 8,
  rotateDrift = 8,
}: AnimatedLiliumProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -floatY, 0],
        x: [0, floatX, 0],
        rotate: [rotate, rotate + rotateDrift, rotate],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
      style={{ display: "inline-block", transformOrigin: "center" }}
    >
      <LiliumFlower size={size} opacity={opacity} rotate={0} />
    </motion.div>
  );
}

interface LiliumFlowerProps {
  size?: number;
  opacity?: number;
  className?: string;
  rotate?: number;
  style?: React.CSSProperties;
}

export function LiliumFlower({
  size = 400,
  opacity = 0.12,
  className = "",
  rotate = 0,
  style,
}: LiliumFlowerProps) {
  const id = `lf-${rotate}-${size}`;

  // 3 "back" petals (slightly larger, rendered first)
  const backPetalAngles = [15, 135, 255];
  // 3 "front" petals (slightly narrower, rendered on top)
  const frontPetalAngles = [75, 195, 315];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      className={className}
      style={{ opacity, transform: `rotate(${rotate}deg)`, ...style }}
      aria-hidden="true"
    >
      <defs>
        {/* Radial gradient: cream at flower center → deep pink at petal tips */}
        <radialGradient
          id={`${id}-petal`}
          cx="200"
          cy="200"
          r="155"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FEF0F5" />
          <stop offset="18%" stopColor="#F9CCDE" />
          <stop offset="50%" stopColor="#EF96BF" />
          <stop offset="80%" stopColor="#E070A8" />
          <stop offset="100%" stopColor="#D458A0" />
        </radialGradient>

        {/* Slightly cooler/darker variant for back petals */}
        <radialGradient
          id={`${id}-petal-back`}
          cx="200"
          cy="200"
          r="155"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FDEAF4" />
          <stop offset="18%" stopColor="#F5BEDD" />
          <stop offset="50%" stopColor="#E888B8" />
          <stop offset="80%" stopColor="#D860A0" />
          <stop offset="100%" stopColor="#CC4898" />
        </radialGradient>

        {/* Throat/center: pale yellow-green */}
        <radialGradient id={`${id}-throat`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FAFFF0" />
          <stop offset="60%" stopColor="#EAF8C8" />
          <stop offset="100%" stopColor="#C8E890" />
        </radialGradient>

        {/* Stamen anther */}
        <radialGradient id={`${id}-anther`} cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#B03050" />
          <stop offset="100%" stopColor="#5A0820" />
        </radialGradient>
      </defs>

      <g transform="translate(200,200)">
        {/* ── Back petals (rendered behind) ── */}
        {backPetalAngles.map((angle) => (
          <g key={`back-${angle}`} transform={`rotate(${angle})`}>
            {/* Main petal body — wide spatula shape */}
            <path
              d="M 0,0
                 C -7,-14, -38,-30, -46,-62
                 C -54,-94, -30,-124, -8,-136
                 C -2,-138, 2,-138, 8,-136
                 C 30,-124, 54,-94, 46,-62
                 C 38,-30, 7,-14, 0,0 Z"
              fill={`url(#${id}-petal-back)`}
            />
            {/* Central vein */}
            <path
              d="M 0,-4 C 0,-35, -2,-85, -2,-130"
              stroke="rgba(195,90,138,0.28)"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
            />
            {/* Secondary veins */}
            <path
              d="M -1,-22 C -10,-40, -24,-68, -32,-98"
              stroke="rgba(195,90,138,0.17)"
              strokeWidth="0.9"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 1,-22 C 10,-40, 24,-68, 32,-98"
              stroke="rgba(195,90,138,0.17)"
              strokeWidth="0.9"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M -2,-38 C -18,-56, -34,-80, -40,-108"
              stroke="rgba(195,90,138,0.12)"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 2,-38 C 18,-56, 34,-80, 40,-108"
              stroke="rgba(195,90,138,0.12)"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* ── Front petals (rendered on top, slightly narrower) ── */}
        {frontPetalAngles.map((angle) => (
          <g key={`front-${angle}`} transform={`rotate(${angle})`}>
            <path
              d="M 0,0
                 C -6,-12, -34,-28, -41,-58
                 C -48,-88, -26,-118, -6,-132
                 C -2,-134, 2,-134, 6,-132
                 C 26,-118, 48,-88, 41,-58
                 C 34,-28, 6,-12, 0,0 Z"
              fill={`url(#${id}-petal)`}
            />
            <path
              d="M 0,-4 C 0,-33, -1,-82, -1,-127"
              stroke="rgba(200,88,145,0.28)"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M -1,-20 C -9,-38, -22,-65, -30,-94"
              stroke="rgba(200,88,145,0.17)"
              strokeWidth="0.9"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 1,-20 C 9,-38, 22,-65, 30,-94"
              stroke="rgba(200,88,145,0.17)"
              strokeWidth="0.9"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M -2,-36 C -16,-54, -30,-78, -36,-104"
              stroke="rgba(200,88,145,0.12)"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 2,-36 C 16,-54, 30,-78, 36,-104"
              stroke="rgba(200,88,145,0.12)"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* ── Throat / center disc ── */}
        <circle r="24" fill={`url(#${id}-throat)`} />
        <circle r="16" fill="#F2FDE8" opacity="0.9" />

        {/* ── Stamens (6) — pale green filaments + dark burgundy anthers ── */}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <g key={`stamen-${angle}`} transform={`rotate(${angle})`}>
            {/* Filament */}
            <line
              x1="0"
              y1="-10"
              x2="0"
              y2="-54"
              stroke="#B8D888"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            {/* Anther — elongated oval, dark burgundy/maroon */}
            <ellipse
              cx="0"
              cy="-58"
              rx="4"
              ry="6.5"
              fill={`url(#${id}-anther)`}
            />
            {/* Anther sheen */}
            <ellipse
              cx="-1.2"
              cy="-61"
              rx="1.2"
              ry="2.5"
              fill="rgba(240,160,180,0.35)"
            />
          </g>
        ))}

        {/* ── Pistil — central, taller than stamens ── */}
        <line
          x1="0"
          y1="-10"
          x2="0"
          y2="-62"
          stroke="#98C860"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Stigma */}
        <circle cx="0" cy="-65" r="5" fill="#78B040" />
        <circle cx="0" cy="-65" r="2.5" fill="#A8E060" opacity="0.7" />

        {/* ── Center highlight ── */}
        <circle r="8" fill="#F0FFE0" opacity="0.7" />
      </g>
    </svg>
  );
}
