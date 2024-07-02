import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ButtonIcon({
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
      className="btn btn-signin"
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
      <FontAwesomeIcon icon={icon} />
      {name}
    </button>
  );
}
