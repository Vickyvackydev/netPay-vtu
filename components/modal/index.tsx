/* eslint-disable jsx-a11y/control-has-associated-label */
"use client";

import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";

import React, { Fragment } from "react";

import { FaTimes } from "react-icons/fa";

type ModalProps = {
  // state modal params types
  isOpen: boolean;
  isClose: () => void;
  padding?: boolean;
  children: React.ReactNode;
  maxWidth: string;
  isBTnTrue?: boolean;
  edges: string;
};

// Modal component reusable in all component
const Modal = ({
  isOpen,
  isClose,
  children,
  padding,
  maxWidth,
  isBTnTrue,
  edges,
}: ModalProps) => {
  return (
    <Transition appear as={Fragment} show={isOpen ?? false}>
      <Dialog as="div" className="relative z-50" onClose={isClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full justify-center items-center  text-center">
            <TransitionChild
              as={Fragment}
              enter="transition-transform ease-out duration-300"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="transition-transform ease-in duration-200"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
            >
              <DialogPanel
                className={` ${maxWidth} transform overflow-hidden p-5 ${edges} flex items-end flex-col ${
                  padding && "p-3"
                } bg-white
                justify-end text-center   align-middle shadow-xl transition-all h-full`}
              >
                {isBTnTrue === true ? (
                  <button
                    className={`  hover:scale-90 
               bg-gray-300
                     transition-all flex items-center justify-center w-[25px] h-[25px]  rounded-full`}
                    onClick={isClose}
                    type="button"
                  >
                    <FaTimes size={13} color="black" />
                  </button>
                ) : null}
                <div className=" w-full mt-2 max-h-[500px] overflow-y-scroll overscroll-x-none ">
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;

// end..
