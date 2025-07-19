import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Button from '../../shared/Button';
import { useForm } from 'react-hook-form';

const AssignmentModal = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    reset();
    console.log(data);
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md bg-white rounded-lg p-6 shadow-xl">
          <DialogTitle className="text-xl font-bold mb-4 text-gray-800">
            Create New Assignment
          </DialogTitle>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              {...register('title', { required: 'Title is required' })}
              placeholder="Assignment Title"
              className="w-full input input-bordered rounded-lg border focus:ring-2 focus:ring-green-500 bg-gray-300 dark:bg-gray-800 dark:text-white border-gray-300 text-black"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}

            <input
              type="date"
              {...register('dateline', { required: 'Date Required' })}
              className="input input-bordered w-full rounded-lg bg-gray-300 dark:bg-gray-800 border border-gray-300 dark:text-white text-black"
            />
            {errors.dateline && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
            <textarea
              name="description"
              placeholder="Assignment Description"
              className="w-full textarea textarea-bordered rounded-lg border focus:ring-2 focus:ring-green-500 bg-gray-300 dark:bg-gray-800 dark:text-white border-gray-300 text-black"
              rows="4"
            ></textarea>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className=" bg-red-600 py-1.5 px-2 rounded-md text-sm cursor-pointer text-white"
              >
                Cancel
              </button>
              <Button type="submit" label={'Add Assignment'} small={true} />
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default AssignmentModal;
