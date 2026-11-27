import Covers from "./Covers";

export default function Top({
  currentStationID,
}: {
  currentStationID: number;
}) {
  return (
    <>
      <div className="h-auto w-screen flex justify-center">
        <div className="flex">
          <div className="flex flex-col">
            <div>Settings</div>
            <div>Radio</div>
          </div>
          <div>|</div>
        </div>
        <div className="flex">
          {"<"}
          <Covers currentStationID={currentStationID} />
          {">"}
        </div>
        <div>
          <div>Pause</div>
        </div>
      </div>
    </>
  );
}
