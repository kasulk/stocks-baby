import Info from "../../../_ressources/circle-info-solid.svg";
export default function InfoButton() {
  const size = 16;

  //   return <Info />;
  return (
    <svg
      //   className={`text-slate-300`}
      className={`ml-1`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      //   viewBox="0 0 24 24"
      height={size}
      width={size}
    >
      {/* <!-- Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </svg>
  );
}
