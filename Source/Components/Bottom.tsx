export default function Bottom({
  currentStationName,
}: {
  currentStationName: string;
}) {
  return (
    <>
      <div className="flex-1 w-screen justify-top items-center flex flex-col">
        <div>L1 - R1</div>
        <div>
          <div>{currentStationName}</div>
          <div></div>
        </div>
      </div>
    </>
  );
}
