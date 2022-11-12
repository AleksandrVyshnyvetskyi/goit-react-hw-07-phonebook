import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={150}
      width={150}
      strokeWidth={2}
      strokeWidthSecondary={5}
      color="#ffa200"
      secondaryColor="#8bd3e1"
    />
  );
}
