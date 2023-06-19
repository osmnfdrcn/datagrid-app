"use client";
import { Input } from "@/components/common/input";
import { setShowAddDataModal } from "@/store/slices/appSlice";
import { addEntry } from "@/store/slices/dataSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { useFormik } from "formik";
import { IoMdClose } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import FormSchema from "./FormSchema";
import { useCallback } from "react";

const AddNewEntryModal = () => {
  const dispatch = useAppDispatch();
  const { showAddDataModal } = useAppSelector((store: RootState) => store.app);

  const handleCloseModal = useCallback(
    () => dispatch(setShowAddDataModal(false)),
    [showAddDataModal]
  );

  const formik = useFormik({
    initialValues: {
      socialName: "",
      socialLink: "",
      description: "",
    },
    validationSchema: FormSchema,
    onSubmit: () => {
      const { socialName, socialLink, description } = formik.values;
      console.log(socialName);

      dispatch(
        addEntry({
          id: uuidv4(),
          socialName,
          socialLink,
          description,
        })
      );
      formik.resetForm();
      handleCloseModal();
    },
  });

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none    bg-neutral-800/70">
      <div className="relative w-[400px] my-6 mx-auto  md:h-auto lg:h-auto">
        {/* CONTENT */}
        <div
          className={`
              translate duration-500 h-full 
              ${showAddDataModal ? "translate-y-0" : "translate-y-full"}
              ${showAddDataModal ? "opacity-100" : "opacity-0"}
            `}
        >
          <div className="relative flex flex-col border-0 rounded-lg shadow-lg  w-full bg-white outline-none h-full md:h-auto lg:h-auto focus:outline-none translate py-8">
            {/* HEADER */}
            <div className="flex items-center justify-center                  p-6 rounded-t relative ">
              <button
                onClick={handleCloseModal}
                className="absolute left-9 p-1 border-0                   hover:opacity-70 transition"
              >
                <IoMdClose size={18} />
              </button>
              <h1 className="text-lg font-semibold">{"YENI KAYIT"} </h1>
            </div>
            {/* FORM */}
            <div className="relative p-6 ">
              <div>
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col  gap-4"
                >
                  <div className="flex flex-col gap-1">
                    <Input
                      type="text"
                      placeholder="Social Link"
                      name="socialName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.socialName}
                      className="w-full rounded-none text-xs"
                    />
                    {formik.errors.socialName && formik.touched.socialName && (
                      <p className="text-xs text-right text-red-600">
                        {formik.errors.socialName}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <Input
                      type="text"
                      placeholder="Social Link"
                      name="socialLink"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.socialLink}
                      className="w-full rounded-none text-xs"
                    />
                    {formik.errors.socialLink && formik.touched.socialLink && (
                      <p className="text-xs text-right text-red-600">
                        {formik.errors.socialLink}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <textarea
                      placeholder="Description"
                      name="description"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.description}
                      rows={4}
                      maxLength={150}
                      className="w-full rounded-none border p-3  text-xs"
                    />
                    {formik.errors.description &&
                      formik.touched.description && (
                        <p className="text-xs text-right text-red-600">
                          {formik.errors.description}
                        </p>
                      )}
                  </div>
                  <button
                    type="submit"
                    className="mt-6  py-2 w-full bg-black text-sm border-black text-white rounded-none hover:bg-slate-800 transition duration-300"
                  >
                    KAYDET
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewEntryModal;
