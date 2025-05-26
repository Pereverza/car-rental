import { type FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import s from "./BookingForm.module.css";

const BookingForm: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [bookingDate, setBookingDate] = useState<Date | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("✅ Thank you! Your booking has been submitted.");

    console.log("Submitted:", {
      ...formData,
      bookingDate: bookingDate ? bookingDate.toLocaleDateString() : "",
    });

    // Reset
    setFormData({ name: "", email: "", comment: "" });
    setBookingDate(null);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.titleWrapper}>
        <h2 className={s.title}>Book your car now</h2>
        <p className={s.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <div className={s.fieldsWrapper}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <DatePicker
          selected={bookingDate}
          onChange={(date) => setBookingDate(date)}
          placeholderText="Booking date"
          className={s.dateInput}
          dateFormat="dd.MM.yyyy"
          calendarStartDay={1}
          required
        />

        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className={s.submitButton}>
        Book now
      </button>
    </form>
  );
};

export default BookingForm;
