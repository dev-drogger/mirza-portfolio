import { useSpring } from "@react-spring/web";

function useFade() {
  const [fade, setFade] = useSpring(() => ({
    opacity: 1,
    config: { duration: 1000 },
  }));

  return { fade, setFade };
}

export default useFade;
