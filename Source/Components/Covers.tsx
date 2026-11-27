import { radioStations } from "./../Data/Data";

export default function Cover({
  currentStationID,
}: {
  currentStationID: number;
}) {
  const totalStations = radioStations.length; // currently its 20 bcuz i couldnt find the 2 best station covers :(

  const getStation = (offset: number) => {
    const targetId =
      ((currentStationID - 1 + offset + totalStations) % totalStations) + 1;
    return radioStations.find((station) => station.id === targetId);
  };

  const offsets = [-2, -1, 0, 1, 2]; // 0 is current

  return (
    <div className="flex items-center justify-center gap-2">
      {offsets.map((offset) => {
        const station = getStation(offset);

        return (
          <img
            key={offset}
            src={station?.imageSrc}
            alt={station?.name}
            className={
              `w-[7vw] h-[7vw] object-cover ` +
              (offset === 0 ? "outline-4 border-white" : "")
            }
          />
        );
      })}
    </div>
  );
}
