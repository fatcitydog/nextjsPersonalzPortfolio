import TypeIt from "typeit-react";
export default function TypeItComponent({ title }) {
  return (
    <TypeIt
      options={{
        speed: 30,
        cursor: false,
      }}
    >
      {title}
    </TypeIt>
  );
}
