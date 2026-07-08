import { useSearchParams } from "react-router";

export function useQueryParam<T extends string>(key: string) {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(key) as T | null;

  const setValue = (newValue: T) => {
    setSearchParams(
      (prevParams) => {
        if (newValue === "") {
          prevParams.delete(key);
        } else {
          prevParams.set(key, newValue.toString());
        }

        return prevParams;
      },
      { replace: true },
    );
  };

  const setMultipleValues = (newValues: Record<string, string>) => {
    setSearchParams(
      (prevParams) => {
        Object.entries(newValues).forEach(([key, value]) => {
          if (value === "") {
            prevParams.delete(key);
          } else {
            prevParams.set(key, value.toString());
          }
        });

        return prevParams;
      },
      { replace: true },
    );
  };

  return [value, setValue, setMultipleValues] as const;
}
