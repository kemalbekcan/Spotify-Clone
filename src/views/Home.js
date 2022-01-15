import Section from "../components/Section";

function Home() {
  const items = [
    {
      id: 1,
      title: "Saxobeats",
      description: "Alexndra Stan",
      artist: "Polat Alemdar",
      image: "https://i.scdn.co/image/ab67616d00001e02b787b5b057751c4d5bb5de54",
      type: "album",
      src: "https://cdn.uppbeat.io/audio-output/104/458/main-version/streaming-previews/STREAMING-tropicana-soundroll-main-version-02-15-1725.mp3",
    },
    {
      id: 2,
      title: "Taio Cruz",
      description: "TY.O (International Version)",
      artist: "Hacı Mehmet",
      image: "https://i.scdn.co/image/ab67616d00001e0227656009177a4273a62c758a",
      type: "album",
      src: "https://cdn.uppbeat.io/audio-output/330/201/main-version/streaming-previews/STREAMING-trendsetter-mood-maze-main-version-02-53-1004.mp3",
    },
    {
      id: 3,
      title: "#willpower",
      description: "will.i.am",
      artist: "Mükerrem Zeynep",
      image: "https://i.scdn.co/image/ab67616d00001e02e6082141bd7c86ae9f11ea26",
      type: "artist",
      src: "https://cdn.uppbeat.io/audio-output/346/221/main-version/streaming-previews/STREAMING-i-know-atm-main-version-02-38-1126.mp3",
    },
    {
      id: 4,
      title: "Saxobeats",
      description: "Alexndra Stan",
      artist: "Rafi Akkaş",
      image: "https://i.scdn.co/image/ab67616d00001e02b787b5b057751c4d5bb5de54",
      type: "podcast",
      src: "https://cdn.uppbeat.io/audio-output/237/6619/main-version/streaming-previews/STREAMING-jazzy-cookies-kidcut-main-version-02-05-19687.mp3",
    },
    {
      id: 5,
      title: "Saxobeats",
      description: "Alexndra Stan",
      artist: "Mehmetcan Akay",
      image: "https://i.scdn.co/image/ab67616d00001e02b787b5b057751c4d5bb5de54",
      type: "album",
      src: "https://cdn.uppbeat.io/audio-output/346/215/main-version/streaming-previews/STREAMING-young-love-atm-main-version-02-47-1071.mp3",
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
