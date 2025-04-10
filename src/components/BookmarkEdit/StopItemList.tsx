import React, { useCallback, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { TStop } from "utils/types";
import StopItem from "./StopItem";

interface StopItemListProps {
  list: TStop[];
  handleDragEnd: (event: DragEndEvent) => void;
}

const StopItemList = ({ list, handleDragEnd }: StopItemListProps) => {
  const [activeId, setActiveId] = useState<string>("");

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    active && setActiveId(active.id as string);
  };

  const _hangleDragEnd = (event: DragEndEvent) => {
    handleDragEnd(event);
    setActiveId("");
  };

  const getStop = useCallback(
    (id: string) => {
      const item = list.find((value) => value.number === id);

      if (item) return item;
    },
    [list]
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={_hangleDragEnd}
      onDragStart={handleDragStart}
      sensors={sensors}
    >
      <SortableContext
        items={list.map((stop) => stop.number)}
        strategy={verticalListSortingStrategy}
      >
        <div className="mt-4 space-y-2">
          {list.map((stop) => (
            <StopItem key={stop.number} id={stop.number} stop={stop} />
          ))}
        </div>
      </SortableContext>
      <DragOverlay>
        {activeId ? (
          <>
            {
              // <div id={activeId}></div>
              <StopItem
                key={activeId}
                id={activeId}
                stop={getStop(activeId) as TStop}
              />
            }
          </>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default StopItemList;
