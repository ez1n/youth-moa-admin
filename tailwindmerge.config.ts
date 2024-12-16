import { extendTailwindMerge } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "./tailwind.config";

const { theme } = resolveConfig(tailwindConfig);

/**
 * Tailwind 설정을 사용자 정의 확장과 병합합니다.
 *
 * 사용자 정의된 tailwind 클래스를 사용할 경우, 동일한 유틸리티 클래스를 사용하는 클래스가 적용되지 않는 이슈가 있습니다.
 * (e.g. 텍스트 크기, 텍스트 색상은 같은 유틸리티 클래스(text-)를 사용하므로 제일 마지막에 선언된 클래스만 적용됩니다.)
 *
 * 이를 해결하기 위해 twMerge의 extendTailwindMerge 함수를 사용하여 사용자 정의 클래스와 Tailwind 설정을 병합합니다.
 *
 * @param {object} theme - 사용자 정의 테마 객체.
 * @returns {object} - 병합된 Tailwind 설정.
 */
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
