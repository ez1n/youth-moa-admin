import { Button } from "@/_components/common/Button";
import { SeperateOpenableAccordion } from "@/_components/common/SeperateOpenableAccordion";
import { IcoArrow, IcoRefresh } from "@/_components/icons";
import { FilterItem } from "./FilterItem";
import {
  ProgramFilterDetailType,
  ProgramFilterNameType,
  ProgramModalDataType,
  SelectedProgramFilterType,
} from "@/_types";
import { useState } from "react";
import { FilterDetailModal } from "./FilterDetailModal";

interface PropsType {
  regions: ProgramFilterDetailType[];
  centers: ProgramFilterDetailType[];
  selected: SelectedProgramFilterType;
  onSelected: ({
    name,
    value,
  }: {
    name: ProgramFilterNameType;
    value: string;
  }) => void;
  onSetSelectedFilter: ({
    name,
    selected,
  }: {
    name: ProgramFilterNameType;
    selected: string[];
  }) => void;
}

export const Filter = (props: PropsType) => {
  const { regions, centers, selected, onSelected, onSetSelectedFilter } = props;

  const [modalData, setModalData] = useState<ProgramModalDataType>({
    isShow: false,
    type: "",
    list: [],
  });

  return (
    <>
      <section className="flex justify-start flex-col gap-y-4 min-w-64">
        <div className="flex justify-between items-center p-2 border rounded-lg bg-blue">
          <div className="text-white px-3 text-xl">필터</div>
          <Button
            className="p-2 w-100 text-white"
            onClick={() => {}}
            icon={<IcoRefresh />}
          >
            초기화
          </Button>
        </div>

        <SeperateOpenableAccordion title="지역" defaultOpen={true}>
          <ul className="flex flex-col items-center justify-center gap-1">
            {regions.slice(0, 15).map((region) => (
              <li className="w-full" key={region.id}>
                <FilterItem
                  name={region.name}
                  isChecked={selected.regions.includes(region.name)}
                  onClick={() =>
                    onSelected({ name: "regions", value: region.name })
                  }
                />
              </li>
            ))}
            {regions.length > 15 && (
              <div className="w-full flex justify-end items-center">
                <button
                  className="text-gray-001 font-semibold flex items-center gap-1"
                  onClick={() =>
                    setModalData((prev) => ({
                      ...prev,
                      isShow: true,
                      type: "regions",
                      list: regions,
                    }))
                  }
                >
                  지역 더보기
                  <IcoArrow direction="right" size={14} />
                </button>
              </div>
            )}
          </ul>
        </SeperateOpenableAccordion>

        <SeperateOpenableAccordion title="청년센터" defaultOpen={true}>
          <ul className="flex flex-col items-center justify-center gap-1">
            {centers.slice(0, 15).map((center) => (
              <li className="w-full" key={center.id}>
                <FilterItem
                  name={center.name}
                  isChecked={selected.centers.includes(center.name)}
                  onClick={() =>
                    onSelected({ name: "centers", value: center.name })
                  }
                />
              </li>
            ))}
            {centers.length > 15 && (
              <div className="w-full flex justify-end items-center">
                <button
                  className="text-gray-001 font-semibold flex items-center gap-1"
                  onClick={() =>
                    setModalData((prev) => ({
                      ...prev,
                      isShow: true,
                      type: "centers",
                      list: centers,
                    }))
                  }
                >
                  청년센터 더보기
                  <IcoArrow direction="right" size={14} />
                </button>
              </div>
            )}
          </ul>
        </SeperateOpenableAccordion>
      </section>

      {modalData.isShow && (
        <FilterDetailModal
          {...modalData}
          selected={
            modalData.type === "regions" ? selected.regions : selected.centers
          }
          className={modalData.type === "regions" ? "max-w-[448px]" : ""}
          onSave={onSetSelectedFilter}
          onClose={() =>
            setModalData({
              isShow: false,
              type: "",
              list: [],
            })
          }
        />
      )}
    </>
  );
};
