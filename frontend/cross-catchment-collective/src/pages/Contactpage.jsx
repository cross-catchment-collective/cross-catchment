import { Mail, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser"

function ContactPage() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

const handleChange = (e) => {
  const {name, value} = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }))
}

const sendEmail = (e) => {
  e.preventDefault()
  // console.log('Form submitted: ', formData)
  emailjs.send("service_ypeczl3", "template_v105gkc", formData,"6Bzx4DcI-NfTr-zId")
  .then(() => {
    alert("Message submitted!");

    setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
  })
  .catch(err => alert("Message not sent"))
}

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div className="text-left">

            <p className="text-4xl font-semibold text-[#22613C]">
              Get in touch
            </p>

            {/* <div className="w-24 h-1 bg-[#22613C] mt-6 rounded-full"></div> */}

            <p className="mt-10 text-base leading-tight text-gray-700">
              Have a question, interested in partnering with us, or want to learn more about our work and partnerships? 
              We'd love to connect with you. Reach out using the contact details below, and we'll be happy to assist.
            </p>

            {/* Contact Info */}

            <div className="mt-14 space-y-8">

              <div className="flex items-center gap-6">

                {/* <div className="w-16 h-16 rounded-full bg-[#EEF3EF] flex items-center justify-center">

                  <Mail
                    size={28}
                    className="text-[#22613C]"
                  />

                </div> */}

                <div>

                  <h3 className="text-2xl font-semibold text-[#22613C]">
                    General Contact
                  </h3>

                  <a
                    href="mailto:catchmentcollaboration@duct.org.za"
                    className="text-lg text-gray-700 hover:text-[#22613C]"
                  >
                    communications@crosscatchmentcollective.org
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-6">

                {/* <div className="w-16 h-16 rounded-full bg-[#EEF3EF] flex items-center justify-center">

                  <Linkedin
                    size={28}
                    className="text-[#22613C]"
                  />

                </div> */}

                <div>

                  <h3 className="text-2xl font-semibold text-[#22613C]">
                    Follow Us
                  </h3>

                  <a
                    href="https://www.linkedin.com/company/cross-catchment-collective/about/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-[#22613C]"
                  >
                    LinkedIn
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8">

            <form onSubmit={sendEmail} className="space-y-5">

              <div>

                {/* <label className="block mb-2 font-semibold">
                  Name
                </label> */}

                <input
                  type="text"
                  placeholder="Name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#22613C] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#22613C]"
                />

              </div>

              <div>

                {/* <label className="block mb-2 font-semibold">
                  Email
                </label> */}

                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full rounded-lg border border-[#22613C] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#22613C]"
                />

              </div>

              <div>

                {/* <label className="block mb-2 font-semibold">
                  Message
                </label> */}

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="w-full rounded-lg border border-[#22613C] px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#22613C]"
                />

              </div>

              <button
                type="submit"
                className="w-full bg-[#22613C] hover:bg-[#18492C] text-white py-2 rounded-lg font-semibold flex justify-center items-center gap-3 transition"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactPage;