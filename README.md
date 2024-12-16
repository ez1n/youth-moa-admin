## 패키지 설치 & 실행

```bash
yarn
# or
yarn install
```

```bash
yarn dev
```

## NOTE

### 아이콘 생성

- 아이콘은 `_components/icons` 폴더에 생성한다.
- 아이콘 생성시 해당 태그 내부에 svg 파일을 삽입한다.
  ```js
  <span className={tw("inline-block", className)}>
    <svg /> // svg 파일
  </span>
  ```
- 변경하고 싶은 값(`width`, `height`, `fill`, `stroke` 등)에 대한 값을 `props`로 대체한다.

  ```ts
  import { tw } from "../../../tailwindmerge.config";

  import type { IconProps } from "./type";

  export const IcoName = (props: IconProps) => {
    const { color, size = 20, className } = props;

    return (
      <span className={tw("inline-block", className)}>
        <svg
          width={size} // 변경한 부분
          height={size} // 변경한 부분
          viewBox="0 0 22 22"
          fill="none"
          xmlns="xmlns..."
        >
          <path
            d="path..."
            fill={color} // 변경한 부분
          />
        </svg>
      </span>
    );
  };
  ```

### twMerge

> 자세한 내용은 `tailwindmerge.config.ts` 파일 참고

- `tailwind`는 동일한 속성의 클래스를 입력하는 경우 tailwind class의 내부 우선순위에 따라 적용되기 때문에 `twMerge` 함수가 필요하다.
- `twMerge` 함수는 동일한 유틸리티 클래스를 사용하는 클래스가 적용되는 경우 해당 속성이 누락되는 경우가 있다.
- 이를 해결하기 위해 `extendTailwindMerge`를 이용하여 해당 속성들을 병합한다.

  ```ts
  // 정의

  export const tw = extendTailwindMerge({
    extend: {
      theme: {
        colors: Object.entries(theme?.colors || {}).map(
          ([k, v]: [string, Record<string, string>]) => ({
            [k]: Object.keys(v),
          })
        ),
      },
      classGroups: {
        "font-size": [
          ...Object.keys(theme?.fontSize || {}).map((key) => `text-${key}`),
          { text: [(value: string) => Number(value) >= 0] },
        ],
      },
    },
  });
  ```

  ```ts
  // 사용

  import { ComponentPropsWithoutRef } from "react";
  import { tw } from "../../../tailwindmerge.config"; // 정의한 tw 함수 임포트

  interface PropsType extends ComponentPropsWithoutRef<"input"> {
    helpText?: string;
    className?: string;
  }

  export function DatePicker(props: PropsType) {
    const { helpText, className, ...rest } = props;
    return (
      <div className="relative">
        <input
          type="date"
          className={tw(
            // tw 사용
            "w-full border rounded-[10px] border-border-gray px-4 py-3",
            helpText ? "border-red" : "border-border-gray",
            className
          )}
          {...rest}
        />

        {helpText && (
          <p className="absolute text-red text-xs ml-4 mt-1/2 w-max">
            {helpText}
          </p>
        )}
      </div>
    );
  }
  ```
