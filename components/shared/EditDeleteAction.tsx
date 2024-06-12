import Image from "next/image";
import React from "react";

interface Props {
  type: string;
  itemId: string;
}
const EditDeleteAction = ({ type, itemId }: Props) => {
  return (
    <>
      <div className="flex items-center justify-end gap-3 max-sm:w-full">
        {type === "Question" && (
          <Image
            src="/assets/icons/edit.svg"
            alt="Edit"
            width={14}
            height={14}
            className="cursor-pointer object-contain"
            //   onClick={handleEdit}
          />
        )}

        <Image
          src="/assets/icons/trash.svg"
          alt="Delete"
          width={14}
          height={14}
          className="cursor-pointer object-contain"
          //   onClick={handleDelete}
        />
      </div>
    </>
  );
};

export default EditDeleteAction;
