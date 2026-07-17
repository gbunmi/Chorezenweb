import type { FC } from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';

const Section: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="tos__section">
    <h2 className="tos__section-title">{title}</h2>
    {children}
  </div>
);

export const PrivacyPolicy: FC = () => (
  <>
    <Nav />
    <main className="tos">
      <div className="container tos__container">
        <div className="tos__header">
          <p className="tos__label">Legal</p>
          <h1 className="display tos__title">Privacy Policy</h1>
          <p className="tos__meta">Last updated: June 2026</p>
        </div>

        <div className="tos__body">

          <Section title="1. Who We Are">
            <p>Chorezen ("we", "us", "our") is a home cleaning services company based in Nigeria, operating the website at <strong>chorezenweb.vercel.app</strong>. We are committed to protecting your personal information and being transparent about how we use it.</p>
            <p>This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights regarding it.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect personal information when you contact us or book a service. This may include:</p>
            <ul>
              <li><strong>Contact details:</strong> your name, phone number, and WhatsApp handle.</li>
              <li><strong>Property information:</strong> your address and details about the property to be cleaned.</li>
              <li><strong>Booking details:</strong> the services requested, preferred dates, and any special instructions.</li>
              <li><strong>Communication history:</strong> messages exchanged with us via WhatsApp or other channels.</li>
            </ul>
            <p>We do not collect payment card details directly. Any payments made are processed through agreed methods at the time of booking.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use your personal information to:</p>
            <ul>
              <li>Process and confirm your bookings.</li>
              <li>Communicate with you about your service, including confirmations, reminders, and updates.</li>
              <li>Respond to your enquiries and provide customer support.</li>
              <li>Improve our services based on your feedback.</li>
              <li>Send occasional service updates or promotions (you may opt out at any time).</li>
            </ul>
            <p>We will never use your data for purposes beyond what is described in this policy without your explicit consent.</p>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <p>We process your personal data in accordance with the Nigeria Data Protection Act (NDPA) 2023, on the following grounds:</p>
            <ul>
              <li><strong>Contract performance:</strong> to fulfil your booking and deliver the service you've requested.</li>
              <li><strong>Legitimate interests:</strong> to communicate with you, improve our services, and manage our business.</li>
              <li><strong>Consent:</strong> where you have opted in to receive marketing communications.</li>
            </ul>
          </Section>

          <Section title="5. How We Share Your Information">
            <p>We do not sell your personal data. We may share it only in the following circumstances:</p>
            <ul>
              <li><strong>Our cleaning team:</strong> to coordinate and carry out your booking, team members will be given your address and relevant instructions.</li>
              <li><strong>Legal obligations:</strong> if required to do so by law or in response to a valid legal request.</li>
            </ul>
            <p>We do not share your data with any third-party marketing companies or data brokers.</p>
          </Section>

          <Section title="6. How Long We Keep Your Data">
            <p>We retain your personal information for as long as is necessary to provide our services and comply with legal obligations:</p>
            <ul>
              <li>Booking and contact details are kept for up to <strong>2 years</strong> after your last interaction with us.</li>
              <li>Financial records may be kept for up to <strong>7 years</strong> in line with HMRC requirements.</li>
            </ul>
            <p>After this period, your data is securely deleted.</p>
          </Section>

          <Section title="7. Data Security">
            <p>We take reasonable steps to protect your personal information from unauthorised access, loss, or misuse. Our team communicates via WhatsApp, which uses end-to-end encryption.</p>
            <p>However, no method of electronic transmission is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
          </Section>

          <Section title="8. Your Rights">
            <p>Under UK GDPR, you have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Right to access:</strong> request a copy of the data we hold about you.</li>
              <li><strong>Right to rectification:</strong> ask us to correct inaccurate or incomplete data.</li>
              <li><strong>Right to erasure:</strong> request that we delete your data, subject to legal obligations.</li>
              <li><strong>Right to restrict processing:</strong> ask us to limit how we use your data.</li>
              <li><strong>Right to object:</strong> object to us processing your data for marketing purposes.</li>
              <li><strong>Right to data portability:</strong> request your data in a portable format.</li>
            </ul>
            <p>To exercise any of these rights, please contact us via WhatsApp. We will respond within 30 days in line with the Nigeria Data Protection Act 2023.</p>
          </Section>

          <Section title="9. Cookies">
            <p>Our website does not currently use tracking cookies or third-party analytics tools. If this changes, we will update this policy and notify you accordingly.</p>
          </Section>

          <Section title="10. Third-Party Links">
            <p>Our website may contain links to third-party sites (such as WhatsApp). We are not responsible for the privacy practices of those sites and encourage you to read their privacy policies.</p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have any questions about this Privacy Policy or how we handle your data, please get in touch:</p>
            <ul>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/2347044415890" target="_blank" rel="noopener noreferrer">Chat with us</a></li>
            </ul>
            <p>You also have the right to lodge a complaint with the Nigeria Data Protection Commission (NDPC) at <strong>ndpc.gov.ng</strong> if you believe your data has been mishandled.</p>
          </Section>

        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default PrivacyPolicy;
