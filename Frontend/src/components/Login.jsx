import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const openModal = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) modal.close();
  };

  return (
    <div>
      {/* Trigger Modal */}
      <span
        onClick={openModal}
        className="underline text-blue-500 cursor-pointer"
      >
        
      </span>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border-color-black rounded-md outline-none"
                {...register('email', { required: 'Email is required' })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 border-color-black rounded-md outline-none"
                
                {...register('password', { required: 'Password is required' })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300"
              >
                Login
              </button>
            </div>
          </form>
          <p className="flex items-center mt-4"> 
            Not registered? {' '}
            <Link to="/signup" className="underline text-blue-500 cursor-pointer">
              Signup
            </Link>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
