import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      //ServiceID: service_qy4cd4j
      // TemplateID: template_y6zjbnp
      console.log("Form submitted:", formData);
      await emailjs.send(
        "service_qy4cd4j",
        "template_y6zjbnp",
        {
          from_name: formData.name,
          to_name: "Khanh Tieu",
          to_email: "tieutruongkhanh@gmail.com",
          message: formData.message,
        },
        { publicKey: "jA31gpurTDJMdjOFa" }
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center c-spacing section-spacing"
    >
      <Particles
        className="absolute inset-0 -z-50 size-full"
        quantity={100}
        color="#ffffff"
        ease={80}
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>

        <form action="" className="w-full" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              className="field-input field-input-focus"
              placeholder="Tieu Truong Khanh"
              autoComplete="name"
              required
            />
          </div>
          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              className="field-input field-input-focus"
              placeholder="tieutruongkhanh@gmail.com"
              autoComplete="email"
              required
            />
          </div>
          {/* Message */}
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              onChange={handleChange}
              type="message"
              rows="4"
              id="message"
              name="message"
              value={formData.message}
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              required
            />
          </div>
          {/* Send */}
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center cursor-pointer rounded-md bg-radial from-lavender to-royal hover-animation"
          >
            {isLoading ? "Loading" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
