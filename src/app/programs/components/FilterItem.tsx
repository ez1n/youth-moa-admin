import { IcoCheckFilled, IcoCheckOutlined } from "@/_components/icons";

interface PropsType {
  name: string;
  isSelected?: boolean;
  onClick: () => void;
}

export const Badge = (props: PropsType) => {
  const { name, isSelected = false, onClick } = props;

  return (
    <button
      className={`rounded-2xl text-xs px-2.5 py-1 border font-semibold ${
        isSelected
          ? "bg-blue text-white border-blue"
          : "bg-gray-005 text-gray-002 border-gray-003"
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

interface ItemPropsType {
  name: string;
  isChecked?: boolean;
  onClick: () => void;
}

export const FilterItem = (props: ItemPropsType) => {
  const { name, isChecked = false, onClick } = props;
  return (
    <button
      className="flex items-center justify-start gap-3 text-sm"
      onClick={onClick}
    >
      <span className={isChecked ? "text-blue" : ""}>
        {isChecked ? (
          <IcoCheckFilled color="rgba(63, 48, 233, 1)" size={14} />
        ) : (
          <IcoCheckOutlined color="rgba(111, 111, 111, 1)" size={14} />
        )}
      </span>
      <p className="font-medium text-text">{name}</p>
    </button>
  );
};
