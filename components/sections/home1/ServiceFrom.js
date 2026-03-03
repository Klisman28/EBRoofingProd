"use client";
import { useState } from "react";

export default function ServiceFrom() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOk(false);
    setError("");

    const payload = {
      name: e.target.username.value,
      email: e.target.email.value,
      phone: e.target.number.value,
      city: e.target.city.value,
      serviceType: e.target.serviceType.value,
      urgency: e.target.urgency.value,
      message: e.target.message?.value || `Lead captured from Home. City: ${e.target.city.value}, Service: ${e.target.serviceType.value}, Urgency: ${e.target.urgency.value}`,
    };

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await r.json();
      setLoading(false);

      if (r.ok) {
        setOk(true);
        e.target.reset();
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      setError("Failed to send message.");
    }
  };

  return (
    <section className="service__from">
      <div className="auto_container">
        <div className="from__one">
          <div className="from__left">
            <h3>Get A Free Estimate</h3>
          </div>

          <div className="from__content">
            <form onSubmit={handleSubmit} id="contact-form">
              <div className="from__inner" style={{ flexWrap: 'wrap', gap: '15px' }}>
                <div className="form-group" style={{ flex: '1 1 30%' }}>
                  <input type="text" name="username" placeholder="Name" required />
                </div>
                <div className="form-group" style={{ flex: '1 1 30%' }}>
                  <input type="text" name="number" placeholder="Phone" required />
                </div>
                <div className="form-group" style={{ flex: '1 1 30%' }}>
                  <input type="email" name="email" placeholder="Email" />
                </div>

                <div className="form-group" style={{ flex: '1 1 30%' }}>
                  <input type="text" name="city" placeholder="City (ex: Attleboro)" required />
                </div>
                <div className="form-group" style={{ flex: '1 1 30%' }}>
                  <select name="serviceType" required style={{ width: '100%', height: '55px', border: '1px solid #e1e1e1', padding: '0 20px', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <option value="" disabled selected>Service Needed</option>
                    <option value="Roof Replacement">Roof Replacement</option>
                    <option value="Roof Repair">Roof Repair</option>
                    <option value="Siding/Windows">Siding & Windows</option>
                    <option value="Gutters">Gutters</option>
                  </select>
                </div>
                <div className="form-group" style={{ flex: '1 1 30%' }}>
                  <select name="urgency" required style={{ width: '100%', height: '55px', border: '1px solid #e1e1e1', padding: '0 20px', borderRadius: '5px', backgroundColor: '#fff' }}>
                    <option value="" disabled selected>Urgency</option>
                    <option value="Emergency (Leaking Now)">Emergency (Leaking Now)</option>
                    <option value="1-2 Weeks">1-2 Weeks</option>
                    <option value="Just looking for an estimate">Just looking for an estimate</option>
                  </select>
                </div>



                <div className="message-btn">
                  <div className="service__btn btn-one">
                    <button className="btn__submit" type="submit" disabled={loading}>
                      <span>{loading ? "Sending..." : "Submit Now"}</span>
                    </button>
                  </div>
                </div>

                {ok && <p style={{ marginTop: 10 }}>✅ Thanks! We received your request.</p>}
                {error && <p style={{ marginTop: 10 }}>❌ {error}</p>}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
