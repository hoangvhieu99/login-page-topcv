export default function Button({
  name,
  icon,
  onClick,
  bg,
  bPad,
  color,
  bRad,
  width,
  height,
  opacity,
  pointer,
}) {
  return (
    <button
      className="btn"
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
        width: width,
        height: height,
        pointerEvents: pointer,
        opacity: opacity,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </button>
  );
}
