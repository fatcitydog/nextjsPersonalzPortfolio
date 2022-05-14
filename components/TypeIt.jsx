import TypeIt from "typeit-react";
export default function TypeItComponent({ children }) {
  return (
    <TypeIt
      options={{
        speed: 30,
        cursor: false,
      }}
    >
      {children}
    </TypeIt>
  );
}
