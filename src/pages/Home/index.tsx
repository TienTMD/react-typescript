import { useEffect } from "react";

export default function Home(props) {
  const [count, setCount] = useState<number>(0);

  const getName = (name: string) => {
    return `Username: ${name}`;
  };

  const onClick = () => {
    setCount((prev: number) => prev + 1);
  }

  useEffect(() => {
    getName();
  }, []);

  return <div>Home</div>;
}
