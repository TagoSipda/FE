import React from "react";
import { createPortal } from "react-dom";

interface ModalContainerP {
  classNames?: string;
  onClose?: () => void;
  children: React.ReactElement;
}

const ChildrenWrapper = ({ children }: { children: React.ReactElement }) => {
  return React.cloneElement(children, {
    className: `${children.props?.className || ""} absolute w-full z-50 top-0`,
  });
};

const ModalContainer = ({
  children,
  classNames = "",
  onClose,
}: ModalContainerP) => {
  return (
    <section className={classNames}>
      {createPortal(
        <div className="top-0 fixed">
          <div
            className="relative inset-0 max-w-[480px] w-screen h-screen min-w-[320px] max-h-[926px] min-h-[640px] bg-black bg-opacity-30 z-40 "
            onClick={onClose}
          ></div>
          <ChildrenWrapper children={children || <div></div>}></ChildrenWrapper>
        </div>,
        document.body
      )}
    </section>
  );
};

export default ModalContainer;
