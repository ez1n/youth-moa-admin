import { Portal } from "@/_components/common/Portal";
import { ProgramFilterNameType, ProgramModalDataType } from "@/_types";
import { FilterItem } from "./FilterItem";
import { tw } from "../../../../tailwindmerge.config";
import { Button } from "@/_components/common/Button";
import { BUTTON_TYPE } from "@/_constants";
import { IcoCancel, IcoRefresh, IcoReset } from "@/_components/icons";
import { useState } from "react";

interface PropsType extends ProgramModalDataType {
  className?: string;
  selected: string[];
  onSave: ({
    name,
    selected,
  }: {
    name: ProgramFilterNameType;
    selected: string[];
  }) => void;
  onClose: () => void;
}

export const FilterDetailModal = (props: PropsType) => {
  const { type, list, selected, className, onSave, onClose } = props;

  const [newSelected, setNewSelected] = useState(selected);

  const handleSelectFilter = (value: string) => {
    if (newSelected.includes(value)) {
      setNewSelected((prev) => prev.filter((item) => item != value));

      return;
    }

    setNewSelected((prev) => [...prev, value]);
  };

  const handleReset = () => {
    setNewSelected(selected);
  };

  const handleSave = () => {
    if (!type) return;

    onSave({ name: type, selected: newSelected });
    onClose();
  };

  return (
    <Portal portalId="program-filter">
      <div className="fixed top-0 left-0 z-50 flex items-center  w-full h-full p-5">
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-30" />

        <section
          className={tw(
            "relative overflow-y-scroll bg-white rounded-xl px-11 py-8 w-full max-w-[823px] m-auto",
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">
              {type === "regions" ? "지역" : "청년센터"}
            </span>
            <button onClick={onClose}>
              <IcoCancel />
            </button>
          </div>

          <ul
            className={tw(
              "mt-11 mb-8",
              type === "regions" ? "grid grid-cols-3" : "grid grid-cols-4"
            )}
          >
            {list.map((item) => (
              <li className="my-2" key={item.id}>
                <FilterItem
                  name={item.name}
                  isChecked={newSelected.includes(item.name)}
                  onClick={() => handleSelectFilter(item.name)}
                />
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center gap-6 h-12">
            <Button
              icon={<IcoReset />}
              type={BUTTON_TYPE.outlined}
              onClick={handleReset}
            >
              초기화
            </Button>
            <Button onClick={handleSave}>확인</Button>
          </div>
        </section>
      </div>
    </Portal>
  );
};
