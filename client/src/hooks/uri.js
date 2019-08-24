import useHttp from "./http";

const useUri = (name, id, item) => {
  const [data, loading] = useHttp(`${name}/${id}/${item}?`);
  return [data, loading];
};

export default useUri;
