import Section from "../components/Section";

function Home() {
  const items = [
    {
      id: 1,
      title: "Saxobeats",
      description: "Alexndra Stan",
      image: "https://i.scdn.co/image/ab67616d00001e02b787b5b057751c4d5bb5de54",
      type: "album",
    },
    {
      id: 2,
      title: "Taio Cruz",
      description: "TY.O (International Version)",
      image: "https://i.scdn.co/image/ab67616d00001e0227656009177a4273a62c758a",
      type: "album",
    },
    {
      id: 3,
      title: "#willpower",
      description: "will.i.am",
      image: "https://i.scdn.co/image/ab67616d00001e02e6082141bd7c86ae9f11ea26",
      type: "artist",
    },
    {
      id: 4,
      title: "Saxobeats",
      description: "Alexndra Stan",
      image: "https://i.scdn.co/image/ab67616d00001e02b787b5b057751c4d5bb5de54",
      type: "podcast",
    },
    {
      id: 5,
      title: "Saxobeats",
      description: "Alexndra Stan",
      image: "https://i.scdn.co/image/ab67616d00001e02b787b5b057751c4d5bb5de54",
      type: "album",
    },
  ];
  return (
    <div className="grid gap-y-8">
      <Section title="Recently Played" more="/blabla" items={items} />
      <Section title="Shows to try" more="/blabla" items={items} />
      <Section title="Made For Kemal Bekcan" more="/blabla" items={items} />
    </div>
  );
}

export default Home;
