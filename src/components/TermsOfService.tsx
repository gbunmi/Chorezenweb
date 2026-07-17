import type { FC } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';

const Section: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="tos__section">
    <h2 className="tos__section-title">{title}</h2>
    {children}
  </div>
);

export const TermsOfService: FC = () => (
  <>
    <Nav />
    <main className="tos">
      <div className="container tos__container">
        <div className="tos__header">
          <p className="tos__label">Legal</p>
          <h1 className="display tos__title">Terms of Service</h1>
          <p className="tos__meta">Last updated: June 2026</p>
        </div>

        <div className="tos__body">

          <Section title="1. Introduction">
            <p>Welcome to Chorezen. These Terms of Service ("Terms") govern your use of our cleaning services and website at <strong>chorezenweb.vercel.app</strong> (the "Service"), operated by Chorezen ("we", "us", or "our"), a cleaning services company based in Nigeria.</p>
            <p>By booking our services or using our website, you agree to be bound by these Terms. Please read them carefully. If you do not agree with any part of these Terms, you may not use our Service.</p>
          </Section>

          <Section title="2. Our Services">
            <p>Chorezen provides professional home and residential cleaning services, including but not limited to:</p>
            <ul>
              <li><strong>Standard Cleaning:</strong> routine cleaning to maintain a fresh, comfortable space.</li>
              <li><strong>Move-in Cleaning:</strong> deep cleaning for properties being moved into or vacated.</li>
              <li><strong>Extra Tasks:</strong> additional services such as oven cleaning, laundry, window cleaning, and fridge resets.</li>
            </ul>
            <p>All bookings are subject to availability. We reserve the right to decline or cancel a booking at our discretion.</p>
          </Section>

          <Section title="3. Bookings">
            <p>All bookings are made via our WhatsApp channel. By submitting a booking request, you confirm that:</p>
            <ul>
              <li>You are at least 18 years of age.</li>
              <li>You have the authority to grant access to the property being cleaned.</li>
              <li>The information you provide is accurate and complete.</li>
            </ul>
            <p>A booking is only confirmed upon receipt of payment. Once payment is made, we will confirm the date, time, scope of work, and any additional details via WhatsApp.</p>
          </Section>

          <Section title="4. Cancellations & Rescheduling">
            <p>We understand that plans change. Our cancellation policy is as follows:</p>
            <ul>
              <li><strong>More than 24 hours' notice:</strong> Full refund or free rescheduling.</li>
              <li><strong>Less than 24 hours' notice:</strong> A cancellation fee of up to 50% of the booking value may apply.</li>
              <li><strong>No-show or access denied on the day:</strong> The full booking fee is charged.</li>
            </ul>
            <p>To cancel or reschedule, please contact us via WhatsApp as early as possible.</p>
          </Section>

          <Section title="5. Pricing & Payment">
            <p>All prices are agreed at the time of booking. Pricing may vary based on property size, service type, and additional tasks requested.</p>
            <ul>
              <li>Payment is required upfront to confirm your booking. Your slot is not reserved until payment has been received.</li>
              <li>We accept payment via bank transfer or other methods communicated via WhatsApp.</li>
              <li>All prices are quoted in Nigerian Naira (NGN) unless otherwise stated.</li>
              <li>Chorezen reserves the right to update pricing. Any changes will be communicated before your booking is confirmed.</li>
            </ul>
          </Section>

          <Section title="6. Your Responsibilities">
            <p>To ensure the best results and a smooth service, you agree to:</p>
            <ul>
              <li>Ensure safe access to the property at the agreed time.</li>
              <li>Secure or remove any valuables, fragile items, or pets prior to our arrival.</li>
              <li>Inform us of any known hazards, allergies, or special requirements at the time of booking.</li>
              <li>Ensure the property has running water and electricity available for our team.</li>
            </ul>
            <p>Chorezen is not responsible for any damage, loss, or injury arising from a failure to meet these responsibilities.</p>
          </Section>

          <Section title="7. Liability">
            <p>We take care of your home as if it were our own. However:</p>
            <ul>
              <li>Chorezen's liability for any damage caused during a cleaning is limited to the cost of repair or replacement of the damaged item, up to a maximum of the total value of the booking.</li>
              <li>We are not liable for pre-existing damage, wear and tear, or items left unsecured.</li>
              <li>All damage claims must be reported within 24 hours of the completed clean.</li>
              <li>Chorezen is not liable for indirect or consequential losses of any kind.</li>
            </ul>
          </Section>

          <Section title="8. Privacy">
            <p>We collect and process personal information in accordance with our Privacy Policy. By using our Service, you consent to such processing and confirm that all information you provide is accurate.</p>
            <p>We will never sell your personal data to third parties. Your contact details are used solely to manage your bookings and communicate with you about our services.</p>
          </Section>

          <Section title="9. Intellectual Property">
            <p>All content on our website, including text, graphics, logos, and illustrations, is the property of Chorezen Ltd and is protected by copyright. You may not reproduce, distribute, or use any content without our prior written permission.</p>
          </Section>

          <Section title="10. Changes to These Terms">
            <p>We may update these Terms from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of our Service after any changes constitutes your acceptance of the new Terms.</p>
            <p>We encourage you to review these Terms periodically.</p>
          </Section>

          <Section title="11. Governing Law">
            <p>These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms or your use of our Service shall be subject to the exclusive jurisdiction of the Nigerian courts.</p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have any questions about these Terms, please reach out to us:</p>
            <ul>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/message/44BVXDXZRV2IB1" target="_blank" rel="noopener noreferrer">Chat with us</a></li>
            </ul>
          </Section>

        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default TermsOfService;
