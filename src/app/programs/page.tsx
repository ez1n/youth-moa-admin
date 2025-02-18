"use client";

import { Button } from "@/_components/common/Button";
import { Title } from "@/_components/common/Title";
import { IcoAddOutlined } from "@/_components/icons";
import { useState } from "react";
import { Filter } from "./components/Filter";
import { ProgramFilterNameType, SelectedProgramFilterType } from "@/_types";

const dummyData = [
  {
    programId: 0,
    programImageFileId: 0,
    status: "진행예정",
    title: "string",
    description: "string",
    detailContent: "string",
    applyStartAt: "2025-02-09T06:50:16.130Z",
    applyEndAt: "2025-02-09T06:50:16.130Z",
    programStartAt: "2025-02-09T06:50:16.130Z",
    programEndAt: "2025-02-09T06:50:16.130Z",
    location: "string",
    currentAppliedUserCount: 0,
    maxUserCount: 0,
    contactNumber: "string",
    attachmentFileIds: [0],
    lectures: ["string"],
    freeQuestions: [
      {
        questionId: 0,
        question: "string",
      },
    ],
    createdAt: "2025-02-09T06:50:16.130Z",
    updatedAt: "2025-02-09T06:50:16.130Z",
  },
];

const centers = [
  {
    id: 0,
    name: "고진센터",
    region: "string",
  },
  {
    id: 1,
    name: "내일스퀘어",
    region: "string",
  },
  {
    id: 2,
    name: "딴딴회관",
    region: "string",
  },
];

const regions = [
  { id: 0, name: "과천시" },
  { id: 1, name: "김포시" },
  { id: 2, name: "고양시" },
  { id: 3, name: "광명시" },
  { id: 4, name: "광주시" },
  { id: 5, name: "구리시" },
  { id: 6, name: "군포시" },
  { id: 7, name: "남양주시" },
  { id: 8, name: "동두천시" },
  { id: 9, name: "부천시" },
  { id: 10, name: "성남시" },
  { id: 11, name: "수원시" },
  { id: 12, name: "시흥시" },
  { id: 13, name: "안산시" },
  { id: 14, name: "안성시" },
  { id: 15, name: "안양시" },
  { id: 16, name: "양주시" },
  { id: 17, name: "양평군" },
  { id: 18, name: "여주시" },
  { id: 19, name: "오산시" },
  { id: 20, name: "용인시" },
  { id: 21, name: "이천시" },
  { id: 22, name: "의왕시" },
  { id: 23, name: "의정부시" },
  { id: 24, name: "파주시" },
  { id: 25, name: "평택시" },
  { id: 26, name: "포천시" },
  { id: 27, name: "하남시" },
  { id: 28, name: "화성시" },
];

export default function ProgramsPage() {
  const [selectedFilter, setSelectedFilter] =
    useState<SelectedProgramFilterType>({
      regions: [],
      centers: [],
    });

  const handleSelectFilter = ({
    name,
    value,
  }: {
    name: ProgramFilterNameType;
    value: string;
  }) => {
    if (selectedFilter[name].includes(value)) {
      setSelectedFilter((prev) => ({
        ...prev,
        [name]: prev[name].filter((item) => item != value),
      }));

      return;
    }

    setSelectedFilter((prev) => ({ ...prev, [name]: [...prev[name], value] }));
  };

  const handleSaveFilterList = ({
    name,
    selected,
  }: {
    name: ProgramFilterNameType;
    selected: string[];
  }) => {
    setSelectedFilter((prev) => ({ ...prev, [name]: selected }));
  };

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-[60rem] px-5 py-12">
      <Title title="프로그램 관리" />

      <div className="flex justify-between gap-11 w-full">
        {/* 필터 */}
        <Filter
          regions={regions}
          centers={centers}
          selected={selectedFilter}
          onSelected={handleSelectFilter}
          onSetSelectedFilter={handleSaveFilterList}
        />

        {/* 목록 */}
        <section className="flex justify-center flex-col items-center w-full">
          <div className="flex justify-between items-center w-full">
            <span>전체 10</span>

            <span className="flex items-center justify-center w-max gap-6">
              <ul className="flex items-center justify-center gap-6">
                <li className="min-w-fit">전체</li>
                <li className="min-w-fit">진행중</li>
                <li className="min-w-fit">마감</li>
                <li className="min-w-fit">진행예정</li>
              </ul>

              <Button
                icon={<IcoAddOutlined />}
                className="w-[104px] h-9 font-normal text-sm"
                onClick={() => {}}
              >
                등록하기
              </Button>
            </span>
          </div>

          <div>프로그램 목록</div>
        </section>
      </div>
    </section>
  );
}
