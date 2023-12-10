import { useState, useEffect } from "react";
import ContactImage from "../assets/img/contact-banner.png";
const ContactUs = () => {
  const [contactData, setContactData] = useState({});
  const [database, setDatabase] = useState([]);
  useEffect(() => {
    if (database.length > 0) {
      setTimeout(() => {
        document.getElementById("show-modal").showModal();
      }, 500);
    }
  }, [database]);

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("success-modal").showModal();
    setTimeout(() => {
      document.getElementById("success-modal").close();
    }, 1500);
    setDatabase([...database, contactData]);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };
  return (
    <div className=" flex 800px:flex-row flex-col items-center justify-between gap-8 p-8">
      <div className="bg-yellow-400/80  dark:bg-gray-900 flex items-center justify-center rounded-xl w-full 800px:w-[50%]">
        <div className="py-8 lg:py-16 px-4 mx-auto 800px:w-full">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Get in Touch with Pawsome! Have Questions or Need Assistance?
            Contact Us Today!
          </p>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="3"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                name="message"
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-yellow-400 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center 800px:w-[50%]">
        <img
          src={ContactImage}
          alt="contact us banner image"
          className="object-contain w-[650px] "
        />
      </div>
      {/* MODALS  */}
      <dialog id="success-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Submitted!</h3>
          <p className="py-4">Contact Request Initiated Successfully</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="show-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">All Data</h3>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {database.map((item, key) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={key}
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.email}
                  </td>
                  <td className="px-6 py-4">{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ContactUs;
