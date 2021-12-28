const HomeIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      className="Svg-sc-1bi12j5-0 hDgDGI home-icon"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z"
      ></path>
    </svg>
  );
};

const SearchIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height="24"
      width="24"
      className="Svg-sc-1bi12j5-0 hDgDGI search-icon"
      viewBox="0 0 24 24"
    >
      <path
        d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

const CollectionIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height="24"
      width="24"
      className="Svg-sc-1bi12j5-0 hDgDGI collection-icon"
      viewBox="0 0 24 24"
    >
      <path
        d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const PlusIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height="12"
      width="12"
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="Svg-sc-1bi12j5-0 hDgDGI"
    >
      <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" fill="currentColor"></path>
      <path fill="none" d="M0 0h16v16H0z"></path>
    </svg>
  );
};

const HeartIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height="12"
      width="12"
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="Svg-sc-1bi12j5-0 hDgDGI"
    >
      <path fill="none" d="M0 0h16v16H0z"></path>
      <path
        fill="currentColor"
        d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
      ></path>
    </svg>
  );
};

const DownloadIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      className="Svg-sc-1bi12j5-0 hDgDGI"
    >
      <path
        fill="currentColor"
        d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"
      ></path>
    </svg>
  );
};

const Icon = ({ name, size = 24 }) => {
  const icons = {
    home: HomeIcon,
    search: SearchIcon,
    collection: CollectionIcon,
    plus: PlusIcon,
    heart: HeartIcon,
    download: DownloadIcon,
  };
  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };
