import Covers from "./Covers";

export default function Top({
  currentStationID,
  setStationID,
}: {
  currentStationID: number;
  setStationID: (id: number) => void;
}) {
  return (
    <div className="h-auto w-screen flex items-center px-4 py-2">
      <div className="flex-1 flex justify-end items-center pr-6">
        <div className="flex flex-col">
          <div>Settings</div>
          <div>Radio</div>
        </div>
        <div className="mx-2">|</div>
      </div>
      <div className="flex-none flex items-center gap-4">
        {"<"}
        <Covers currentStationID={currentStationID} />
        {">"}
      </div>
      <div className="flex-1 flex justify-start items-center pl-6">
        <div>Pause</div>
      </div>
    </div>
  );
}
