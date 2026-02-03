import { CSSProperties } from "react";

export const frameStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "48px",
};

export const topRowStyle: CSSProperties = {
  display: "flex",
  width: "100%",
};

export const settingsButtonStyle: CSSProperties = {
  display: "flex",
  padding: "8px",
  fontSize: "24px",
  outline: "none",
  border: "none",
  background: "transparent",
  transition: "background 0.3s, color 0.3s",
  color: "white",
  opacity: "0.4",
  borderRadius: "6px",
  cursor: "pointer",
};

export const settingsStyle: CSSProperties = {
  minWidth: "400px",
  minHeight: "400px",
  maxHeight: "600px",
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#ffffff80",
  transition: "scale 0.3s",
  transformOrigin: "top left",
  borderRadius: "12px",
  backdropFilter: "blur(20px)",
};

export const settingsTopRowStyle: CSSProperties = {
  padding: "12px 20px",
  paddingBottom: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "18px",
  color: "white",
};

export const settingsCenterRowStyle: CSSProperties = {
  padding: "12px 20px",
  display: "flex",
  flexWrap: "wrap",
  height: "100%",
  overflowY: "auto",
};

export const inputStyle: CSSProperties = {
  outline: "none",
  background: "white",
  border: "none",
  borderRadius: "6px",
  minWidth: "100%",
  height: "32px",
  padding: "2px 8px",
  marginBottom: "12px",
};

export const settingsSelectCard: CSSProperties = {
  width: "16.666%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  gap: "2px",
  cursor: "pointer",
};

export const settingsSelectCardImage: CSSProperties = {
  width: "100%",
  objectFit: "contain",
  background: "white",
  borderRadius: "6px",
  padding: "8px",
};

export const settingsBottomRowStyle: CSSProperties = {
  padding: "12px 20px",
  paddingTop: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};

export const imageStyle: CSSProperties = {
  height: "300px",
  objectFit: "contain",
  filter: "contrast(0) brightness(200%)",
  opacity: "0.6",
};

export const bottomRowStyle: CSSProperties = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const textStyle: CSSProperties = {
  fontSize: "20px",
  color: "#ffffff",
  opacity: "0.6",
  letterSpacing: "2px",
};
