import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-4 py-16 h-screen">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Have questions or need help? Reach out to us anytime.
        </p>
        <form className="mt-8 max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Message"
            ></textarea>
          </div>
          <Button
            type="submit"
            className="hover:scale-110 duration-200 transition"
          >
            Send Message <IoIosSend />
          </Button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
